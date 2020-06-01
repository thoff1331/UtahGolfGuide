import { display } from "@material-ui/system";
import { yellow } from "@material-ui/core/colors";

export const pageDisplayStyles = () => ({
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
    highLightedPage: {
        color: "yellow",
        textDecoration: "none"

    }
})