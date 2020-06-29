import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
const axios = require("axios").default;
const qs = require("querystring");


/////////// styling ///////////////////////////
const useStyles = makeStyles((theme) => ({}));

//////////////// props area /////////////////////
function Posts(props) {
  const classes = useStyles();
  const [auth, setauth] = useState(true);

  ////////// post req ////////////////////
  const requestBody = {
    email: props.location.state.email,
    password: props.location.state.password,
  };
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  let url = "http://localhost/users/auth";
  axios
    .post(url, qs.stringify(requestBody), config)
    .then((result) => {
      setauth(result.data.auth);
    })
    .catch((err) => {
      // Do somthing
    });


    ////////////////////////// return ///////////////////////////
  return (
    <div>
      <h1> {String(auth)}</h1>
    </div>
  );
}

export default Posts;
