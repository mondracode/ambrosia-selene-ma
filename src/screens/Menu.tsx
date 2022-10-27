import React from 'react';
import {Button, Text, View} from 'react-native';

// @ts-ignore
const Menu = ({auth, saveAuth}) => {
  return (
    <View>
      <Text>{auth.name}</Text>
      <Text>{auth.username}</Text>
      <Text>{auth.token}</Text>
      <Button
        title="Logout"
        onPress={() =>
          saveAuth({
            token: '',
            username: '',
            name: '',
          })
        }
      />
    </View>
  );
};
export default Menu;
