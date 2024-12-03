export const ProductItem = ({ product, moveToCart }) => (
    <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center">
      <img src={product.photo} alt={product.title} className="w-24 h-24 rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-200">{product.category}</p>
      <p className="font-bold">${product.price}</p>
      <button
        onClick={() => moveToCart(product)} 
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
      >
        Add to Basket
      </button>
    </div>
  )
  