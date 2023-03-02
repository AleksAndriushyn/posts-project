import { TFunction } from 'i18next';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PASSWORD, USERNAME } from '../../constants';
import { useUserDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/user';
import '../../styles/login-form.scss';
import { User } from '../../types';
import CustomTextField from '../CustomTextField';

const LoginForm = ({
	onClose,
	t,
}: {
	onClose: Function;
	t: TFunction<'translation', undefined, 'translation'>;
}) => {
	const [data, setData] = useState<User | null>(null);
	const [errors, setErrors] = useState<any>({ username: '', password: '' });
	const dispatch = useUserDispatch();
	const navigate = useNavigate();

	const validateUser = () => {
		let errorMessage = '';
		if (data?.username !== USERNAME) {
			errorMessage = 'Wrong username!';
			setErrors((prevErrors: any) => ({
				...prevErrors,
				username: errorMessage,
			}));
			return false;
		} else if (data?.password !== PASSWORD) {
			errorMessage = 'Wrong password!';
			setErrors((prevErrors: any) => ({
				...prevErrors,
				password: errorMessage,
			}));
			return false;
		}
		return true;
	};

	const onSubmit = async (e: any) => {
		e.preventDefault();

		if (!validateUser()) {
			return;
		}

		dispatch(setUser(data as User));
		onClose();
		navigate('/profile');
	};

	useEffect(() => {
		setErrors({ username: '', password: '' });
	}, [data?.username, data?.password]);

	return (
		<form id='login-form' onSubmit={onSubmit}>
			<CustomTextField
				label={t('Username')}
				helperText={errors.username}
				onChange={(e) =>
					setData((prev: any) => ({ ...prev, username: e.target.value }))
				}
				error={!!errors.username}
			/>
			<CustomTextField
				label={t('Password')}
				helperText={errors.password}
				onChange={(e) =>
					setData((prev: any) => ({ ...prev, password: e.target.value }))
				}
				error={!!errors.password}
			/>
		</form>
	);
};

export default LoginForm;
