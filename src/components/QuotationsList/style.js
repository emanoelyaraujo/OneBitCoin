import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "space-evenly"
    },
    buttonFilter:{
        width: 50,
        height: 30,
        backgroundColor: "#6f4fe5",
        alignItems: "center",
        borderRadius: 50,
        justifyContent: "center"
    },
    textButtonFilter: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14
    }
});

export default styles