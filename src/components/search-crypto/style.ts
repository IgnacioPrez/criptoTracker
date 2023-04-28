import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  height: 85%;
  width: 90%;
  align-self: center;
  justify-content: center;
`;

type AddTextInputProps = {
  focus: boolean;
};
export const Input = styled.TextInput<AddTextInputProps>`
  border: 2px solid;
  border-color: ${({theme, focus}) => (focus ? theme.yellow : theme.grey)};
  border-radius: 4px;
  background-color: ${({theme, focus}) =>
    focus ? theme.background : theme.input};
  font-size: 16px;
  color: ${({theme}) => theme.text};
  padding: 8px 8px;
`;

export const ReferenceText = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const SearchBtn = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.yellow};
  margin: 16px 0px;
  padding: 10px;
  width: 100px;
  align-items: center;
  border-radius: 4px;
  align-self: flex-end;
`;

export const BtnSearchText = styled.Text<AddTextInputProps>`
  opacity: ${props => (props.focus ? 1 : 0.2)};
  color: ${({theme}) => theme.lightGrey};
  font-size: 16px;
`;
