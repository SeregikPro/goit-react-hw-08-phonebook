import Box from 'components/Box';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';
import { useAuth } from 'hooks';
import Avatar from 'react-avatar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserName } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  // const avatar = defaultAvatar;

  return (
    <Box display="flex" alignItems="center">
      <Avatar name={user.name} size={40} round={10} textSizeRatio={2.5} />
      <UserName>{user.email}</UserName>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button> */}

      <IconButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        aria-label="logout"
        // size="small"
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
