import Customers from '../models/Customers.js';
import transaction from '../models/transaction_history.js';


export const gethomepage =(req,res)=>{
    try {
        res.send("Home");
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


//get customer list
export const getCustomers =async (req,res)=>{
    try {
        const customerlist=await Customers.find({});
        //console.log(customerlist);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(customerlist);   
    } catch (error) {
            res.status(404).json({message:error.message})
    }
}

//get transaction history
export const getTransactions =async (req,res)=>{
    try {
        const transactionlist=await transaction.find({});
        res.setHeader('Access-Control-Allow-Origin', '*');
        //console.log(transactionlist);
        res.status(200).json(transactionlist);   
    } catch (error) {
            res.status(404).json({message:error.message})
    }
}

//Updating database
export const updateDatabase =async (req,res)=>{
    try {
            var id=req.params.id;
            const inputData1=req.body;

            //Deduct amount of the sender
            const z=await Customers.find({_id: id });
            var o=z[0].current_Balance-parseInt(inputData1.Amount);
            var sender=z[0].name;
            const uB=await Customers.findOneAndUpdate({_id:id},{
                $set:{current_Balance:o}
            });
            //console.log(uB);

            //Adding amount to the receiver
            var na=inputData1.ToName;
            const q1=na.trim();
            var receiver=na;
            //console.log(q1);
            const nam=await Customers.find({name:q1},{current_Balance:1});
            //console.log(nam[0].current_Balance);
            const t=nam[0].current_Balance+parseInt(inputData1.Amount);
            //console.log(t);
            const u_B=await Customers.findOneAndUpdate({name:q1},{
                $set:{current_Balance:t}
            });
            //console.log(u_B);

            //Adding record to transaction_history table
            const i_document=new transaction({
                Sender:sender,
                Receiver: receiver,
                Amount:parseInt(inputData1.Amount),
                Date:new Date()
            });
            i_document.save(function(err,i_document){
                if(err) return console.log(err);
                res.status(200).json(i_document);
            })
         } catch (error) {
            res.status(404).json({message:error.message})
    }
}