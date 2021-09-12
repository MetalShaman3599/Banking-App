import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import ListCustomer from './components/listCustomer';
import TransactionHistory from './components/transactionhistory'; 
import homepage from './components/homepage';

const App=()=>{
    return (
        <Router>
          <Route path="/" exact component={homepage} />
          <Route path="/Customers" component={ListCustomer} />
          <Route path="/Transactions" component={TransactionHistory} />
        </Router>
      );
}

export default App;