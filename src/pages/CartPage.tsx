import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { TrashIcon } from '../components/Icons';

const CartPage: React.FC = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const total = getCartTotal();

    if (cartItems.length === 0) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">Your Cart is Empty</h1>
                <p className="text-slate-600 mb-6">Looks like you haven't added any fruits yet.</p>
                <Link to="/" className="inline-block px-6 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all">
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">Shopping Cart</h1>
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md">
                <div className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-b">
                           <div className="flex items-center gap-4 flex-1">
                             <span className="text-4xl">{item.emoji}</span>
                             <div>
                               <p className="font-semibold text-lg">{item.name}</p>
                               <p className="text-sm text-slate-500">${item.price.toFixed(2)} / {item.unit}</p>
                             </div>
                           </div>
                           <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300">+</button>
                                </div>
                                <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                    aria-label={`Remove ${item.name}`}
                                >
                                    <TrashIcon className="w-5 h-5"/>
                                </button>
                           </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-right">
                    <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
                    <Link to="/checkout" className="inline-block mt-4 px-8 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;