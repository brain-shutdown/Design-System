import { DecoratorFn } from '@storybook/react';
import { darkTheme, globalStyles } from '../stitches.config';
import React from 'react';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const withTheme: DecoratorFn = (StoryFn, context) => {
	// Get the active theme value from the global context
	const theme = context.globals.theme;
	const storyTheme = theme === 'dark' ? darkTheme : 'theme-default';
	document.body.classList.remove('theme-default', darkTheme);
	document.body.classList.add(storyTheme);

	// Change background color in Docs Page
	const docsStory = Array.from(document.getElementsByClassName('docs-story')) as HTMLElement[];
	docsStory.forEach((element) => {
		if (theme === 'dark') {
			element.style.backgroundColor = darkTheme.colors.background.value;
		} else {
			element.style.backgroundColor = 'white';
		}
	});

	// Apply global styles and return Storybook Component
	return (
		<>
			{globalStyles()}
			<StoryFn />
		</>
	);
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			items: [
				{ value: 'light', icon: 'circlehollow', title: 'light' },
				{ value: 'dark', icon: 'circle', title: 'dark' },
			],
			// Property that specifies if the name of the item will be displayed
			showName: true,
		},
	},
};

export const decorators = [withTheme];
