export const BasketItem = ({ item, quantityUp, quantityDown, moveFromCart }) => (
    <tr>
      <td className="border border-gray-600 px-4 py-2">{item.title}</td>
      <td className="border border-gray-600 px-4 py-2">${item.price}</td>
      <td className="border border-gray-600 px-4 py-2">{item.count}</td>
      <td className="border border-gray-600 px-4 py-2">${(item.price * item.count)}</td>
      <td className="border border-gray-600 px-4 py-2">
        <button
          onClick={() =>quantityUp(item)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => quantityDown(item)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded mx-2"
        >
          -
        </button>
        <button
          onClick={() => moveFromCart(item)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
        >
          x
        </button>
      </td>
    </tr>
  );
  