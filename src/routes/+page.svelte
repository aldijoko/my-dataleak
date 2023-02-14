<script>
	import LastestCard from '$lib/component/Shared/LastestCard.svelte';
	import TopAvatar from '$lib/component/Shared/TopAvatar.svelte';
	import Weekly from '$lib/component/Shared/Weekly.svelte';

	const weeklyData = [
		{ title: '[DomainDataLeak]', customeText: 'text-active-warning', valueComment: '759' },
		{ title: '[DomainDataLeak]', customeText: 'text-red-primary', valueComment: '547' },
		{ title: '[DomainDataLeak]', customeText: 'text-pink-300', valueComment: '352' }
	];

	const topAvatar = [
		{
			username: 'ZackXiX65',
			bgColor: 'bg-red-secondary',
			value: '366'
		},
		{
			username: 'ecoMock',
			bgColor: 'bg-blue-secondary',
			value: '205'
		},
		{
			username: 'national297freedom',
			bgColor: 'bg-brown-dark',
			value: '194'
		},
		{
			username: 'Bicarakebuka11',
			bgColor: 'bg-blue-dark',
			value: '76'
		},
		{
			username: 'Trackersedap',
			bgColor: 'bg-violet-dark',
			value: '22'
		}
	];

	const dataLastest = [
		{
			title: 'Goverment',
			link: 'http://www.disdukcapil.com/datasource...'
		},
		{
			title: 'Goverment',
			link: 'http://www.dirjenpajak.com/datasource...'
		},
		{
			title: 'Fintech National',
			link: 'http://www.bayaronlen.com/datasource...'
		},
		{
			title: 'Marketplace',
			link: 'http://www.marketplace1.com/datasource...'
		},
		{
			title: 'Marketplace',
			link: 'http://www.marketplace2.com/datasource...'
		}
	];
</script>

<section class="w-full bg-home" style="min-height: calc( 100vh - 80px ) ;">
	<div class="w-full flex px-10 py-5">
		<div class="p-5 w-3/5 flex items-center gap-5">
			<div class="w-24 h-24 border-none rounded-full bg-white">
				<img class="w-full object-cover" src="/img/shared/userprofile.png" alt="user-profile" />
			</div>
			<div>
				<h2 class="text-3xl mb-1">Pengguna0123</h2>
				<p class="text-sm text-gray-400">Lastets login at 16 Oct 2022 10:24 PM</p>
				<div class="flex gap-2 mt-3 mb-6">
					<div class="rounded-2xl border px-3 py-1 flex gap-2 items-center justify-center">
						<div class="h-2 w-2 rounded-full bg-green-400" />
						<p class="text-xs text-gray-400">bot account-1</p>
					</div>
					<div class="rounded-2xl border px-3 py-1 flex gap-2 items-center justify-center">
						<div class="h-2 w-2 rounded-full bg-gray-400" />
						<p class="text-xs text-gray-400">bot account-2</p>
					</div>
					<div class="rounded-2xl border px-3 py-1 flex gap-2 items-center justify-center">
						<div class="h-2 w-2 rounded-full bg-gray-400" />
						<p class="text-xs text-gray-400">bot account-3</p>
					</div>
				</div>
				<button>
					<div class="bg-blue-primary py-1 px-4 rounded-2xl flex gap-5">
						Edit User
						<img src="/img/icon/next.svg" alt="next" />
					</div>
				</button>
			</div>
		</div>
		<div class="p-5 w-2/5 flex justify-center relative">
			<div class="w-full h-12">
				<input
					class="w-4/5 h-full py-2 pl-5 pr-16 bg-black text-sm rounded-full"
					placeholder="keyword search here"
					type="text"
				/>
			</div>

			<div
				class="absolute right-10 w-1/4 h-12 py-2 px-5 bg-black border border-blue-primary rounded-full flex items-center"
			>
				<input class="w-full h-full text-sm" type="submit" value="Search" />
				<img src="/img/icon/search.svg" alt="search" />
			</div>
		</div>
	</div>
	<div class="w-full flex px-10 py-5">
		<div class="w-3/5 flex">
			<div class="px-8 w-full">
				<div class="flex justify-between ">
					<h3 class="text-lg">Today Top Topic</h3>
					<img src="/img/icon/hot-topic.svg" alt="hot-topic" />
				</div>
				<div class="w-full border-b-2 pb-2 pt-2">
					<div class="flex mb-1">
						<div class="w-full">
							<h4 class="text-sm">Title Post Lorem Ipsum</h4>
							<p class="text-10px text-gray-400">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet metus augue.
								Nullam dignissim molestie ante.
							</p>
						</div>
						<div class="px-5 w-1/5">
							<span class="text-blue-primary text-lg">759</span>
							<p class="text-10px">Comments</p>
						</div>
						<div class="px-5 w-1/5">
							<span class="text-blue-primary text-lg">934</span>
							<p class="text-10px">Views</p>
						</div>
					</div>
					<div class="w-full flex gap-1 items-center">
						<div class="w-2/5 flex items-center gap-2">
							<p class="text-8px">post by</p>
							<div class="px-2 bg-brown-dark rounded-full text-8px">
								<p>national297freedom</p>
							</div>
						</div>
						<div class="w-2/5 flex items-center gap-1 px-1">
							<div class="w-full flex relative">
								<div class="w-4 h-4 bg-white rounded-full">
									<img class="w-full" src="/img/shared/figure4.png" alt="imageuser" />
								</div>
								<div class="absolute top-0 right-9 w-4 h-4 bg-white rounded-full">
									<img class="w-full" src="/img/shared/figure3.png" alt="imageuser" />
								</div>
								<div class="absolute top-0 right-6 w-4 h-4 bg-white rounded-full">
									<img class="w-full" src="/img/shared/figure2.png" alt="imageuser" />
								</div>
								<div class="absolute top-0 right-3 w-4 h-4 bg-white rounded-full">
									<img class="w-full" src="/img/shared/figure1.png" alt="imageuser" />
								</div>
							</div>
							<div class="w-full text-[7px]">
								<p>34 figure mention</p>
							</div>
						</div>
						<div class="w-1/5">
							<a
								href=""
								class="w-full flex items-center gap-1 text-blue-primary text-9px underline"
							>
								Go Details <img class="w-2" src="/img/icon/next.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
				<div class="w-full border-b-2 pb-2 pt-2">
					<div class="flex mb-1">
						<div class="w-full">
							<h4 class="text-sm">Title Post Lorem Ipsum</h4>
							<p class="text-10px text-gray-400">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet metus augue.
								Nullam dignissim molestie ante.
							</p>
						</div>
						<div class="px-5 w-1/5">
							<span class="text-blue-primary text-lg">636</span>
							<p class="text-10px">Comments</p>
						</div>
						<div class="px-5 w-1/5">
							<span class="text-blue-primary text-lg">436</span>
							<p class="text-10px">Views</p>
						</div>
					</div>
					<div class="w-full flex gap-1 items-center">
						<div class="w-2/5 flex items-center gap-2">
							<p class="text-8px">post by</p>
							<div class="px-2 bg-red-secondary rounded-full text-8px">
								<p>national297freedom</p>
							</div>
						</div>
						<div class="w-2/5 flex items-center gap-1 px-1">
							<div class="w-full flex relative">
								<div class="w-4 h-4 bg-white rounded-full">
									<img class="w-full" src="/img/shared/figure4.png" alt="imageuser" />
								</div>
								<div class="absolute top-0 right-9 w-4 h-4 bg-white rounded-full">
									<img class="w-full" src="/img/shared/figure3.png" alt="imageuser" />
								</div>
								<div class="absolute top-0 right-6 w-4 h-4 bg-white rounded-full">
									<img class="w-full" src="/img/shared/figure2.png" alt="imageuser" />
								</div>
								<div class="absolute top-0 right-3 w-4 h-4 bg-white rounded-full">
									<img class="w-full" src="/img/shared/figure1.png" alt="imageuser" />
								</div>
							</div>
							<div class="w-full text-[7px]">
								<p>34 figure mention</p>
							</div>
						</div>
						<div class="w-1/5">
							<a
								href=""
								class="w-full flex items-center gap-1 text-blue-primary text-9px underline"
							>
								Go Details <img class="w-2" src="/img/icon/next.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="px-2 w-full">
				<div class="flex justify-between mb-3">
					<h3 class="text-lg">Weekly Top Data Leak</h3>
					<img src="/img/icon/topdataleak.svg" alt="top-dataleak" />
				</div>
				{#each weeklyData as weekly}
					<Weekly
						title={weekly.title}
						customText={weekly.customeText}
						valueComment={weekly.valueComment}
					/>
				{/each}
			</div>
		</div>
		<div class="w-2/5 flex justify-center items-center gap-5 p-5">
			<button>
				<div class="flex px-3 py-2 rounded-full border gap-1 border-blue-primary">
					<img src="/img/icon/link.svg" alt="link" />
					<span class="text-sm text-blue-primary">Visit Link</span>
				</div>
			</button>
			<button
				><div class="flex px-3 py-2 rounded-full border gap-1">
					<img src="/img/icon/download.svg" alt="download" />
					<span class="text-sm">Download</span>
				</div></button
			>
		</div>
	</div>
	<div class="w-full flex px-10 py-5">
		<div class="w-3/5 flex">
			<div class="px-8 w-full">
				<div class="flex justify-between">
					<h3 class="text-lg">Profile Monitoring</h3>
					<img src="/img/icon/profilemonitoring.svg" alt="profile-monitoring" />
				</div>
				<div class="w-full flex pt-5">
					<div>
						<button>
							<div
								class="h-8 flex items-center px-10 border border-gray-400 rounded-full text-xs mb-2"
							>
								ZackXiX65
							</div>
						</button>
						<p class="text-xs text-gray-400">During online on http://wwww.forum...</p>
					</div>
					<div class="ml-5 p-5 flex justify-end items-center">
						<a href="">
							<div
								class="flex items-center gap-2 text-xs text-blue-primary border-b-2 border-blue-primary"
							>
								<p>Go Details</p>
								<img src="/img/icon/next.svg" alt="next" />
							</div>
						</a>
					</div>
				</div>
				<div class="w-full flex pt-5">
					<div>
						<button>
							<div
								class="h-8 flex items-center px-10 border border-gray-400 rounded-full text-xs mb-2"
							>
								ZackXiX65
							</div>
						</button>
						<p class="text-xs text-gray-400">Lastest online 10 Oct 2022 10:11 PM</p>
					</div>
					<div class="ml-5 p-5 flex justify-end items-center">
						<a href="">
							<div
								class="flex items-center gap-2 text-xs text-blue-primary border-b-2 border-blue-primary"
							>
								<p>Go Details</p>
								<img src="/img/icon/next.svg" alt="next" />
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="px-2 w-full">
				<div class="flex justify-between mb-3">
					<h3 class="text-lg">Lastest Data Leak</h3>
					<img src="/img/icon/lastetsdataleak.svg" alt="lastest-dataleak" />
				</div>
				{#each dataLastest as lastest}
					<LastestCard title={lastest.title} link={lastest.link} />
				{/each}
			</div>
		</div>
		<div class="w-2/5 flex px-5">
			<div class="w-1/2 px-2">
				<div class="flex justify-between mb-3">
					<h3 class="text-lg">Top Avatar Mention</h3>
					<img src="/img/icon/avatarmention.svg" alt="avatar-mention" />
				</div>
				{#each topAvatar as data}
					<TopAvatar bgColor={data.bgColor} username={data.username} value={data.value} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.bg-home {
		background-image: url('/img/shared/background.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
