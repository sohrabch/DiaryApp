import React from 'react';
const axios = require('axios').default;

function App(props) { 
    const [resultData , setResultdata] = React.useState("1")
    axios.get('/hello')
  .then(function (response) {
    console.log(response.data)
   setResultdata(response.data)
  })
  .catch(function (error) {
    // handle error
    setResultdata("error happened")
  })
  .then(function () {
    // always executed
  });

  


    return  <div> <h1> {resultData}</h1>   
</div>

 }


  

export default App

