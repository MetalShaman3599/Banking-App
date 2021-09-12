import React,{Fragment, useState} from 'react';
import {Box,Button,Dialog,Typography,TextField,DialogActions} from '@material-ui/core';
import image from '../assets/pic.png';

function Dialogform({data}){
    const [showDialog, setshowDialog]=useState(false);
    const [inputData, setinputData]=useState({
        ToName:null,
        Amount: null
    });
    const openDialog = () => setshowDialog(true);
    const closeDialog = () => setshowDialog(false);
    
    const handleData=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name, value);
        setinputData({...inputData,[name]:value})

    }



    const updateDatabase=async(d)=>{
        d.preventDefault();
        try{
            console.log("S",data._id);
            console.log(inputData);
            const response= await fetch('http://localhost:4000/Customers/'+data._id,
            {   method:'POST',
                "headers": {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body:JSON.stringify(inputData)
            }
            );
            window.location='/Customers';
        }
        catch(err){
            console.error(err.message);
        }
    }

    return (
         <Fragment>
        <button type="button" data-toggle="m" data-target="my" onClick={()=>openDialog()}>
            Transfer money
        </button>
        <div className="m" id="my">
     <Dialog  open={showDialog} onClose={closeDialog} maxWidth="md">
         <Box width="400px" p={2} textAlign="center">
             <img src={image} width="100%" alt="Transfer" />
             <Typography style={{fontWeight:700, marginTop:30, fontSize:35}}>
                 Transfer Money
             </Typography>
             <TextField variant="outlined" fullWidth margin="dense" label="From" value={data.name}></TextField >
             <TextField 
                required={true} 
                type="text"
                variant="outlined" 
                fullWidth 
                margin="dense" 
                label="ToName"
                name= "ToName"
                autoComplete="off"
                value={inputData.ToName}
                onChange={handleData}
                />
             <TextField 
                required={true} 
                type="text" 
                variant="outlined" 
                fullWidth 
                margin="dense" 
                label="Amount"
                name="Amount"
                autoComplete="off"
                value={inputData.Amount}
                onChange={handleData}
             ></TextField>
         </Box>
         {/* <DialogTitle>
             Transfer Money
         </DialogTitle> */}
         {/* <DialogContent>
             <DialogContentText>
             Hello
             </DialogContentText>
         </DialogContent> */}
         <DialogActions>
             <Button variant="contained" color="secondary" onClick={d=>updateDatabase(d)}>Confirm</Button>
             <Button onClick={()=>closeDialog()}>Cancel</Button>
         </DialogActions>
     </Dialog>
     </div>
    </Fragment>
    );

};

export default Dialogform;