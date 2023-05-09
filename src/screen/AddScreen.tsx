import React from 'react';
import {ContainerAddScreen} from '../components/screen-style-component/style';
import {HeaderBack} from '../components/header-back';
import {Search} from '../components/search-crypto';

const AddScreen = ({navigation}: any) => (
  <ContainerAddScreen>
    <HeaderBack navigation={navigation} />
    <Search />
  </ContainerAddScreen>
);

export default AddScreen;
