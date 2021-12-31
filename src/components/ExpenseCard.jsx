import {Card,CardContent,Typography,Box,makeStyles} from '@material-ui/core'

const useStyle=makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        '&>*':{
            padding:10,
            flex:1
        }
    },
    income:{
        color: 'green',
        fontWeight: '100'
    },
    expense:{
        color: 'red'
    }
})
const ExpenseCard = () =>{
    const classes = useStyle();
    return (
        <Box className={classes.container}>
            <Card>
            <CardContent>
                <Typography >Income</Typography>
                <Typography className={classes.income}>Rs.1000</Typography>
            </CardContent>
            <CardContent>
                <Typography >Expense</Typography>
                <Typography className={classes.expense}>Rs.500</Typography>
            </CardContent>
             </Card>
        </Box>
    );
}

export default ExpenseCard;