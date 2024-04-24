import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import findJobApi from '../api/findJob';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const signup =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await findJobApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});

      navigate('MainTab');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };

const signin =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await findJobApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('MainTab');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup},
  {token: null, errorMessage: ''},
);
