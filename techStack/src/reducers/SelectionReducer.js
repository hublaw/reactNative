export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
  // initial value cannot be 'undefined'
  // this reducer will run on startup for init state, giving
  // default state of null prevents the reducer returning undefined
};
