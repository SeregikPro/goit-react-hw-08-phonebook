import Box from 'components/Box';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { useAuth } from 'hooks';
import Avatar from 'react-avatar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserName } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <Avatar name={user.name} size={40} round={true} textSizeRatio={2.5} />
      <UserName>{user.email}</UserName>

      <IconButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        aria-label="logout"
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
