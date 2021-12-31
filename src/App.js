import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Typography,makeStyles, Box} from '@material-ui/core'
import Balance from './components/balance.jsx'
import ExpenseCard from './components/ExpenseCard.jsx'
import NewTransaction from './components/NewTransactions.jsx'
import Transactions from './components/Transactions.jsx'

const useStyles = makeStyles({
  header: { 
    color:"blue",
    fontSize:"50px",
    margin: "10px 0",
    textTransform: "uppercase"
  },
  component:{
    background:'#FFF',
    width: 800,
    padding: '10px',
    borderRadius: '10px',
    display: 'flex'
  },
  '& > *':{
    width:'50%;',
    padding:10,
    height:'70vh'
  }
})
function App() {
  const classes = useStyles();

  const [transactions,setTransaction] = useState([
    {id:1,text:'Pizza',amount:-20},
    {id:2,text:'Salary',amount:3000},
    {id:3,text:'Book',amount:-150},
    {id:4,text:'Performance Bonus',amount:1500},
  ])
  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
      <Box>
        <Balance></Balance>
        <ExpenseCard></ExpenseCard>
        <NewTransaction></NewTransaction>
      </Box>
      <Transactions transactions={transactions}></Transactions>
      </Box>
     
    </div>
  );
}

export default App;
