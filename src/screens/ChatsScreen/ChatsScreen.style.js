import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  userCard: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    paddingBottom: '1%',
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  nameText: {
    paddingTop: '1%',
    fontSize: 22,
    fontFamily: 'arial',
    color: '#8c8886',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    marginBottom: 4,
  },
  photoView: {
    paddingLeft: '4%',
    width: '20%',
  },
  nameView: {
    width: '75%',
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    backgroundColor: '#FFF',
    fontSize: 24,
    color: '#8c8886',
    paddingLeft: 15,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  messageText: { color: '#6982c2' },
});
