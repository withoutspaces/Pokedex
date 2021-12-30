import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogo: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        marginLeft: 10,
        marginTop: 5
    },
    search: {
        width: '90%',
        borderWidth: 0.4,
        borderRadius: 8,
        marginVertical: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    pokemonContainer: {
        width: 350,
        paddingTop: 8,
        paddingLeft: 8,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
})