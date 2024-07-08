import React, {useState, useEffect}  from 'react'
import axios from "axios";
function App() {

  const [array,setArray] = useState([]);

  const [data,setData] = useState([{}]);
  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:5000/members");
    console.log("Data: "  + response.data.Members);
    setArray(response.data.Members);
  }



useEffect(
  () => {
    fetchAPI();
  },[])

  return (
    <div>
      array;
    </div>
  );

}

export default App;