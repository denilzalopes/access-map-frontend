// hooks/useUser.js
import {useSelector, useDispatch} from 'react-redux';
import {login, logout} from '../redux/slices/userSlice';

export const useUser = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const loginUser = data => dispatch(login(data));
  const logoutUser = () => dispatch(logout());

  return {user, loginUser, logoutUser};
};
