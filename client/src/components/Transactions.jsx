import { Typography, List, Divider, makeStyles, Box } from "@material-ui/core";
import Transaction from "./Transaction";

const useStyle = makeStyles({
  component: {
    "& > *": {
      marginBottom: 10,
    },
  },
  heading: {},
});

const Transactions = ({ transactions, deleteTransaction }) => {
  const classes = useStyle();
  // console.log(transactions, "file with s");
  return (
    <Box className={classes.component}>
      <Typography variant="h5">Transaction History</Typography>
      <Divider style={{ width: "100%" }} />
      <List>
        {transactions.map((ele, index) => {
          console.log(ele);
          return (
            <Transaction
              key={ele._id}
              id={ele._id}
              text={ele.text}
              amount={ele.amount}
              deleteTransaction={deleteTransaction}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Transactions;
