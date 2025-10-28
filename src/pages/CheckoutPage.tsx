import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, Navigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const [orderProcessed, setOrderProcessed] = useState(false);
    const total = getCartTotal();

    const handleProcessOrder = () => {
        setOrderProcessed(true);
        clearCart();
    };

    if (cartItems.length === 0 && !orderProcessed) {
        return <Navigate to="/" />;
    }

    if (orderProcessed) {
        return (
             <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
                <p className="text-slate-600 mb-6">Your order has been processed successfully.</p>
                <Link to="/" className="inline-block px-6 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all">
                    Back to Products
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">Checkout Summary</h1>
            <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="space-y-3 border-b pb-4 mb-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{item.name} <span className="text-slate-500 font-normal">x {item.quantity}</span></p>
                            </div>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold">Grand Total: ${total.toFixed(2)}</p>
                     <button 
                        onClick={handleProcessOrder}
                        className="inline-block mt-6 px-8 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
                    >
                        Process Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;