import { StyleSheet } from 'react-native-web';

export const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 900,
        textAlign: 'center'
    },
    btnSection: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        backgroundImage: 'linear-gradient(0deg, #008 0%, blue 50%, #0bf 99%)',
        boxShadow: '-0.5px 0.5px 4.5px 1px black',
        borderRadius: 5,
        width: 100,
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 600
    }
});