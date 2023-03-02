import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/news.scss';
import { Post } from '../../types';
import NewsList from '../NewsList';

const News = () => {
	const { t } = useTranslation();
	const [news, setNews] = useState<Post[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/users/${page}/posts`).then(
			async (res) => {
				const data = await res.json();
				setNews((prevState) => [...prevState, ...data]);
				setLoading(false);
			}
		);
	}, [page]);

	return (
		<Box>
			<h1>{t('News')}</h1>
			{loading ? (
				<AutorenewIcon className='icon spin' />
			) : (
				<Box className='news-content'>
					<NewsList news={news} setNews={setNews} />
					<Button
						variant='contained'
						onClick={() => setPage((prevPage) => prevPage + 1)}>
						{t('Load')}
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default News;
