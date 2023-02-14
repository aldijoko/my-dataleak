<script>
	import '../app.css';
	import Header from '$lib/component/Header/index.svelte';
</script>

<div class="w-full">
	<Header />
	<div class="w-full pt-20">
		<slot />
	</div>
</div>
