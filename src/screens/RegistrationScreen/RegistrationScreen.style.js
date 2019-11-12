import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  registrationView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '8%',
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    fontSize: 18,
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#6982c2',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  mainText: {
    color: '#6982c2',
    fontSize: 52,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  descrText: {
    paddingTop: '5%',
    color: '#8c8886',
    fontSize: 32,
    fontFamily: 'arial',
    textAlign: 'center',
    paddingBottom: '10%',
  },
  formText: {
    color: '#6982c2',
    fontSize: 22,
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
