import { display } from "@material-ui/system";
import { zIndex } from "material-ui/styles";


export const landingPageStyles = () => ({
  search: {
    display: "flex",
    justifyContent: "center"
  },
  searchby: {
    height: "400px",
    width: "400px",
    backgroundColor: "green",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    color: "white"
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    overFlow: "hidden"
  },
  landingPageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  searchBox: {
    width: "700px",
    dispplay: "flex",
    justifyContent: "center"
  },
  searchBox: {
    height: "8vh",
    width: "90vw",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: "22vw",
    "& input": {
      background: "blue",
      padding: 0,
      border: "1px solid #f5f5f5",
      lineHeight: "70px",
      height: "70px",
      width: "calc(100% - 800px)",
      marginLeft: 80,
      textIndent: "2px",
      outline: "none",
      textAlign: "center",
      fontSize: "65px",
      color: "yellow",
      borderRadius: "35px",
      opacity: "0.6"

    }
  },
  sortFilter: {
    display: "flex",
    width: "5vw",
    justifyContent: "center",
    marginRight: "6vw"
  },
  searchResults: {
    display: "none"
  },
  pageDisplay: {
    display: "flex",
    alignItems: "flex-end",
    height: "10vh"
  },
  pageControls: {
    postion: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    alignItems: "center",
    "& button": {
      "& button": {
        textDecoration: "none",
        outline: "none"
      }
    }

  },
  pageCount: {
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-evenly",
    width: "30vw",
    flexDirection: "row",
    textDecoration: "none",
    "& button": {
      textDecoration: "none",
      outline: "none",
      border: "none"
    }
  },
  cardContent: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "500px",
    alignItems: "center",
    "& img": {
      height: "100px",
      width: "200px"
    }
  },
  cards: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80vw",
    marginLeft: "10vw",
    height: "70vh",
    minheight: "50vh",
    minWidth: "60vw",
  },
});