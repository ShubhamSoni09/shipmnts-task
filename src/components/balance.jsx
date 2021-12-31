import { Box, Typography,makeStyles} from '@material-ui/core';


const useStyle = makeStyles ({
    balance:{
        fontSize:25,
        marginBottom:20
    }
})
const Balance = () =>{
    const classes = useStyle();
    return (
        <Box>
            <Typography className={classes.balance}>Balance Rs 400</Typography>
        </Box>
    )
}

export default Balance