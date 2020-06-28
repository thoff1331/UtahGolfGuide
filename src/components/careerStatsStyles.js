import { display } from "@material-ui/system";
import { EditorFormatAlignCenter } from "material-ui/svg-icons";

export const careerStatsStyles = () => ({
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
        marginBottom: "10vh",
        color: "gold",
        "& h5": {
            fontSize: "30px",
            textDecoration: "bold"
        }

    },
    form: {
        display: "flex",
        color: "yellow",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "45vh",
        width: "20vw",
        fontSize: "30px",
        marginTop: "5vh",
        marginBottom: "5vh",
        border: "5px solid yellow",
        backgroundColor: "green",
        borderRadius: "8%",
        "& Button": {
            border: "2px solid white",
            color: "white",
            backgroundColor: "grey",
            borderRadius: "10%",
            marginBottom: "5vh",
            marginTop: "5vh",
        },
        "& input": {
            width: "7vw",
            textAlign: "center"
        }
    },
    table: {
        border: '12px solid green',
        width: "80vw",
        height: "10vh",
        backgroundColor: "lightBlue",
        marginLeft: "10vw",
        marginTop: "0vh",
        "& TableCell": {
            height: "15px"
        }
    },
    links: {
        textDecoration: "underline",
        marginLeft: "2vw",
        color: "white"
    },
    linksOne: {
        marginLeft: "0vw",
        color: "white",
        textDecoration: "underline",
    },
    formContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    statsButtons: {
        display: 'flex',
        justifyContent: "space-between",
        width: "10vw"
    },
    addNewScoreButton: {
        display: "flex",
        justifyContent: "center",
        "& Button": {
            marginTop: "3vh",
            marginBottom: "3vh",
            color: "black",
            backgroundColor: "white"
        }
    },
    noStatsFound: {
        color: "yellow",
        display: "flex",
        justifyContent: "center",
        fontSize: "28px"
    },
    tcr: {
        position: "relative",
        right: "5vw",
        top: "10vh",
        display: "flex",
        justifyContent: "center"
    }
})