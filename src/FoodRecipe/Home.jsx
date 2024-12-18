import Product from "./Product";
import "./Home.css";
import { useState, useEffect } from "react";


const Home = () => {
  const [data, setData] = useState([]);

  async function apiCall() {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const resData = await res.json();
      setData(resData.categories);
      console.log("rendered")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    apiCall();
  }, []);


  return (
    <div className="Home">
      {data.length > 0 ? 
        data.map((item) => (
          <Product
            key={item.idCategory} 
            id={item.idCategory} 
            image={item.strCategoryThumb}
            name={item.strCategory}
            price={item.idCategory}
          />
        )) : <p>Loading......</p>}
    </div>
  );
};

export default Home;
