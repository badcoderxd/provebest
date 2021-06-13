import { authConstant, registerConstant } from "../../constants/auth";

const initState = {
   token: null,
   user: {
       firstName: '',
       lastName: '',
       email: '',
       picture: ''
   },
   authenticate: false,
   authenticating: false,
   loading: false,
   error: null,
   message: ''
};

export default (state = initState, action) =>{
    switch(action.type){
        case authConstant.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;

        case authConstant.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;

        case authConstant.LOGIN_FAILURE:
                state = {
                    ...state,
                    error:action.payload.error,
                    authenticate: false,
                    authenticating: false
                }
            break;
        
        case authConstant.LOGOUT_REQUEST:
                state = {
                    ...state,
                    loading:true
                }
            break;
        
        case authConstant.LOGOUT_SUCCESS:
                state = {
                    ...initState
                }
            break;

        case authConstant.LOGOUT_FAILURE:
                state = {
                    ...state,
                    error:action.payload.error,
                    loading:false
                }
            break;
        
        case registerConstant.USER_REGISTER_REQUEST:
                state = {
                    ...state,
                    loading:true
                }
            break;
        
        case registerConstant.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading:false,
                message: action.payload.message
            }
           break;

        case registerConstant.USER_REGISTER_FAILED:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
           break;
    }

    return state;
}