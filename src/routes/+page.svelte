<script>
	let is_dark_mode = $state(false);

	$effect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			is_dark_mode ? 'nes-theme-dark' : 'nes-theme',
		);
	});

	const toggle_dark_mode = () => {
		is_dark_mode = !is_dark_mode;
	};
</script>

<h1 class="mb-4 text-4xl font-bold">NES.css Theme in daisyUI</h1>

<button class="btn mb-4" onclick={toggle_dark_mode}>
	Toggle {is_dark_mode ? 'Light' : 'Dark'} Mode
</button>

<div class="space-y-4">
	<div>
		<h2 class="mb-2 text-2xl">Buttons</h2>
		<div class="space-x-2">
			<button class="btn">Default</button>
			<button class="btn btn-primary">Primary</button>
			<button class="btn btn-success">Success</button>
			<button class="btn btn-warning">Warning</button>
			<button class="btn btn-error">Error</button>
			<button class="btn" disabled>Disabled</button>
		</div>
	</div>

	<div>
		<h2 class="mb-2 text-2xl">Input</h2>
		<input
			type="text"
			placeholder="Type here"
			class="input w-full max-w-xs"
		/>
	</div>

	<div>
		<h2 class="mb-2 text-2xl">Containers</h2>
		<div class="container with-title">
			<p class="title">Default Container</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
		</div>
		<div class="container with-title is-centered">
			<p class="title">Container.is-centered</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
		</div>
		<div class="container with-title is-right">
			<p class="title">Container.is-right</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
		</div>
		<div class="container with-title is-dark">
			<p class="title">Container.is-dark</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
		</div>
		<div class="container is-rounded">
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
		</div>
		<div class="container is-rounded is-dark">
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
		</div>
		<div class="container is-rounded with-title">
			<p class="title">Rounded with title</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
		</div>
		<div class="container is-rounded is-dark with-title">
			<p class="title">Rounded dark with title</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
		</div>
	</div>
</div>
