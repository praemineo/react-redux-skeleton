import appReducer from './appReducer';

const reducers = (state = {}, action) => ({
  app: appReducer(state.app, action, state),
});

export default reducers;
