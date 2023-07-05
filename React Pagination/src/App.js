import React ,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const [items,setItems]=useState([]);
  const [visible,setVisible] = useState(3);

  function showMoreMeals(){
    setVisible(item =>item +=3)
  }

  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
    .then((res)=>res.json())
    .then((data)=>setItems(data.meals))
  },[])
  return (
    <div className="App">
      <h1 className='header'>British Meals <img src='https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg'></img></h1>
       <div className='container'>
        {items.slice(0,visible).map(item=>(
          <div className='card'>
            <div className='image'>
              <img src={item.strMealThumb}></img>
            </div>
            <p>{item.strMeal}</p>
          </div>
        ))}
        <button onClick={showMoreMeals}>Click for more Meals </button>
       </div>
    </div>
  );
}

export default App;
