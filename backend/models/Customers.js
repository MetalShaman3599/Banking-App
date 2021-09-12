//Database=> Customer table
import mongoose from 'mongoose';

const CustomerSchema=mongoose.Schema({
    name:String,
    email: String,
    current_Balance:Number,
});


const Customers=mongoose.model('Customers',CustomerSchema,"Customers"); 
export default Customers;