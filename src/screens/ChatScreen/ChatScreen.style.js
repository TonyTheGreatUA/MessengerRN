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
    fontSize: 20,
    color: '#8c8886',
    width: '82%',
    paddingLeft: 10,
    height: 40,
    margin: 3,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  lowerBlock: {
    paddingBottom: 60,
  },
  sendMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  send: { justifyContent: 'flex-end' },
  sendButton: {
    height: 40,
    width: 40,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: '#6982c2',
    resizeMode: 'center',
  },
  onlineText: {
    color: '#6982c2',
  },
  messageView: {
    flex: 1,
    width: '100%',
  },
  messageText: {
    backgroundColor: '#6982c2',
    borderWidth: 1,
    borderColor: '#FFF',
    width: '50%',
    borderRadius: 20,
    margin: 5,
    padding: 8,
  },
  ymessageText: {
    flex: 1,
    backgroundColor: '#6982c2',
    borderWidth: 1,
    borderColor: '#FFF',
    marginLeft: 205,
    width: '50%',
    borderRadius: 20,
    margin: 5,
    padding: 8,
  },
  senderName: {
    color: '#FFF',
  },
});
