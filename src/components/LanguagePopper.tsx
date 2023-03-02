import { Box, MenuItem, MenuList, Popper } from '@mui/material';
import { TFunction } from 'i18next';
import i18n from '../i18n';
import { useLanguageDispatch, useLanguageSelector } from '../redux/hooks';
import { setLanguage } from '../redux/language';
import '../styles/popper.scss';

const LanguagePopper = ({
	id,
	menuOpen,
	anchorEl,
	t,
}: {
	id: any;
	menuOpen: boolean;
	anchorEl: null | HTMLElement;
	t: TFunction<'translation', undefined, 'translation'>;
}) => {
	const language = useLanguageSelector((state) => state.language.language);
	const dispatch = useLanguageDispatch();

	const changeLanguage = (lng: any) => {
		i18n.changeLanguage(lng);
		dispatch(setLanguage(lng));
	};

	return (
		<Popper id={id} open={menuOpen} anchorEl={anchorEl}>
			<Box
				className='popper-content'
				sx={{
					border: 1,
					bgcolor: 'background.paper',
				}}>
				<MenuList>
					<MenuItem
						disabled={i18n.language === 'en' ?? language === 'en'}
						onClick={() => {
							changeLanguage('en');
						}}>
						{t('English')}
					</MenuItem>
					<MenuItem
						disabled={language === 'ua'}
						onClick={() => {
							changeLanguage('ua');
						}}>
						{t('Ukrainian')}
					</MenuItem>
				</MenuList>
			</Box>
		</Popper>
	);
};

export default LanguagePopper;
