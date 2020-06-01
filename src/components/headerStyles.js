import { display } from "@material-ui/system";

export const headerStyles = () => ({
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
    }
})