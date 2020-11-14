import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import axios from "axios";
import useStyles from "./ShorterUrlStyles";

const AddUrl = () => {
  const classes = useStyles();
  const { url_shortened } = useParams();
  const [info, setInfo] = useState({
    data: {
      original_url: "",
      gen_url: "",
      no_redirects: 0,
    },
    redirect: null,
  });

  useEffect(() => {
    const visitUrl = async () => {
      const result = await axios.put(
        `http://localhost:4000/redirect/${url_shortened}`
      );
      console.log(result);
    };
    const getUrlInfo = async () => {
      const { data } = await axios(
        `http://localhost:4000/redirect/${url_shortened}`
      );
      console.log(data);
      if (data.redirect) Redirect(data.data.original_url);
      setInfo(data);
    };
    visitUrl();
    getUrlInfo();
  }, [url_shortened]);

  const Redirect = (original_url) => {
    window.location.href = original_url;
  };

  return (
    <Box className={classes.container}>
      {info.redirect || info.data === undefined ? (
        <></>
      ) : (
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} className={classes.text}>
            <Typography variant="h5">
              La URL original fue:{" "}
              <Link to="#" onClick={() => Redirect(info.data?.original_url)}>
                {info.data?.original_url}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.text}>
            <Typography variant="h5">
              La URL generada es:{" "}
              <Link to={`/${info.data?.gen_url}`}>
                http://localhost:3000/{info.data?.gen_url}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.text}>
            <Typography variant="h5">
              Cantidad de veces que se ha redireccionado:{" "}
              {info.data?.no_redirects}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default AddUrl;
