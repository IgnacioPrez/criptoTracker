import React from 'react';
import {HeaderBack, Search} from '../components';
import {ContainerAddScreen} from '../components/screen-style-component/style';
const AddScreen = ({navigation}: any) => {
  return (
    <ContainerAddScreen>
      <HeaderBack navigation={navigation} />
      <Search />
    </ContainerAddScreen>
  );
};

export default AddScreen;
