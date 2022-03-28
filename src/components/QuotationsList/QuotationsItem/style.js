import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        width: "95%",
        height: "auto",
        backgroundColor: "#e2e2e2",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    contextLeft: {
        width: "36%",
        height: "100%",
        alignItems: "flex-start"
    },
    contextRigth: {
        width: "60%",
        alignItems: "flex-end"
    },
    informationCotation: {
        flexDirection: "row",
        alignItems: "center"
    },
    date: {
        paddingLeft: 5,
        fontSize: 16,
        fontWeight: "bold"
    },
    price: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default styles