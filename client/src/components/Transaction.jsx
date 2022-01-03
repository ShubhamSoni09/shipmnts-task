import {
  ListItem,
  ListItemText,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyle = makeStyles({
  list: {
    marginTop: 10,
    display: "flex",
    border: "1px solid #F6F6F6",
  },
});

const Transaction = ({ id, text, amount, deleteTransaction }) => {
  const sign = amount >= 0 ? "₹" : "-₹";
  const classes = useStyle();
  console.log(id, "file without");

  return (
    <ListItem
      style={{ background: `${amount >= 0 ? "Green" : "Red"}`, color: "#fff" }}
      className={classes.list}
    >
      <ListItemIcon>
        <DeleteIcon
          onClick={(e) => {
            e.preventDefault();
            deleteTransaction(id);
          }}
        />
      </ListItemIcon>
      <ListItemText primary={text} />
      <ListItemText primary={sign + Math.abs(amount)} />
    </ListItem>
  );
};

export default Transaction;
