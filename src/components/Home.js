// Home.js
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import products from "../data/productsData"; // Adjust the path based on your actual folder structure
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

  return (
    <div className="home-container">
      <>
        <h2>IndiaMart</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="details">
                <span className="label">Price:</span>
                <span className="price">${product.price}</span>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Home;
