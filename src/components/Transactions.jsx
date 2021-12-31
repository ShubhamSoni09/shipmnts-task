import {Box,Typography,Divider,makeStyles,List} from '@material-ui/core'

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
                        return console.log(transaction);
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions;