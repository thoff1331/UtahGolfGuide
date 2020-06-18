export const courseCardStyles = () => ({
    cards: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "60vw",
        height: "70vh",
        minheight: "50vh",
        border: "4px solid yellow"
    },
    cardContent: {
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        width: "500px",
        alignItems: "center",
        minWidth: "60vw",
        "& img": {
            height: "100px",
            width: "200px"
        }
    }
})