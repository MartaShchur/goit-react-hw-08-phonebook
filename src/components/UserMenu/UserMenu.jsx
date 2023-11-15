import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'components/hooks/useAuth';
import {
  LogOutBtn,
  UserAvatar,
  UserEmail,
  UserName,
  UserNavigarion,
  UserWrapper,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavigarion>
      <UserWrapper>
        <div>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </div>
        <UserAvatar></UserAvatar>
      </UserWrapper>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOutBtn>
    </UserNavigarion>
  );
};

export default UserMenu;