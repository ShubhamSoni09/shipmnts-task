import { useState, useEffect } from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import Balance from "./components/balance.jsx";
import ExpenseCard from "./components/ExpenseCard";
import Transactions from "./components/Transactions";
import NewTransaction from "./components/NewTransaction";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./App.css";

const useStyle = makeStyles({
  header: {
    margin: "10px 0",
    color: "blue",
    fontSize: 36,
    textTransform: "uppercase",
  },
  component: {
    background: "#FFF",
    padding: 10,
    borderRadius: 20,
    display: "flex",
    width: 800,
    "& > *": {
      padding: 10,
      width: "50%",
      height: "70vh",
    },
  },
});

function Home() {
  const classes = useStyle();
  const history = useNavigate();

  const callMainPage = async () => {
    try {
      const res = await axios.get("/app/main", {
        withCredentials: true,
      });
      const userdata = res.data;
      console.log("accpage", userdata);
      // setUser(userdata);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("error i am finding", err);
      history.push("/");
    }
  };

  useEffect(() => {
    callMainPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [transactions, setTransactions] = useState([
    {
      id: "",
      text: "",
      amount: 0,
    },
  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/app/deltr/${id}`)
      .then(async (res) => {
        console.log(JSON.stringify(res.data));
        const response = await axios.get("http://localhost:5000/app/gettr");
        const uTrans = response.data;
        setTransactions(uTrans.filter((transaction) => transaction.id !== id));
        // const curRecNotes = notesdata.filter((ele) => ele.rec === curRec);
        // props.setRecNotes(curRecNotes);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(transactions);
  };

  const addTransaction = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
    console.log(transaction, "all");
    console.log(transactions, "single");
  };

  const getTr = async () => {
    const res = await axios.get("http://localhost:5000/app/gettr");
    const trData = res.data;
    console.log(trData, "getting data");
    setTransactions(trData);
  };

  useEffect(() => {
    getTr();
  }, []);
  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction} />
        </Box>
        <Box>
          <Transactions
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Home;
