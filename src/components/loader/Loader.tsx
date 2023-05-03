import React from 'react';
import {LoaderContainer} from './style';
import {ActivityIndicator} from 'react-native';
const Loader = () => {
  return (
    <LoaderContainer>
      <ActivityIndicator size="large" />
    </LoaderContainer>
  );
};

export default Loader;
