<script>
	import { page } from '$app/stores';

	let pathName = '';
	const unsubscribe = page.subscribe((p) => {
		pathName = p.url.pathname;
	});

	const headerList = [
		{ name: 'Home', href: '/' },
		{ name: 'Profile Management', href: '/profilemanagement' },
		{ name: 'Data Search', href: '/datasearch' },
		{ name: 'Attach Monitoring', href: '/attackmonitoring' },
		{ name: 'Avatar Management', href: '/avatarmanagement' },
		{ name: 'Report', href: '/report' },
		{ name: 'Audit Trails', href: '/audittrails' }
	];
</script>

<header class="w-full fixed z-50 h-20 bg-black">
	<nav class="w-full h-full px-10 flex items-center justify-between">
		<div class="pl-36 w-full flex items-center gap-6 uppercase text-gray-400 text-[15px]">
			{#each headerList as header}
				<a href={header.href} class:is-active={pathName === header.href}>{header.name}</a>
			{/each}
		</div>
		<div class="w-1/6 px-5 py-4 flex justify-end items-center gap-4">
			<button class="relative">
				<img class="w-4 h-4" src="/img/icon/notification.svg" alt="notification" />
				<div
					class="w-3 h-3 bg-red-primary flex justify-center items-center absolute -top-1 -right-1 rounded-full text-8px"
				>
					3
				</div>
			</button>
			<button>
				<img class="w-4 h-4" src="/img/icon/settings.svg" alt="" />
			</button>
			<div class="w-10 h-10 bg-white rounded-full relative">
				<img src="/img/shared/userprofile.png" alt="user-profile" />
				<div class="absolute bottom-0 right-0 rounded-full bg-green-400 h-2 w-2" />
			</div>
		</div>
	</nav>
</header>

<style lang="postcss">
	.is-active {
		font-weight: 700;
		color: white;
	}
</style>
