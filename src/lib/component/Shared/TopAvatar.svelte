<script>
	export let bgColor = '';
	export let username = '';
	export let value = '';
</script>

<div class="flex justify-between items-center mb-2">
	<div class="px-3 py-1 rounded-full {bgColor} text-10px">{username}</div>
	<div class="flex gap-1 text-10px">
		<p>{value}+</p>
		<p>mention</p>
	</div>
</div>

<style lang="postcss">
</style>
