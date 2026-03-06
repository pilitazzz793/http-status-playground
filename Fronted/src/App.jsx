import { useEffect, useState } from "react";

function App(){
  const[statusList, setStatusList]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/status')
    .then((res) => res.json())
    .then((data) => setStatusList(data))
    .catch((error)=> console.error(error));
  }, []);
return(
  <div>
    <h1>HTTP status playground</h1>

    <h2>Lista de status</h2>

    {statusList.map((status) =>(
      <div key={status.id}>
        <h3>{status.code} - {status.message}</h3>
        <p>{status.description}</p>
        </div>
    ))}
  </div>
)
}


export default App;
