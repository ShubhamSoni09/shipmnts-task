import {Box,Typography,TextField,makeStyles,Button} from '@material-ui/core'
import { hover } from '@testing-library/user-event/dist/hover';

const useStyle = makeStyles ({
    container:{
        display:'flex',
        flexDirection:'column',
        '& > *':{
            marginTop:'30px'
        }
    },
    button:{
        background:'#445A6f',
        color:'#fff'
    },
    
})

const NewTransactions = () => {
    const classes = useStyle();
    return (
        <Box className={classes.container}>
            <Typography variant="h5">New Transactions</Typography>
            <TextField label="Enter Expense"></TextField>
            <TextField label="Enter total amount"></TextField>
            <Button variant="contained" className={classes.button}>Add new transaction</Button>
        </Box>
    )
}

export default NewTransactions;