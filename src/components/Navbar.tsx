import { List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import { User } from '../types';

const Navbar = ({ user }: { user: User | null }) => {
	const { t } = useTranslation();

	const menus = [
		{ name: t('Main'), link: '/' },
		{ name: t('News'), link: '/news' },
		{ name: t('Profile'), link: '/profile' },
	];

	return (
		<List className='nav-list'>
			{menus.map((menu) => (
				<ListItem key={menu.name}>
					<Link className='link' to={menu.link}>
						{menu.name}
					</Link>
				</ListItem>
			))}
		</List>
	);
};

export default Navbar;
