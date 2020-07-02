import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
const axios = require("axios").default;
const qs = require("querystring");



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EDEDED",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    width: "800px",
    margin: "0px",
  },
  header: {
    padding: "50px",
    textAlign: "center",
  },
  textfield: {
    width: "auto",
    justifyContent: "space-evenly",
    textAlign: "center",
    padding: "0px 100px",
  },
  li: {
    width: "500px",
    textAlign: "center",
    paddingLeft: "100px",
    lineHeight: "1.5",
  },
  button : {
    width : "200px"
  },
  space : {
    margin  : "20px"
  }
}));

function CarSearch() {
  const classes = useStyles();

  const [vin, setvin] = useState("");
  const [reg, setreg] = useState("");
  const [answer, setanswer] = useState("");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <h3 className={classes.header}>
        {" "}
        To find out if your vehicle is subject to a Volvo Recall or has an
        Active Field Service Action, please enter your Vehicle Identification
        number(VIN) below . Volvo Recall & Active Field Service Action
        information is available from March 1994, for Recalls and Active Field
        Service Actions prior to this date, please contact your nearest
        authorised repairer.
      </h3>
      <ul className={classes.li}>
        <li>
          To find out your nearest Norway dealer{" "}
          <a href="https://www.volvocars.com/no/find-a-dealer">Click Here </a>
          
        </li>

        <li>Please Enter your VIN Number or Registration number</li>
      </ul>

      <form className={classes.textfield} noValidate>
        <TextField className={classes.space}
          variant="outlined"
          margin="normal"
          required
          id="text"
          label="Vin Number"
          name="vin"
          autoFocus
          value={vin}
          onChange={function (event) {
            setvin(event.target.value);
          }}
        />
        <TextField className={classes.space}
          variant="outlined"
          margin="normal"
          required
          id="text"
          label="Registration Number"
          name="regnum"
          autoFocus
          value={reg}
          onChange={function (event) {
            setreg(event.target.value);
          }}
        />
         </form>
        <Button className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={function () {
           
            const requestBody = {
              vinNumber : vin ,
              regNumber : reg
            };
           
            const config = {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            };
            
            let url = "http://localhost/volvo/searchvin";
            axios
              .post(url, qs.stringify(requestBody), config)
              .then((result) => {
                setanswer(result.data.message);
              })
              .catch((err) => {
                // Do somthing
              });
          }}
        >
          Search
        </Button>
        <h1> {answer}</h1>
     
    </div>
  );
}

export default CarSearch;
