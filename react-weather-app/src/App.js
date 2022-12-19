import { useState } from 'react';
import axios from "axios";

import './components/Title';
import './components/Form'
import './components/Results'
import './components/Loading'
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';


function App() {
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  })
  const getWeather =(e)=>{
    e.preventDefault();
    setLoading(true)
      axios.get(`http://api.weatherapi.com/v1/current.json?key=e09878c403794e67adf170752221812&q=${city}&aqi=no`)
      .then(res=>{
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        })
        setCity("")
        setLoading(false)
      })
      .catch(err => alert("エラーが発生しました。ページをリロードし、もう一度トライしてください"))
  }

  return (
    <div className="wrapper">
      <div className='continer'>
      <Title/>
      <Form city={city} setCity={setCity} getWeather={getWeather}/>
      {loading ? <Loading/>:<Results results={results}/>}
      </div>
    </div>
  );
}

export default App;
