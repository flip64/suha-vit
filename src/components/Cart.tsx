import React from "react";
import { X } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemove: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-white shadow rounded-2xl max-w-md mx-auto mt-6">
      <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
        🛒 سبد خرید
      </h2>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
      ) : (
        <ul className="divide-y">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between py-3 gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-3 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl border"
                />
                <div className="flex flex-col justify-between text-sm w-full">
                  <span className="font-medium text-gray-800">{item.name}</span>
                  <span className="text-gray-500">
                    {item.price.toLocaleString()} تومان
                  </span>
                  <span className="text-xs text-gray-400">
                    تعداد: {item.quantity}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <div className="flex justify-between mt-4 border-t pt-3 font-bold text-gray-700">
          <span>جمع کل:</span>
          <span>{total.toLocaleString()} تومان</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
