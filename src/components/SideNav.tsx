import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FruitIcon, ShoppingCartIcon, StoreIcon } from './Icons';

export const SideNav: React.FC = () => {
    const { getCartItemCount } = useCart();
    const itemCount = getCartItemCount();

    const linkClasses = "flex items-center gap-4 px-4 py-3 text-slate-600 hover:bg-green-100 hover:text-green-800 rounded-lg transition-colors duration-200";
    const activeLinkClasses = "bg-green-100 text-green-800 font-semibold";

    return (
        <aside className="sticky top-0 h-screen bg-white shadow-lg w-16 sm:w-64 transition-all duration-300 flex flex-col flex-shrink-0 z-10">
            <div className="flex items-center justify-center sm:justify-start gap-3 p-4 border-b h-16">
                <FruitIcon className="w-8 h-8 text-green-600" />
                <h1 className="text-xl font-bold text-slate-800 hidden sm:block">Fruity Fresh</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                <NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                    <StoreIcon className="w-6 h-6 flex-shrink-0" />
                    <span className="hidden sm:block">Products</span>
                </NavLink>
                <NavLink to="/cart" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                    <div className="relative">
                        <ShoppingCartIcon className="w-6 h-6 flex-shrink-0" />
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                                {itemCount}
                            </span>
                        )}
                    </div>
                    <span className="hidden sm:block">Cart</span>
                </NavLink>
            </nav>
        </aside>
    );
};