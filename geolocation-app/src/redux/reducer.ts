import { SET_ADDRESS } from './actions';

interface State {
  address: string;
}

const initialState: State = {
  address: '',
};

const reducer = (state = initialState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
