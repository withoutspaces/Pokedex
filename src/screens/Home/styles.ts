import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
    },
    pokemonsContainer: {
        flex: 1,
        width: "95%",
    },
    search: {
        width: '90%',
        borderWidth: 0.4,
        borderRadius: 8,
        marginVertical: 16,
        paddingHorizontal: 32,
        paddingVertical: 4,
        fontFamily: theme.fonts.regular400,
        position: "relative"
    },
    searchBox: {
        flexDirection: 'row',
        
    },
    containerAnimation: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        flex: 1,
        alignSelf: "center"
    },
    animation: {
        width: '40%',
        // marginRight: 20
    },
    loadingText: {
        fontFamily: theme.fonts.regular400,
        fontSize: 20
    },
    magnify: {
        position: "absolute",
        bottom: 23,
        left: 6
    },
    listLoadingAnimation: {
        width: "40%"
    },
    listLoadingAnimationContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
})