import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Main = () => {
	const { t } = useTranslation();
	return (
		<Box>
			<h1>{t('Main')}</h1>
		</Box>
	);
};

export default Main;
