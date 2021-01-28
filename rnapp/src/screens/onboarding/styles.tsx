import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  surface: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: 'white',
    padding: 16
  },
  inButton: {
    backgroundColor: 'lightgrey',
    width: '100%'
  },
  cadButton: {
    backgroundColor: 'lightblue',
    width: '100%'
  }
});

export { styles };