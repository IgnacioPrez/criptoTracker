import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../app/rootReducer';
import {baseUrl} from '../services/urls';
import {UpdateState} from '../model/crypto.model';
import {updateAllCrypto} from '../slices/criptoSlice';

export function useUpdate() {
  const [provisional, setProvisional] = useState<UpdateState[]>([]);
  const allCryptoState = useSelector((state: RootState) => state.crypto.crypto);
  const dispatch = useDispatch();
  function fetchData() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(({data}) => setProvisional(data))
      .catch(error => console.error(error));
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
  setInterval(fetchData, 60000);
  dispatch(updateAllCrypto(updatedResults));
}
