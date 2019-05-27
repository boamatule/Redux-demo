import initialState from '../store/initialState'
import { reduxTokenAuthReducer } from 'redux-token-auth'

const rootReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_GREETING') {
        return {
          ...state,
          greeting: state.proposed_greeting,
          reduxTokenAuth: reduxTokenAuthReducer
        }
    } else if (action.type === 'PROPOSE_GREETING'){
        return {
          ...state,
          proposed_greeting: action.greeting
        }
    } else {
      return state
    }
    
}

export default rootReducer
