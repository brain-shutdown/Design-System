import React, { useState } from 'react';
import { darkTheme, globalStyles } from '../stitches.config';

// File Imports
import Input from './components/Input';
import ButtonType from './components/Button';

// Icon Imports
import { HiOutlineEnvelope } from 'react-icons/hi2';

function App() {
	const [email, setEmail] = useState('');
	// const [theme, setTheme] = React.useState('theme-default');

	// React.useEffect(() => {
	// 	console.log(document.body.classList);

	// 	document.body.classList.remove('theme-default', darkTheme);
	// 	document.body.classList.add(theme);
	// }, [theme]);

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const value = event.target.value;
		setEmail(value);
	}

	globalStyles();
	return (
		<>
			{/* <Button
				style={{ position: 'fixed', zIndex: 999, right: 15, top: 15 }}
				onClick={() => setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')}>
				Toggle theme
			</Button> */}
			<Button as='a' outlined variant='error'>
				Click me
			</Button>
			<div>
				<Input
					type='email'
					label='email'
					placeholder='Email Address'
					name='email'
					value={email}
					Icon={HiOutlineEnvelope}
					infoContent={'This is some content'}
					onChange={onChange}
					error
					errorMessage={'abc'}
					disabled
				/>
			</div>
		</>
	);
}

export default App;
