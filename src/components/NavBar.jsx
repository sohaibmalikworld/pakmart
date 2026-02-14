import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { cart, removeFromCart } = useContext(CartContext);
  const { dark, setDark } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800 dark:text-white">
      <h1 className="text-xl font-bold">SohaibMart</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {dark ? "Light" : "Dark"}
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="px-3 py-1 bg-black text-white rounded"
        >
          Cart ({cart.length})
        </button>
      </div>

      {open && (
        <div className="absolute right-4 top-16 bg-white dark:bg-gray-800 p-4 w-72 shadow-xl rounded">
          <h2 className="font-bold mb-3">Your Cart</h2>
          {cart.length === 0 && <p>No items added.</p>}
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span className="text-sm">{item.title.slice(0, 15)}...</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
