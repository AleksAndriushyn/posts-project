import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types';

const Profile = ({ user }: { user: User | null }) => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	useEffect(() => {
		if (!user) {
			navigate('/alter-ego-task');
		}
	}, [navigate, user]);

	return (
		<Box>
			<h1>{t('Profile')}</h1>
			{t('Name')}: <b>{user?.username}</b>
		</Box>
	);
};

export default Profile;
