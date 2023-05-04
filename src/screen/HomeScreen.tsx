import React, {useState, useEffect} from 'react';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {CryptoContainer} from '../components';
import {ViewContent} from '../components/screen-style-component/style';
import {
  HeaderContent,
  HeaderInfo,
  Title,
} from '../components/header-home/style';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateState} from '../model/crypto.model';
import {baseUrl} from '../services/urls';
import {RootState} from '../app/rootReducer';
import {updateAllCrypto} from '../slices/criptoSlice';

const HomeScreen = ({navigation}: any) => {
  const [provisional, setProvisional] = useState<UpdateState[]>([]);
  /*   const allCryptoState = useSelector((state: RootState) => state.crypto.crypto);
  const dispatch = useDispatch(); */
  function fetchData() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(({data}) => setProvisional(data))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    fetchData();
  }, []);
  /*   const updatedResults = provisional.map(result => {
    const myStateItem = allCryptoState.find(item => item.id === result.id);
    if (myStateItem) {
      return {
        ...result,
        market_data: {
          ...result.metrics.market_data,
        },
      };
    }
    return result;
  });
 */
  console.log(provisional);

  return (
    <ViewContent>
      <HeaderContent>
        <HeaderInfo>
          <Title>CryptoTracker Pro</Title>
          <UserIcon name="user" size={60} />
        </HeaderInfo>
      </HeaderContent>
      <CryptoContainer navigation={navigation} />
    </ViewContent>
  );
};

export default HomeScreen;
