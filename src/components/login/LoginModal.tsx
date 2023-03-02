import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import { TFunction } from 'i18next';
import LoginForm from './LoginForm';

const LoginModal = ({
	open,
	onClose,
	t,
}: {
	open: boolean;
	onClose: Function;
	t: TFunction<'translation', undefined, 'translation'>;
}) => {
	return (
		<Dialog onClose={() => onClose()} open={open} fullWidth>
			<DialogTitle>{t('Login')}</DialogTitle>
			<DialogContent>
				<LoginForm onClose={onClose} t={t} />
			</DialogContent>
			<DialogActions>
				<Button onClick={() => onClose()}>Close</Button>
				<Button variant={'contained'} form={'login-form'} type='submit'>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LoginModal;
