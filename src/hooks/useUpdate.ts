import {useEffect, useState} from 'react';
import {UpdateState} from '../model/crypto.model';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../app/rootReducer';
import {updateAllCrypto} from '../slices/criptoSlice';
import {BASE_URL} from '@env';

export function useUpdate() {
  const [provisionalState, setProvisionalState] = useState<UpdateState[]>([]);
  const allCryptoState = useSelector((state: RootState) => state.crypto.crypto);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(({data}) => setProvisionalState(data))
      .catch(error => console.error(error));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    if (!provisionalState) {
      return;
    }
    const updatedResults = provisionalState.map(result => {
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
    const newState = updatedResults.map(obj => {
      const {metrics, ...newCryptoState} = obj;
      return newCryptoState;
    });
    newState ? dispatch(updateAllCrypto(newState)) : null;
    setRefreshing(false);
  };

  return {refreshing, onRefresh};
}
