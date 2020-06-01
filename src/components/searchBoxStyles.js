export const searchBoxStyles = () => ({
    searchBox: {
        height: "8vh",
        width: "90vw",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: "30vw",
        "& input": {
            background: "blue",
            padding: 0,
            border: "1px solid #f5f5f5",
            lineHeight: "70px",
            height: "70px",
            width: "calc(100% - 1100px)",
            marginLeft: 60,
            textIndent: "2px",
            outline: "none",
            textAlign: "center",
            fontSize: "65px",
            color: "yellow",
            borderRadius: "35px",
            opacity: "0.6"

        }
    },
    searchButton: {
        display: "block",
        height: "90px",
        width: "90px",
        borderRadius: "50%",
        border: "1px solid black",
        marginRight: "7vw",
        fontSize: "20px",
        outline: "none",
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7FJMt2yUhVkpJmaE7HMNJXsI7s1m9kpekA4Aov1HwOWnGfVDp&usqp=CAU)`
    },
    sortFilter: {
        display: "flex",
        width: "5vw",
        justifyContent: "flex-end",
        marginRight: "11vw"
    },
    courseList: {
        borderStyle: "solid",
        borderColor: "yellow",
        borderWidth: "0px 2px 0px 2px",
        width: "25vw",
        position: "absolute",
        left: "36vw",
        top: "1.5vw",
        background: "grey",
        borderRadius: "5%",
        color: "white",
        fontSize: "25px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        Opacity: "0.3",
        overFlow: "scroll"
    }
})