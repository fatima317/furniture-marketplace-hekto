"use client";
import ProtectedRoute from "@/app/components/protectedRoute";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

// Define the Order interface
interface Order {
  _id: string;
  name: string;
  email: string;
  orderDate: string;
  phone: number;
  address: string;
  city: string;
  zipCode: string;
  cartItems: {
    name: string;
    image: string;
  }[];
  total: number;
  discount: number;
  status: string;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  // Fetch orders from Sanity CMS
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'order']{
          _id,
          name,
          email,
          orderDate,
          phone,
          address,
          city,
          zipCode,
          cartItems[] -> {
            name,
            image
          },
          total,
          discount,
          status
      }`
      )
      .then((data) => setOrders(data))
      .catch((error) => console.log("Error fetching orders", error));
  }, []);

  // Filter orders based on status
  const filteredOrders =
    filter === "All" ? orders : orders.filter((order) => order.status === filter);

  // Toggle order details
  const toggleOrderDetail = (orderId: string) => {
    setSelectedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  // Delete order function
  const handleDelete = async (orderId: string) => {
    const result = await Swal.fire({
      title: "Are you sure you want to delete this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await client.delete(orderId);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      Swal.fire("Deleted!", "Order has been deleted successfully.", "success");
    } catch (error) {
      Swal.fire("Error!", "Error deleting order.", "error");
    }
  };

  // Update order status
  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      await client.patch(orderId).set({ status: newStatus }).commit();
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order._id === orderId ? { ...order, status: newStatus } : order))
      );
      Swal.fire("Success!", `Order status updated to ${newStatus}.`, "success");
    } catch (error) {
      Swal.fire("Error!", "Error updating order status.", "error");
    }
  };

  const { user, isSignedIn } = useUser();
  const router = useRouter();

  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    if (isSignedIn && user) {
      setIsUserLoaded(true);
    }
  }, [isSignedIn, user, router]);

  if (!isUserLoaded) return <p className="text-center py-10 text-lg">Loading...</p>;

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-100">
      {/* Admin Dashboard Header */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <div className="flex space-x-2">
          {["All", "Pending", "Processing", "Shipped", "Delivered"].map((status) => (
            <button
              key={status}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === status ? "bg-blue-600" : "bg-gray-600 hover:bg-gray-700"
              }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </nav>

      {/* Orders Table */}
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Orders</h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3">Order ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Order Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <React.Fragment key={order._id}>
                  <tr
                    onClick={() => toggleOrderDetail(order._id)}
                    className="cursor-pointer hover:bg-gray-50 border-b"
                  >
                    <td className="p-3">{order._id}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>${order.total}</td>
                    <td>
                      <select
                        value={order.status || ""}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="p-2 border rounded-md"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(order._id);
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  {selectedOrderId === order._id && (
                    <tr>
                      <td colSpan={8} className="bg-gray-50 p-4">
                        <h3 className="font-semibold mb-2 text-gray-700">Order Details</h3>
                        <ul className="grid grid-cols-2 gap-4">
                          {order.cartItems.map((item, index) => (
                            <li key={`${order._id}-${index}`} className="flex items-center space-x-3">
                              <span>{item.name}</span>
                              {item.image && (
                                <Image
                                  src={urlFor(item.image).url()}
                                  alt="Product"
                                  width={50}
                                  height={50}
                                  className="rounded-md"
                                />
                              )}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <button
              onClick={() => router.push("/admin")}
              className="w-full bg-gray-900 text-white px-6 py-2 rounded-md font-medium mt-2 hover:bg-gray-600 transition"
            >
             Go to Admin Page
            </button>
      </div>
    </div>
    </ProtectedRoute>
  );
}
