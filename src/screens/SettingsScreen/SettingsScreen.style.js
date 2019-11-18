import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  profileCard: { flex: 1, flexDirection: 'row' },
  nameText: {
    fontSize: 28,
    fontFamily: 'arial',
    color: '#8c8886',
  },
  userPhoto: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  photoView: {
    width: '25%',
    paddingLeft: '5%',
    paddingTop: '3%',
  },
  nameView: {
    paddingTop: '8%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '75%',
  },
  descrInfo: {
    color: '#6982c2',
  },
  mainButton: {
    backgroundColor: '#6982c2',
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
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
