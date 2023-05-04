import React, {useEffect, useState} from 'react';
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
/* import {persistor} from '../app/store';

function handleClearPersistedState() {
  persistor.purge();
}

handleClearPersistedState(); */

const HomeScreen = ({navigation}: any) => {
  const [provisional, setProvisional] = useState<UpdateState[]>([]);
  const allCryptoState = useSelector((state: RootState) => state.crypto.crypto);
  const dispatch = useDispatch();

  function fetchData() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(({data}) => setProvisional(data))
      .catch(error => console.error(error));
  }

  setInterval(() => {
    fetchData();
  }, /* 15 * 60 * 1000 */ 60 * 1000);
  useEffect(() => {
    if (allCryptoState.length <= 0) {
      return;
    }
    const updatedResults = provisional.map(result => {
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
    if (provisional) {
      dispatch(updateAllCrypto(updatedResults));
    }
  }, [allCryptoState]);
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
