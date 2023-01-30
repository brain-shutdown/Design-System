import { FormEvent, useRef } from 'react';
import { globalStyles } from '../stitches.config';

// File Imports
import Input from './components/Input';

// Icon Imports
import { HiOutlineEnvelope } from 'react-icons/hi2';

function App() {
	const ref = useRef<HTMLInputElement>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(ref.current!.value);
	}

	globalStyles();
	return (
		<>
			<form onSubmit={handleSubmit}>
				<Input
					type='email'
					label='email'
					placeholder='Email Address'
					name='email'
					Icon={HiOutlineEnvelope}
					infoContent={'This is some content'}
					ref={ref}
					error
					errorMessage={'abc'}
				/>
			</form>
		</>
	);
}

export default App;
