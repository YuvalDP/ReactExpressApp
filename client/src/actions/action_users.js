import axios from 'axios';
export const ADD_USER ='ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const GET_USERS = 'GET_USERS';
export const GET_AUTH = 'GET_AUTH';

export const get_users = () => {
  const request = axios.get('http://localhost:5000/app/get_users');
  return {
      type : GET_USERS,
      payload : request
  }
};

export const users_auth = (req) => {
      const request = axios.post('http://localhost:5000/app/user/auth',{
          email: req.txtUserName,
          password: req.txtPassword
      });
      return {
          type:GET_AUTH,
          payload:request
      }

};


export const add_user = (user) => {
    const request = axios.post('http://localhost:5000/app/create_user',user);
    return {
        type: ADD_USER,
        payload:request
    }
};

export const delete_user =(id) => {

    return {
        type: DELETE_USER,
        payload:id
    }
};

export const update_user = (id,user_data) => {

    return {
        type: UPDATE_USER,
        payload: {id:id,data:user_data}
    }
};
