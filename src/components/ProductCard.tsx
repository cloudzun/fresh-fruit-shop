import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { CheckIcon } from './Icons';

interface ProductCardProps {
    product: Product;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    
    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(product, quantity);
            setAdded(true);
        }
    };
    
    useEffect(() => {
        if (added) {
            const timer = setTimeout(() => {
                setAdded(false);
                setQuantity(1);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [added]);


    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform transform hover:-translate-y-1">
            <Link to={`/product/${product.id}`} className="text-6xl mb-4">{product.emoji}</Link>
            <Link to={`/product/${product.id}`} className="text-xl font-bold text-slate-800 hover:text-green-600">{product.name}</Link>
            <p className="text-slate-500 mb-4">${product.price.toFixed(2)} / {product.unit}</p>
            <div className="flex items-center gap-2 my-2">
                <label htmlFor={`quantity-${product.id}`} className="text-sm">Qty:</label>
                <input
                    id={`quantity-${product.id}`}
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-16 p-1 border rounded-md text-center"
                    disabled={added}
                />
            </div>
            <button 
                onClick={handleAddToCart}
                disabled={added}
                className={`mt-auto w-full px-4 py-2 font-semibold text-white rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                    added 
                    ? 'bg-green-500 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                }`}>
                {added ? (
                    <>
                        <CheckIcon className="w-5 h-5" />
                        Added!
                    </>
                ) : (
                    'Add to Cart'
                )}
            </button>
        </div>
    );
};

export const ProductCard = memo(ProductCardComponent);