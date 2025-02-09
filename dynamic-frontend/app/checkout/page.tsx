"use client";
import { Product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems } from '../actions/action';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Button } from '@/components/ui/button';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';

const Checkout = () => {
    // State to store cart items
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);

    // Form state for user details
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
    });

    // Error handling for form validation
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
        const appliedDiscount = localStorage.getItem('appliedDiscount');
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    // Calculate subtotal and total price
    const subTotal = cartItems.reduce(
        (total, item) => total + parseFloat(item.price) * item.stockLevel,
        0
    );
    const total = Math.max(subTotal - discount, 0);

    // Handle input changes in the form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    // Validate form before placing order
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
          title: 'Placing your Order ',
          text: 'wait a moment',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Proceed'
        }).then((result) => {
          if (result.isConfirmed) {
            if (validateForm()) {
                localStorage.removeItem("appliedDiscount")
            Swal.fire('Success', 'Order has been placed successfully', 'success');
          } else {
            Swal.fire('Error', 'Please fill all the fields', 'error');
          }
        }
      });

        const orderData = {
            _type : "order",
            name : formValues.name,
            email : formValues.email,
            phone : formValues.phone,
            address : formValues.address,
            city : formValues.city,
            zipCode : formValues.zipCode,
            cartItems : cartItems.map((item) => ({ _type : "reference", _ref : item._id }) ),
            total : total,
            discount : discount,
            orderDate : new Date().toISOString(),
        };
        try {
            await client.create(orderData);
            localStorage.removeItem("appliedDiscount")
    } catch (error) {
        console.error("Error creating order", error);
        }
    };

    return (
        <div className='min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8'>
            {/* Navigation */}
            <div className='max-w-6xl mx-auto'>
                <nav className='flex gap-4 text-lg mb-4'>
                    <Link href='/' className='text-brandPrimary2'>Home  /</Link>
                    <Link href='/cart' className='text-brandPrimary2'>Cart</Link>
                    <span className='text-gray-500'>/ Checkout</span>
                </nav>
            </div>

            {/* Main checkout section */}
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Order Summary */}
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4 text-[#0D0E43]'>Order Summary</h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className='flex gap-4 items-center border-b pb-4 mb-4'>
                                {/* Product Image */}
                                <div className='w-16 h-16'>
                                    {item.image && (
                                        <Image
                                            src={urlFor(item.image).url()}
                                            alt={item.name}
                                            width={64}
                                            height={64}
                                            className='object-cover rounded-lg'
                                        />
                                    )}
                                </div>
                                {/* Product Details */}
                                <div className='flex-1'>
                                    <h3 className='text-lg font-medium text-brandPrimary2'>{item.name}</h3>
                                    <p className='text-gray-500'>Quantity: {item.stockLevel}</p>
                                </div>
                                <p className='font-semibold text-brandPrimary2'>
                                    ${parseFloat(item.price) * item.stockLevel}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-500'>Your cart is empty</p>
                    )}
                    {/* Pricing Summary */}
                    <div className='mt-4'>
                        <p className='text-lg font-semibold text-[#0D0E43]'>Subtotal: <span className='font-medium text-brandPrimary2'>${subTotal.toFixed(2)}</span></p>
                        <p className='text-lg font-semibold text-[#0D0E43]'>Discount: <span className='font-medium text-brandPrimary1'>${discount}</span></p>
                        <p className='text-xl font-semibold text-[#0D0E43]'>Total: <span className='font-medium text-brandPrimary2'>${total.toFixed(2)}</span></p>
                    </div>
                </div>
                
                {/* Billing Information */}
                <div className='bg-white p-6 rounded-lg shadow-md space-y-6'>
                    <h2 className='text-xl font-semibold mb-4 text-[#0D0E43]'>Billing Information</h2>
                    {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
              <label htmlFor="name">Name</label>
                <input
                  id="name"
                  placeholder="Enter your name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="border"
                />
                {formError.name && (
                  <p className="text-sm text-red-500">
                    name is required.
                  </p>
                )}
              </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleInputChange}
                className="border"
              />
              {formError.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
                className="border"
              />
              {formError.phone && (
                <p className="text-sm text-red-500">Phone Number is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
                className="border"
              />
              {formError.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                className="border"
              />
              {formError.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
            </div>
              <div>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  id="zipCode"
                  placeholder="Enter your zip code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="border"
                />
                {formError.zipCode && (
                  <p className="text-sm text-red-500">Zipcode is required.</p>
                )}
              </div>
            </div>
            {/* Place Order Button */}
            <Button onClick={handlePlaceOrder} className='w-full mt-4 bg-brandPrimary1 hover:bg-pink-500 transition-all duration-300'>
                Place Order
            </Button>
            </div>
        </div>
    </div>
    );
};

export default Checkout;