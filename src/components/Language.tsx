import { Box } from '@mui/material';
import { TFunction } from 'i18next';
import '../styles/language.scss';

const Language = ({
	handleClick,
	t,
}: {
	handleClick: Function;
	t: TFunction<'translation', undefined, 'translation'>;
}) => {
	return (
		<Box
			className='language'
			onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e)}>
			{t('Language')}
		</Box>
	);
};

export default Language;
