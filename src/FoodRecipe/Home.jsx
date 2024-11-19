import Product from './Product'
import {useState, useEffect} from "react"
const Home = () => {
  
  const [data, setData] = useState([])
  
  async function apiCall(){
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const resData = await res.json();
      setData(resData.categories); 
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(()=>{apiCall()},[])
  console.log(data);
    return (
        <div>
            {
             data.length > 0 && data.map((item, index) => (<Product key={item.idCategory} 
                image={item.strCategoryThumb} desc={item.strCategoryDescription}
                name={item.strCategory} />
                ))
            }
        </div>
    );
}

export default Home;
