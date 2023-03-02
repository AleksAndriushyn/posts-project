import CloseIcon from '@mui/icons-material/Close';
import { Box, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import { Post } from '../types';

const NewsList = ({ news, setNews }: { news: Post[]; setNews: Function }) => {
	const onDelete = (postId: number) => {
		const filtered = news.filter((el) => el.id !== postId);
		setNews(filtered);
	};
	return (
		<List>
			{news.map((post: Post) => (
				<ListItem key={post.id}>
					<Box className='content'>
						<Tooltip title={post.title}>
							<b>{post.title.toUpperCase()}</b>
						</Tooltip>
						<CloseIcon className='icon' onClick={() => onDelete(post.id)} />
					</Box>
					<ListItemText>
						<Tooltip title={post.body}>
							<p>{post.body}</p>
						</Tooltip>
					</ListItemText>
				</ListItem>
			))}
		</List>
	);
};

export default NewsList;
