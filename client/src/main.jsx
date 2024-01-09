import ReactDOM from 'react-dom/client';
import './index.css';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
//import Error from './pages/Error.jsx'
import Home from './pages/Home';
import Login from './pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		//errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Login />,
			},
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);