export const courseCardStyles = () => ({
    cards: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "60vw",
        height: "50vh",
        minheight: "50vh",
        minWidth: "60vw",
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
    }
})