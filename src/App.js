import { Button, makeStyles, Typography, Divider } from '@material-ui/core';
import './App.css';

import Shades from './assets/jpg/shades.jpg';
import FooterImage from '../src/assets/png/footer.PNG'
import EmailIcon from './assets/png/emailIcon.PNG'




const useStyle = makeStyles((theme) => ({
  app: {
  },
  btn: {
    borderRadius: '100px',
    color: 'black',
    fontWeight: '600',
    fontSize: '12px',
    '&:hover': {
      color: 'black'
    }
  },
  innerText: {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px'
  },
  footer: {
    width: '100%',
    height: '620px',
    margin: '0px',
    '& figure': {
      width: '100%',
      height: '100%',
      background: `url(${FooterImage}) no-repeat`,
      margin: '0px',
      backgroundSize: '100% 100%'
    }
  },
  contactWrapper: {
    width: '100%',
    minHeight: '120px',
    background: 'black',
    padding: '40px',
    boxSizing: 'border-box',
    '& .contactContent': {
      width: '1324px',
    }
  },
  contactBlock:{
    display:'flex',
    justifyContent:'space-between'
  },
  contactBox: {
    padding: '10px 20px',
    display: 'flex',
    alignItems:'center',
    justifyContent:'space-between',
    border: '1px solid white',
    borderRadius: '8px',
    '& figure': {
      margin: '0px',
      marginRight:'10px'
    },
    minWidth:'130px'
  },

  columnFlex:{
    display:'flex',
    flexDirection:'column',
    padding:'0 5px 0 10px  ',  
    alignContent:'space-between'
  },
  contactContent: {
    maxWidth:'1324px',
    height:'auto',
    margin:'0 auto'
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
                VINCENT CHASE<br />
                <Typography variant="p" color='secondary'>
                  GOLDEN GREEN FULL RIM
           </Typography>
              </Typography>
              <Button className={classes.btn} color='secondary' variant='contained'>Watch Now</Button>
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
                VINCENT CHASE<br />
                <Typography variant="p" color='secondary'>
                  GOLDEN GREEN FULL RIM
           </Typography>
              </Typography>
              <Button className={classes.btn} color='secondary' variant='contained'>Watch Now</Button>
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
                VINCENT CHASE<br />
                <Typography variant="p" color='secondary'>
                  GOLDEN GREEN FULL RIM
           </Typography>
              </Typography>
              <Button className={classes.btn} color='secondary' variant='contained'>Watch Now</Button>
            </div>

          </div>
        </div>
      </div>

      <div className="thirdContainer">
        <div className="thirdContent">
        </div>
      </div>

      <section className={classes.contactWrapper}>
        <div className={classes.contactContent}>
        <Typography component="h" variant="h5" color='secondary'>
          Looking for help?
          </Typography>
        <div style={{ width: '200px', padding: '20px' }}>
          <Divider component='div' variant='fullWidth' />
        </div>
        <div className={classes.contactBlock}>
          <Typography component="h" variant="h6" color='secondary'>
            We are available by phone Monday to Sunday from 9 AM to 8 PM.<br />
              Please feel free to call us if you have any queries
          </Typography>
          <aside className={classes.contactBox}>
            <figure><img src={EmailIcon} width="40px" />
            </figure>
            <div className={classes.columnFlex}>
              <Typography component="p" color='secondary'>
                  Email Us
              </Typography>
              <Typography component="p" color='secondary'>
                 support@lenskart.com
              </Typography>
            </div>
          </aside>
          <aside className={classes.contactBox}>
            <figure><img src={EmailIcon} width="40px" />
            </figure>
            <div className={classes.columnFlex}>
              <Typography component="p" color='secondary'>
                  Call Us
              </Typography>
              <Typography component="p" color='secondary'>
                 99998 99998
              </Typography>
            </div>
          </aside>
        </div>
        </div>
      </section>

      <footer className={classes.footer}>
        <figure></figure>
      </footer>

    </div>
  );
}
export default App;
