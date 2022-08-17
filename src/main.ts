// @ts-ignore
import App from './App.svelte';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faPlus,
	faRocket
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faRocket,
	faPlus
)

const app = new App({
	target: document.body
});

export default app;