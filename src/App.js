import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  app: {
    // background: theme.palette.primary.main
  },
  btn: {
    borderRadius: '100px',
    color: 'red',
    '&:hover': {
      color: 'black'
    }
  }
}));

function App() {
  const classes = useStyle();

  return (
    <div className={classes.app}>
      <Typography component="p" >
        Hello
      </Typography>
      <Button className={classes.btn} color='primary'  variant='contained'>Watch Now</Button>
    </div>
  );
}

export default App;
