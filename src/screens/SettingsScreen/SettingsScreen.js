//@flow
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './SettingsScreen.style';

const user = {
  first: 'Anton',
  last: 'Suhorada',
  phone: '+380992453354',
  username: '@antonsuhorada',
  image:
    'https://scontent.fiev24-1.fna.fbcdn.net/v/t1.0-1/c0.1.320.320a/p320x320/18485987_1303866376395728_3031517757695979358_n.jpg?_nc_cat=107&_nc_oc=AQn-W43cLzhDZTbsUkB92vgyapuNDbvcexCPj3P5Ntc4INYLuRcpW1-FMMt3ZBFOzKE&_nc_ht=scontent.fiev24-1.fna&oh=a7169249b4229571dca708e9d2f1aef4&oe=5E43A73F',
};

const SettingsScreen = () => {
  return (
    <>
      <View style={styles.profileCard}>
        <View style={styles.photoView}>
          <Image style={styles.userPhoto} source={{ uri: user.image }} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{`${user.first} ${user.last}`}</Text>
          <Text style={styles.descrInfo}>{`${user.phone}`}</Text>
          <Text style={styles.descrInfo}>{`${user.username}`}</Text>
        </View>
      </View>
    </>
  );
};

export default SettingsScreen;
