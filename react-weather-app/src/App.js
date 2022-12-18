import { useState } from 'react';
import axios from "axios";

import './components/Title';
import './components/Form'
import './components/Results'
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';


function App() {
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
      axios.get(`http://api.weatherapi.com/v1/current.json?key=e09878c403794e67adf170752221812&q=${city}&aqi=no`)
      .then(res=>{
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        })
      })
  }

  return (
    <div className="wrapper">
      <div className='continer'>
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results}/>
      </div>
    </div>
  );
}

export default App;