import appReducer from './appReducer';

const reducers = (state = {}, action) => {
  return {
    app: appReducer(state.app, action, state),
  };
};

export default reducers;