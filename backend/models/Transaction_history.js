// Database=> transaction-history table
import mongoose from 'mongoose';

const transactionSchema=mongoose.Schema({
    Sender:String,
    Receiver: String,
    Amount:Number,
    Date:Date,
});

const transaction=mongoose.model('Transaction_history',transactionSchema,'Transaction_history');

export default transaction;