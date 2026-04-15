import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 100, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 150, category: "Indoor" },
  // add 6+ per category
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      {plants.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => dispatch(addItem(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
