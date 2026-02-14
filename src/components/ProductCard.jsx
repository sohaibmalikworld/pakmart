import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-xl shadow hover:shadow-2xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />
      <h2 className="font-semibold mt-2 text-sm">
        {product.title.slice(0, 40)}...
      </h2>
      <p className="text-green-600 font-bold mt-1">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
