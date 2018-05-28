import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INIT_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    // action.payload === { prop: 'Name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
     // square brackers are 'key interpolation' => will become 'shift:' or 'name:'
    case EMPLOYEE_CREATE:
      return INIT_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INIT_STATE;

    default: return state;
  }
};
