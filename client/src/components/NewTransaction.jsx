import { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

import axios from "axios";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginTop: 30,
    },
  },
  button: {
    background: "#445A6F",
    color: "#fff",
  },
});

const NewTransaction = ({ addTransaction }) => {
  const classes = useStyle();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const newTransaction = (e) => {
    const transaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };
    axios
      .post("http://localhost:5000/app/createtr", {
        text: text,
        amount: +amount,
      })
      .then((r) => {
        console.log(r, "s");
      })
      .catch((err) => {
        console.log(err);
      });
    addTransaction(transaction);
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        value={text}
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        value={amount}
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        className={classes.button}
        variant="contained"
        onClick={newTransaction}
      >
        Add Transaction
      </Button>
    </Box>
  );
};

export default NewTransaction;
