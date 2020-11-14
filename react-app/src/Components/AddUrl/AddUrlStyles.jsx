import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      paddingTop: "10rem",
    },
    button: {
      height: "100%",
    },
    response: {
      marginTop: "2rem",
      textAlign: "center",
    },
  })
);

export default useStyles;
