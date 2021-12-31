import { ListItem,ListItemText,makeStyles } from "@material-ui/core";


const useStyle = makeStyles ({
    list:{
        marginTop:10
    }
})

const Transaction = ({transaction}) => {
    const classes = useStyle();
    return (
       <ListItem classes = {classes.list}>
           <ListItemText primary={transaction.text}/>
           <ListItemText primary={transaction.amount}/>
       </ListItem>
    )
}

export default Transaction;