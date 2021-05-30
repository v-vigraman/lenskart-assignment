import { Button, makeStyles, Typography } from '@material-ui/core';
import './App.css';

import Shades from './assets/jpg/shades.jpg';


const useStyle = makeStyles((theme) => ({
  app: {
    // background: theme.palette.primary.main
  },
  btn: {
    borderRadius: '100px',
    color: 'black',
    fontWeight:'600',
    fontSize:'12px',
    '&:hover': {
      color: 'black'
    }
  },
  innerText: {
    textAlign:'center',
    marginTop:'20px',
    marginBottom:'20px'
  }
  
}));

function App() {
  const classes = useStyle();

  return (
    <div className={classes.app}>

      <div className="homeWrapper">
        <div className="homeContent"></div>
      </div>
      <div className="secondContainer">
        <div className="secondContent">
          <div className="contentCenter">
            <div className="boldHeading">BOLD, DARING & STURDY</div>
            <Typography variant="h6" color='secondary'>
              These Pilots are perfect for that Grunge Look
           </Typography>
          </div>
          <div className="rowBlock">
            <div className="columnBlock">
              <div className="roundBlock">
              </div>
              <Typography variant="p" color='secondary' className={classes.innerText}>
             The  iron-fisted   <Typography variant="p" color='primary' textAlign="center">Akhandanand Tripathi </Typography> 
             is a millionare carpet exporter and the mafia don  of mirzapur
           </Typography>
           <img src={Shades} width="200px" />
           <Typography variant="p" color='secondary' className={classes.innerText}>
             VINCENT CHASE<br/>
             <Typography variant="p" color='secondary'>
             GOLDEN GREEN FULL RIM
           </Typography>
           </Typography>
           <Button className={classes.btn} color='secondary'  variant='contained'>Watch Now</Button>
            </div>
            <div className="columnBlock">
              <div className="roundBlock">
              </div>
              <Typography variant="p" color='secondary' className={classes.innerText}>
             The  iron-fisted   <Typography variant="p" color='primary' textAlign="center">Akhandanand Tripathi </Typography> 
             is a millionare carpet exporter and the mafia don  of mirzapur
           </Typography>
           <img src={Shades} width="200px" />
           <Typography variant="p" color='secondary' className={classes.innerText}>
             VINCENT CHASE<br/>
             <Typography variant="p" color='secondary'>
             GOLDEN GREEN FULL RIM
           </Typography>
           </Typography>
           <Button className={classes.btn} color='secondary'  variant='contained'>Watch Now</Button>
            </div>
            <div className="columnBlock">
              <div className="roundBlock">
              </div>
              <Typography variant="p" color='secondary' className={classes.innerText}>
             The  iron-fisted   <Typography variant="p" color='primary' textAlign="center">Akhandanand Tripathi </Typography> 
             is a millionare carpet exporter and the mafia don  of mirzapur
           </Typography>
           <img src={Shades} width="200px" />
           <Typography variant="p" color='secondary' className={classes.innerText}>
             VINCENT CHASE<br/>
             <Typography variant="p" color='secondary'>
             GOLDEN GREEN FULL RIM
           </Typography>
           </Typography>
           <Button className={classes.btn} color='secondary'  variant='contained'>Watch Now</Button>
            </div>

          </div>
        </div>
      </div>
  
        <div className="thirdContainer">
          <div className="thirdContent">

          </div>
        </div>
  
    </div>
  );
}
export default App;
