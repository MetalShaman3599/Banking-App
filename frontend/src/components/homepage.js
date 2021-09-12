import React from 'react';
import vid from '../assets/animation.mp4';
import c_icon from '../assets/customersicon.png';
import t_icon from '../assets/transactionimg.jpg';
import logo from '../assets/logo.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage =()=>{
    return (
        <div>
            <div style={{headerTransparent: true,background:'none', height:'60px',overflow:'auto'}}>
            <img src={logo}  style={{float:'left'}} width='80px' height='60px'  alt='logo' />
            <h2 style={{float:'left',top:'13px',position:'relative',color:'yellowgreen',fontFamily:'Lobster'}}>DKBank.</h2>
            </div>     
            <h1 className="text-Capitalize " style={{
            height:'15vh',
            textAlign: 'center',
            color:'white',
            marginTop:40,
            justifyContent:'center',
            alignItems:'center',
            fontsize:'8rem',
            fontFamily:'Lobster'
        }}>
            Welcome to the <span style={{color:'yellowgreen'}}>DKBank. </span></h1> 
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card mx-5 " style={{width:'400px',height:'350px', backgroundColor:'dark'}}>
                        <img src={c_icon} class="card-img-top" alt="..." width='400px' height='350px' onClick={()=> {
                        window.location = '/Customers';}}/>
                    </div>

                </div>
                <div className="col">
                        <div className="card mx-5" style={{width:'400px',height:'350px', backgroundColor:'dark'}}>
                        <img src={t_icon} class="card-img-top" alt="..." width='400px' height='350px'onClick={()=> {
        window.location = '/Transactions';}}/>                   
                        </div>
                </div>
            </div>
            </div>
   
        <video autoPlay loop muted
        style={{
            position:"absolute",
            width:'100%',
            left:'50%',
            top:'50%',
            height:'100%',
            objectFit:'cover',
            transform:'translate(-50%,-50%)',
            zIndex:'-1'
        }}
        >
            <img src={c_icon} alt='He'/>
        <source src={vid} type="video/mp4"  />
        </video>
        </div>
        
    );
};

export default Homepage;