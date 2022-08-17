<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Icon from "./components/Icon.svelte";
  import List from "./components/List.svelte";

  // import Experience from './components/Experience.svelte';
  // import { each } from 'svelte/internal';

  // const persons = [
  // 	{
  // 		name: 'nico',
  // 		age: 22
  // 	},
  // 	{
  // 		name: 'jedidja',
  // 		age: 22
  // 	}
  // ]
</script>

<Tailwindcss />
<main class="p-4 mx-auto text-center h-screen">
  <!-- <div class="space-y-4">
		<h1 class="uppercase text-6xl leading-normal text-svelte">Base svelte app</h1>
		<Icon name="rocket" classes="text-5xl text-svelte"/>
	</div> -->
  <!-- 
	{#each persons as person}
		<Experience {person}/>
	{/each} -->

  <div class="grid grid-cols-3 gap-8 h-2/3 w-2/3 mx-auto">
    <List title="To do" />
    <List title="In progress" />
    <List title="Done" />
  </div>
</main>
