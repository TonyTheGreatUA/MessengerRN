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
    fontSize: 28,
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
});
