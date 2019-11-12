import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    flex: 1,
  },
  userCard: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    paddingBottom: '1%',
    paddingTop: '2%',
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
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '1%',
    paddingBottom: '1%',
    marginLeft: 20,
    marginRight: 20,

    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  lowerBlock: {},
  sendMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  send: { justifyContent: 'flex-end' },
  sendButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#6982c2',
  },
});
