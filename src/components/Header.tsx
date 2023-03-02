import { Button, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserDispatch } from '../redux/hooks';
import { clearUser } from '../redux/user';
import '../styles/header.scss';
import { User } from '../types';
import Language from './Language';
import LanguagePopper from './LanguagePopper';
import LoginModal from './login/LoginModal';
import Navbar from './Navbar';

const Header = ({ user }: { user: User | null }) => {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const { t } = useTranslation();
	const menuOpen = Boolean(anchorEl);
	const id = menuOpen ? 'user-popper' : undefined;

	const dispatch = useUserDispatch();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const handleClickOpen = (data: boolean) => {
		setOpen(data);
	};

	const logOut = () => {
		dispatch(clearUser());
	};

	return (
		<>
			<Box className='header'>
				<Toolbar>
					<Navbar user={user} />
					<Language handleClick={handleClick} t={t} />
					<Box width={'100%'} className='username'>
						<p>{user?.username}</p>
						<Button onClick={user ? logOut : () => handleClickOpen(true)}>
							{user ? t('Logout') : t('Login')}
						</Button>
					</Box>
				</Toolbar>
			</Box>
			<LoginModal
				t={t}
				open={open}
				onClose={() => {
					handleClickOpen(false);
				}}
			/>
			<LanguagePopper id={id} menuOpen={menuOpen} anchorEl={anchorEl} t={t} />
		</>
	);
};

export default Header;
