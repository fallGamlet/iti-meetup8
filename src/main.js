import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Meetup #8'
	}
});

export default app;