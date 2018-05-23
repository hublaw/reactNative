import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INIT_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INIT_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
    // create new object, with existing state and the extra key!
    // If email exists, it will be overwriten, if not, it's created
    return {
      ...state,
      email: action.payload
    };

    case PASSWORD_CHANGED:
    return {
      ...state,
      password: action.payload
    };

    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case LOGIN_USER_SUCCESS:
    return {
      ...state,
      ...INIT_STATE,     // resets all state to init, apart from user
      user: action.payload,
    };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        password: ''
      };


    default:
    return state;

  }
};
