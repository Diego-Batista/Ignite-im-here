import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        height: '100%',
        paddingLeft: 16,
        flex: 1,
        textAlignVertical: 'center',
        fontSize: 16,
        color: '#FDFCFE',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        marginRight: 12
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FDFCFE',
        fontSize: 24,
    }
})