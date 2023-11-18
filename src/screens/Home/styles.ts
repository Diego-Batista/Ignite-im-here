import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventDate: {
      fontSize: 16,
      color: '#6B6B6B'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 36,
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FDFCFE',
      padding: 16,
      fontSize: 16,
      marginRight: 12
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FDFCFE',
      fontSize: 24,
    },
    listEmptyText: {
      color: '#FDFCFE',
      fontSize: 18,
      textAlign: 'center'
    }
  });