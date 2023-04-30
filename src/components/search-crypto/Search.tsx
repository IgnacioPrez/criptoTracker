import React from 'react';
import {
  BtnSearchText,
  Input,
  ReferenceText,
  SearchBtn,
  SearchContainer,
} from './style';
import {themes} from '../../utilities/styles.theme';
import {useSearch} from '../../hooks/useSearch';

const Search = () => {
  const {handleButtonPress, handleTextChange, focus, setFocus, search} =
    useSearch();

  return (
    <SearchContainer>
      <ReferenceText>Add a Cryptocurrency</ReferenceText>
      <Input
        focus={focus}
        placeholder="Use a name or ticker symbol..."
        placeholderTextColor={themes.grey}
        onFocus={() => setFocus(true)}
        value={search}
        onChangeText={handleTextChange}
      />
      <SearchBtn onPress={handleButtonPress}>
        <BtnSearchText focus={focus}>Add</BtnSearchText>
      </SearchBtn>
    </SearchContainer>
  );
};

export default Search;
