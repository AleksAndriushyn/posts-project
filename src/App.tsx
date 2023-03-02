import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/pages/Main';
import News from './components/pages/News';
import Profile from './components/pages/Profile';
import { useUserSelector } from './redux/hooks';

function App() {
	const user = useUserSelector((state) => state.user.user);

	return (
		<div className='App'>
			<Header user={user} />
			<Routes>
				<Route path='/alter-ego-task' element={<Main />} />
				<Route path='alter-ego-task/news' element={<News />} />
				<Route
					path='alter-ego-task/profile'
					element={<Profile user={user} />}
				/>
			</Routes>
		</div>
	);
}

export default App;

