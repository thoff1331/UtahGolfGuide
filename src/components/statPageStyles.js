import { display } from "@material-ui/system";

export const statPageStyles = () => ({
    header: {
        height: "18vh",
        width: "100vw",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "Center",
        fontSize: "34px",
        textDecoration: "bold",
        color: "gold",
        "& h5": {
            fontSize: "30px",
            textDecoration: "bold"
        }
    },
    form: {
        display: "flex",
        height: "10vh",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20vh"
    },
    table: {
        border: "10px solid red",
        width: "80vw",
        height: "30vh",
        backgroundColor: "lightBlue",
        marginLeft: "10vw"
    },
    links: {
        textDecoration: "none",
        marginLeft: "2vw",
        color: "white"
    },
    linksOne: {
        textDecoration: "none",
        marginLeft: "0vw",
        color: "white"
    }
})