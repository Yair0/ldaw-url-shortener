import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      paddingTop: "10rem",
    },
    text: {
      marginTop: "2rem",
      textAlign: "center",
    },
  })
);

export default useStyles;
