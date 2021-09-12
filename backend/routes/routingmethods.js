import express from 'express';
const router= express.Router();
import {gethomepage,getCustomers,getTransactions,updateDatabase} from '../controllers/Database_queries.js';

router.get('/',gethomepage);
router.get('/Customers',getCustomers)
router.get('/Transactions',getTransactions)
router.post('/Customers/:id',updateDatabase)
export default router;