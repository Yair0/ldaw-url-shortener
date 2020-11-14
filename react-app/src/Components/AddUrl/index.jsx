import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import axios from "axios";
import useStyles from "./AddUrlStyles";
import { useForm } from "react-hook-form";

const AddUrl = () => {
  const classes = useStyles();
  const [url, setUrl] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(`http://localhost:4000/`, data)
      .then((res) => {
        setUrl(res.data.gen_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justify="center" spacing={1}>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Insert URL"
                  name="original_url"
                  inputRef={register({ required: "Inserta una URL" })}
                  error={errors.original_url ? true : false}
                  helperText={
                    errors.original_url ? errors.original_url.message : null
                  }
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} className={classes.response}>
          {url ? (
            <Typography variant="h5">
              La URL generada es:{" "}
              <Link to={`/${url}`}>http://localhost:3000/{url}</Link>
            </Typography>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddUrl;
