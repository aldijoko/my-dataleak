<script>
	export let title = '';
	export let link = '';
</script>

<div class="px-2 flex gap-1 py-1">
	<div class="w-2/5">
		<p class="text-xs">{title}</p>
	</div>

	<div class="w-full border-l-2 border-gray-400 pl-2">
		<p class="text-xs text-gray-400">{link}</p>
	</div>
</div>
