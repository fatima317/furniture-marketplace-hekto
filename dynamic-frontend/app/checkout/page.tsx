"use client";
import { useEffect, useState } from "react";
import { getCartItems } from "../actions/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import AuthGuard from "@/components/ui/AuthGuard";

export default function Checkout() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    zipCode: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.stockLevel,
    0
  );
  const total = Math.max(subTotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const error = {
      name: !formValues.name,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
    };
    setFormError(error);
    return Object.values(error).every((errors) => !errors);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Placing your order...",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire("Success", "Order has been placed successfully", "success");
        } else {
          Swal.fire("Error", "Please fill all the required fields", "error");
        }
      }
    });

    const orderData = {
      _type: "order",
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.error("Error creating order", error);
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#0D0E43]">
              Order Summary
            </h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center border-b pb-4 mb-4"
                >
                  {/* Product Image */}
                  <div className="w-16 h-16">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover rounded-lg"
                      />
                    )}
                  </div>
                  {/* Product Details */}
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-medium text-brandPrimary2">
                      {item.name}
                    </h3>
                    <p className="text-gray-500">
                      Quantity: {item.stockLevel}
                    </p>
                  </div>
                  <p className="font-semibold text-brandPrimary2">
                    ${parseFloat(item.price) * item.stockLevel}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Your cart is empty</p>
            )}
            {/* Pricing Summary */}
            <div className="mt-4 border-t pt-4">
              <p className="text-lg font-semibold text-[#0D0E43]">
                Subtotal:{" "}
                <span className="font-medium text-brandPrimary2">
                  ${subTotal.toFixed(2)}
                </span>
              </p>
              <p className="text-lg font-semibold text-[#0D0E43]">
                Discount:{" "}
                <span className="font-medium text-brandPrimary1">
                  ${discount}
                </span>
              </p>
              <p className="text-xl font-semibold text-[#0D0E43]">
                Total:{" "}
                <span className="font-medium text-brandPrimary2">
                  ${total.toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          {/* Billing Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#0D0E43]">
              Billing Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Name", id: "name" },
                { label: "Email", id: "email" },
                { label: "Phone", id: "phone" },
                { label: "Address", id: "address" },
                { label: "City", id: "city" },
                { label: "Zip Code", id: "zipCode" },
              ].map(({ label, id }) => (
                <div key={id}>
                  <label className="text-sm font-semibold">{label}</label>
                  <input
                    id={id}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    value={formValues[id as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  {formError[id as keyof typeof formError] && (
                    <p className="text-sm text-red-500">{label} is required.</p>
                  )}
                </div>
              ))}
            </div>
            {/* Place Order Button */}
            <Button
              onClick={handlePlaceOrder}
              className="w-full mt-6 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
