import React,{Fragment, useEffect, useState} from 'react';
import moment from 'moment';
import logo from '../assets/logo.jpg';

const TransactionHistory =()=>{
    const [Data,setData]=useState([]);

    const getTransactionlist=async()=>{
        try {        
            const response_T=await fetch("http://localhost:4000/Transactions");
            const DataInJson= await response_T.json();
            console.log(DataInJson);
            setData(DataInJson);

        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getTransactionlist();
    },[]);


    return (
    <Fragment>
    {""}
    <div style={{headerTransparent: true,backgroundColor:'black', height:'60px',overflow:'auto'}}>
      <img src={logo}  style={{float:'left'}} width='80px' height='60px'  alt='logo' />
      <h2 style={{float:'left',top:'13px',position:'relative',color:'yellowgreen',fontFamily:'Lobster'}}>DKBank.</h2>
    </div>
    <table class="table table-stripped table-dark text-center table-bordered table-hover">
    <thead> 
      <tr>
        <th>Sender</th>
        <th>Receiver</th>
        <th>Amount</th>
        <th>Date And Time</th>
      </tr>
    </thead>
    <tbody>
          {Data.map(d => (
            <tr>
                <td>{d.Sender}</td>
                <td>{d.Receiver}</td>
                <td>{d.Amount}</td>
                <td>{moment(d.Date).format("MMMM Do YYYY, h:mm:ss a")}</td>
            </tr>
          ))
        }
    </tbody>
  </table>
    </Fragment>);
};

export default TransactionHistory;