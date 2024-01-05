import { useEffect,useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try{
      setLoading(true);
      const response = await fetch(API_URL);
      const products = await response.json();
      setProducts(products);
    }catch(error){
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProducts();
    console.log(products);
  },[])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
