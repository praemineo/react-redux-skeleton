import appActions from './appActions'

const defaultState = {

};

const appReducer = (state = defaultState, action, rootState) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
  default:
    return newState;
  }
}

export default appReducer;