import axiosInstance from "../../../helpers/axios";
import { authConstant, registerConstant } from "../../constants/auth"

export const login = (user) =>{

    return async (dispatch) =>{

        dispatch({ type:authConstant.LOGIN_REQUEST })

        const res = await axiosInstance.post('/admin/login',user)
      
        if(res.status === 200)
        {
            const { token, user } = res.data;
            localStorage.setItem('token', token );
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                    type: authConstant.LOGIN_SUCCESS,
                    payload: {
                        token, user
                    }
                });
        } 
        else
        {
            if(res.status === 400)
             {
                 dispatch({
                     type: authConstant.LOGIN_FAILURE,
                     payload: { error: res.data.error }
                 })
             }
        }
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token)
        {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type:authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }
        else
        {
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: { error:'Failed to login' }
            })
        }
    }
}

export const signout = () => {
    return async dispatch =>{

        dispatch({ type: authConstant.LOGOUT_REQUEST })
        const res = await axiosInstance.post(`/admin/signout`);
        
        if(res.status === 200)
        {
          localStorage.clear();
          dispatch({
                      type:authConstant.LOGIN_SUCCESS
                   });
        }
        else
        {
            dispatch({
                       type:authConstant.LOGOUT_FAILURE,
                       payload: { error:res.data.error }
                     });
        }
    }
}

//signup

export const signup = (user) =>{

    return async (dispatch) =>{

        dispatch({ type:registerConstant.USER_REGISTER_REQUEST })

        const res = await axiosInstance.post('/admin/signup',user)
      
        if(res.status === 200)
        {
            const { message } = res.data;
            dispatch({
                    type: registerConstant.USER_REGISTER_SUCCESS,
                    payload: { message }
                });
        } 
        else
        {
            if(res.status === 400)
             {
                 dispatch({
                     type: registerConstant.USER_REGISTER_FAILED,
                     payload: { error: res.data.error }
                 })
             }
        }
    }
}