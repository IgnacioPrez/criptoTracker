import React, {useState} from 'react';
import {
  BtnSearchText,
  Input,
  ReferenceText,
  SearchBtn,
  SearchContainer,
} from './style';
import {themes} from '../../utilities/styles.theme';
import {addCrypto} from '../../slices/criptoSlice';

const Search = () => {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState('');

  const handleTextChange = (text: string) => {
    setSearch(text);
  };
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
      <SearchBtn onPress={() => addCrypto(search)}>
        <BtnSearchText focus={focus}>Add</BtnSearchText>
      </SearchBtn>
    </SearchContainer>
  );
};

export default Search;
