import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection:"row",
    },
    image: {
        width:100,
        height: 100,
        borderRadius: 50,
    },
    inner_container: {
        flex: 1,
        justifyContent: "center",
        padding: 10

    },
    title: {
        fontWeight: "bold",
        fontSize: 25
    },
    info_container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },
    year: {
        fontSize: 12,
        marginLeft: 10,
        fontWeight: "bold",
        color: "gray"
    },
    artist: {
        fontWeight: "bold"
    },
    soldout_container: {
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 3,
        padding: 5
    },
    soldout_title: {
        color: "red",
        fontWeight: "bold",
        fontSize: 12
    }
})