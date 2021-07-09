import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    padding: "10px",
    fontFamily: "Poppins",
  },
  paper: {
    padding: "20px",
    backgroundColor: "#DEE4E7",
    textEmphasisColor: "#363537",
  },
  subPaper: {
    margin: "20px 0",
    padding: "20px",
    background: "inherit",
    backdropFilter: "blur(5px)",
  },
  currentTemperature: {
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  temperatureValue: {
    fontSize: "40px",
    color: "rgba(75,192,192,1)",
  },
  windValue: {
    color: "rgba(75,192,192,1)",
  },
  temperatureDesc: {
    textAlign: "center",
  },
  currentDetails: {
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
    fontWeight: "bold",
  },
  chart: {
    maxHeight: "250px",
  },
}));
