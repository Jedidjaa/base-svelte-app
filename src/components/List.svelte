<script>
import Icon from "./Icon.svelte";
export let title;
</script>

<div class="h-full border-2 border-pink-900 shadow flex justify-center rounded py-4">
    <div class="text-4xl text-pink-600 font-bold space-y-8">
        <h1>{title}</h1>
        <button class="rounded-full shadow h-16 w-16 bg-pink-100"><Icon name="plus"/></button>
    </div>
</div>