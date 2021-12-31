import {Box,Typography,Divider,makeStyles,List} from '@material-ui/core'
import Transaction from './Transaction'

const useStyle = makeStyles ({
    component: {
        '& > *':{
            MarginBottom:'20'
        }
    }
})
const Transactions = ({transactions}) =>{
    const classes = useStyle();
    return(
        <Box className={classes.component}>
            <Typography variant='h5'>Transactions History</Typography>
            <Divider></Divider>
            <List>
                {
                    transactions.map(transaction =>{
                        return <Transaction></Transaction>
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions;