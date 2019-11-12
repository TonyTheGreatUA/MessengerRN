import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageSize: {
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  mainText: {
    color: '#6982c2',
    fontSize: 52,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  descrText: {
    color: '#8c8886',
    fontSize: 32,
    fontFamily: 'arial',
    textAlign: 'center',
    paddingBottom: '10%',
  },
  mainButton: {
    backgroundColor: '#6982c2',
    borderRadius: 12,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 42,
    paddingRight: 42,
    textAlign: 'center',
    shadowColor: '#6982c2',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    fontSize: 26,
    color: '#fff',
  },
});
