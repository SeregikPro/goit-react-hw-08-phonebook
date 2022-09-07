import Box from 'components/Box';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { useAuth } from 'hooks';

const styles = {
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <Box display="flex" alignItems="center">
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>
        Welcome, {user.name} || {user.email}
      </span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button>
    </Box>
  );
};

export default UserMenu;
