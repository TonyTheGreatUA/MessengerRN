import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  registrationView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    margin: 'auto',
  },
  input: {
    width: '100%',
    alignSelf: 'center',
    fontSize: 18,
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#6982c2',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  leftItem: { width: '49%', paddingTop: '4%', paddingLeft: '10%' },
  rightItem: { width: '49%', paddingRight: '10%' },
  descrText: {
    color: '#6982c2',
    fontSize: 24,
    fontFamily: 'arial',
    textAlign: 'center',
    paddingBottom: '5%',
    paddingTop: '5%',
  },
  mainButton: {
    backgroundColor: '#6982c2',
    borderRadius: 12,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 62,
    paddingRight: 62,
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
