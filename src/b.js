import React, { useEffect, useState } from 'react'
export default function App() {
  const [data, setdata]=useState([])
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
        result.json().then((resp)=>{
      console.log("sd :",resp)
      setdata(resp)
    })
  })
    },[])
  console.warn(data)
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
            <th>Username </th>
            <th>Email</th> 
            <th>Phone</th> 
            <th>Website</th> 
            <th>Address</th> 
          <th>Company</th>
        </tr>
        {
          data.map((item)=>
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.address.street}</td>
            <td>{item.company.name}</td>
            {/* <td>{item.address}</td>  */}
          </tr>
          )
        }
      </table>
    </div>
  );
}
