import { useState, useEffect } from 'react';

const App = () => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		async function getGreeting() {
			try {
				console.log(import.meta.env.VITE_FETCH_URL + '/api/hello');
				setGreeting('World!');
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Hello {greeting}!</h1>
		</main>
	);
};

export default App;
