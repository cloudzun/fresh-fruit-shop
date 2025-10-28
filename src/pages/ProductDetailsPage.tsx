import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeftIcon, CheckIcon } from '../components/Icons';

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === Number(id));

    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    if (!product) {
        return <div className="text-center">Product not found.</div>;
    }
    
    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(product, quantity);
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
        }
    };

    return (
        <div>
            <Link to="/" className="inline-flex items-center gap-2 text-green-600 hover:underline mb-6">
                <ChevronLeftIcon className="w-5 h-5" />
                Back to Products
            </Link>
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 text-center text-8xl md:text-9xl bg-slate-100 rounded-lg p-8">
                    {product.emoji}
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-slate-800">{product.name}</h1>
                    <p className="text-2xl text-slate-600 my-2">${product.price.toFixed(2)} / {product.unit}</p>
                    <p className="text-lg text-slate-500 mt-4">{product.description}</p>
                    
                    <div className="flex items-center gap-4 mt-6">
                         <div className="flex items-center gap-2">
                            <label htmlFor={`quantity-${product.id}`} className="font-semibold">Qty:</label>
                            <input
                                id={`quantity-${product.id}`}
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                                className="w-20 p-2 border rounded-md text-center"
                            />
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            disabled={added}
                            className={`px-8 py-3 font-semibold text-white rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                added
                                ? 'bg-green-500 cursor-not-allowed flex items-center gap-2'
                                : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                            }`}
                        >
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
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;