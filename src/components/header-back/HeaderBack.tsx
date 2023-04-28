import React from 'react';
import {Pressable} from 'react-native';
import {ContainerHeaderScreen, TextLinkAdd} from './styles';
interface PropsNavigation {
  navigation: any;
}
const HeaderBack = ({navigation}: PropsNavigation) => {
  return (
    <ContainerHeaderScreen>
      <Pressable onPress={() => navigation.navigate('HomeScreen')}>
        <TextLinkAdd>{'< Back to list'}</TextLinkAdd>
      </Pressable>
    </ContainerHeaderScreen>
  );
};

export default HeaderBack;
