import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

/////////////////// styling ////////////////////////////////

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    marginTop: "10px",
  },
  image: {
    backgroundImage: "url(./homepic.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    marginTop: "3%",
    borderRadius: "3px",
  },
  inputArea: {
    marginTop: "3%",
  },
  avatar: {
    backgroundColor: "#4051B5",
    color: "white",
    height: "60px",
    width: "60px",
    borderRadius: "100%",
    padding: "5px",
  },
  inputcenter: {
    marginTop: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  form: {
    margin: "20px",
    textAlign: "left",
  },
  hidden: {
    display: "none",
  },
  signup : {
      textAlign : 'center' ,
      marginTop : '20px'  
    }
}));

//////////////////////// main view ///////////////////////////////

function Home() {
  // States 
  const [register, setRegister] = useState(false);
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      {/* image  */}

      <Grid item xs={false} sm={4} md={8} className={classes.image} />

      {/*  sign in */}

      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={4}
        className={classes.inputArea}
        square
      >
        <div className={classes.inputcenter}>
          <h1> Welcome To Diary Application </h1>
          <LockOpenTwoToneIcon className={classes.avatar} />
          <div className={register ? classes.hidden : ""}>
            <h2> Sign in Using your Credentials</h2>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={function(event) {
                  setEmail(event.target.value)
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={function(event) {
                  setPassword(event.target.value)
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link to={{
          pathname : "/posts" ,
          state : {
            email : email ,
            password : password  
          }

         }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              </Link>
            </form>
            <Button
              type="submit"
              fullWidth
              variant="text"
              color="primary"
              className={classes.submit}
              onClick={function () {
                setRegister(true);
              }}
            >
              Not a user ? Register Here
            </Button>
          </div>
        </div>

        {/* signup */}

        <div className={register ? "" : classes.hidden}>
        <h2 className={classes.signup}> Sign Up</h2>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                 <Link to={{
          pathname : "/about" ,
         }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.signup}
                >
                  Sign Up
                </Button>
              </Link>
              </Grid>
            </Grid>
          </form>
         

        </div>

        {/* sign up */}
      </Grid>
    </Grid>
  );
}

export default Home;
