import React,{Fragment, useEffect, useState} from 'react';
import Dialogform from './Dialogform';
import logo from '../assets/logo.jpg';


const ListCustomer =()=>{
    const [Data,setData]=useState([]);
    
    const getCustomerlist=async()=>{
        try {        
            const response=await fetch("http://localhost:4000/Customers");
            const DataInJson= await response.json();
            setData(DataInJson);

        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getCustomerlist();
    },[]);
    return (
    <Fragment>
    {" "}
    <div style={{headerTransparent: true,backgroundColor:'black', height:'60px',overflow:'auto'}}>
      <img src={logo}  style={{float:'left'}} width='80px' height='60px'  alt='logo' />
      <h2 style={{float:'left',top:'13px',position:'relative',color:'yellowgreen',fontFamily:'Lobster'}}>DKBank.</h2>
    </div>
    <table class="table table-stripped table-dark text-center table-bordered table-hover">
    <thead> 
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Current Balance</th>
        <th>Transfer Money</th>
      </tr>
    </thead>
    <tbody>
          {Data.map(d => (
            <tr key={d._id}>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.current_Balance}</td>
                <td>
                  <Dialogform data={d}/>
                </td>
            </tr>
          ))
        }
    </tbody>
  </table>
  </Fragment>);
    
};

export default ListCustomer;