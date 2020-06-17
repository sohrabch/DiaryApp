import React from 'react';
require('dotenv').config()
const axios = require('axios').default;
function App(props) { 
    const [resultData , setResultdata] = React.useState("1")
    
    axios.post("http://localhost/posts",)
  .then(function (response) {
    console.log(response.data.message)
   setResultdata(response.data.message)
  })
  .catch(function (error) {
    // handle error
    setResultdata("error happened")
  })



  


    return  <div> <h1> {resultData}</h1>   
</div>

 }


  

export default App

