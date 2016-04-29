import {
  SET_DATA
} from '../actions/App/AppActions';


const initialState = {
  data: null
};

export function App(state = initialState, action = null) {
  switch (action.type) {
    case SET_DATA:
      return _.assign({}, state, {
        data: action.value
      });
    default:
      return state;
  }
}
