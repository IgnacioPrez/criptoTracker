import React from 'react';
import {LoaderContainer} from './style';
import {ActivityIndicator} from 'react-native';

const Loader = () => (
  <LoaderContainer>
    <ActivityIndicator size="large" />
  </LoaderContainer>
);

export default Loader;
