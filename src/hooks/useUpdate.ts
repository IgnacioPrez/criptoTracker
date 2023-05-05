import {useState} from 'react';
import {UpdateState} from '../model/crypto.model';
import {useSelector} from 'react-redux';
import {RootState} from '../app/rootReducer';
import {baseUrl} from '../services/urls';

export function useUpdate() {
  const [provisionalState, setProvisionalState] = useState<UpdateState[]>([]);
  const allCryptoState = useSelector((state: RootState) => state.crypto.crypto);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    fetch(baseUrl)
      .then(response => response.json())
      .then(({data}) => setProvisionalState(data))
      .catch(error => console.error(error));
    setRefreshing(false);
  };
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

  return {refreshing, onRefresh, newState};
}
