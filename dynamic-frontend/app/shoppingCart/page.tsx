"use client";
import { Product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCart } from '../actions/action';
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';
import AuthGuard from '@/components/ui/AuthGuard';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemoveFromCart = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Item removed!', 'Your item has been removed from the cart.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCart(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.stockLevel, 0);
  };
  const router = useRouter();
  const proceed = () => {
    Swal.fire({
      title: 'Proceed to checkout?',
      text: 'You will be redirected to the checkout page.',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Proceed to checkout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Order has been processed successfully', 'success');
        router.push('/checkout');
        setCartItems([]);
      }
    });
  };

  return (
    <AuthGuard>
    <div className='container mx-auto p-8 bg-slate-100'>
      <h1 className='text-3xl font-bold mb-6 text-center text-[#101750]'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-center text-gray-500'>Your cart is empty.</p>
      ) : (
        <div className='grid gap-4'>
          {cartItems.map((item) => (
            <div key={item._id} 
            className='flex justify-between items-center p-6 rounded-lg shadow-md bg-slate-50'>
            <div className="flex items-center">
            {item.image && (
                <Image
                src={urlFor(item.image).url()}
                alt='image'
                width={500}
                height={500}
                className='w-16 h-16 object-cover rounded-lg' 
                /> 
            )}
            <div className='ml-4'>
            <h2 className="text-[#101750] text-lg font-bold">{item.name}</h2>
            <p className="text-brandPrimary3 mt-1">Price: ${item.price}</p>
              <div className='flex items-center gap-2 mt-2'>
                <Button onClick={() => handleDecrement(item._id)}
                 className='bg-gray-300 text-black font-bold w-8 h-8 hover:bg-gray-200 transition-all duration-200'
                 >
                    -
                </Button>
                <span>{item.stockLevel}</span>
                <Button onClick={() => handleIncrement(item._id)}
                 className='bg-gray-300 text-black font-bold w-8 h-8 hover:bg-gray-200 transition-all duration-200'
                >
                        +
                </Button>
              </div>
              </div>
              </div>
              <div className="flex items-center gap-16">
              <span className='text-lg font-semibold'>${parseFloat(item.price) * item.stockLevel}</span>
              <Button variant='destructive' onClick={() => handleRemoveFromCart(item._id)}
                className='bg-red-500 text-white font-bold hover:bg-red-400 transition-all duration-300'
              >
                Remove
              </Button>
            </div>
            </div>
          ))}
          <div className='mt-8 bg-slate-100 p-4'>
            <div className="flex justify-between items-center">
                <h2 className='text-[#101750] text-xl font-semibold'>Total:</h2>
                <p className='text-[#101750] text-xl font-semibold'> ${calculatedTotal().toFixed(2)}</p>
            </div>
          <Button className='w-full mt-4 bg-[#19D16F] text-white font-bold hover:bg-green-400 transition-all duration-300' 
          onClick={proceed}
          >
            Proceed to Checkout
          </Button>
          </div>
        </div>
      )}
    </div> 
    </AuthGuard>
  );
};

export default CartPage;