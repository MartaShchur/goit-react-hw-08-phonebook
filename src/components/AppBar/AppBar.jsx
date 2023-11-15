import { useAuth } from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LoggedNav/LoggedNav';
// import AuthNav from 'components/AuthNav/AuthNav';

import { Header } from './AppBar.styled';


const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </Header>
  );
};


export default AppBar;