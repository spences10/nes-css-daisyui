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

<div class="space-y-8">
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
		<h2 class="mb-2 text-2xl">Inputs</h2>
		<div class="space-y-2">
			<input type="text" placeholder="Default" class="input w-full max-w-xs" />
			<input type="text" placeholder="Primary" class="input input-primary w-full max-w-xs" />
			<input type="text" placeholder="Success" class="input input-success w-full max-w-xs" />
			<input type="text" placeholder="Warning" class="input input-warning w-full max-w-xs" />
			<input type="text" placeholder="Error" class="input input-error w-full max-w-xs" />
			<input type="text" placeholder="Disabled" class="input w-full max-w-xs" disabled />
		</div>
	</div>

	<div>
		<h2 class="mb-2 text-2xl">Selects</h2>
		<div class="space-y-2">
			<select class="select w-full max-w-xs">
				<option disabled selected>Default</option>
				<option>Option 1</option>
				<option>Option 2</option>
			</select>
			<select class="select select-primary w-full max-w-xs">
				<option disabled selected>Primary</option>
				<option>Option 1</option>
				<option>Option 2</option>
			</select>
			<select class="select select-success w-full max-w-xs">
				<option disabled selected>Success</option>
				<option>Option 1</option>
				<option>Option 2</option>
			</select>
			<select class="select select-warning w-full max-w-xs">
				<option disabled selected>Warning</option>
				<option>Option 1</option>
				<option>Option 2</option>
			</select>
			<select class="select select-error w-full max-w-xs">
				<option disabled selected>Error</option>
				<option>Option 1</option>
				<option>Option 2</option>
			</select>
			<select class="select w-full max-w-xs" disabled>
				<option disabled selected>Disabled</option>
				<option>Option 1</option>
				<option>Option 2</option>
			</select>
		</div>
	</div>

	<div>
		<h2 class="mb-2 text-2xl">Checkboxes</h2>
		<div class="space-y-2">
			<label class="flex items-center space-x-2">
				<input type="checkbox" class="checkbox" />
				<span>Default</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="checkbox" class="checkbox checkbox-primary" />
				<span>Primary</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="checkbox" class="checkbox checkbox-success" />
				<span>Success</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="checkbox" class="checkbox checkbox-warning" />
				<span>Warning</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="checkbox" class="checkbox checkbox-error" />
				<span>Error</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="checkbox" class="checkbox" disabled />
				<span>Disabled</span>
			</label>
		</div>
	</div>

	<div>
		<h2 class="mb-2 text-2xl">Radios</h2>
		<div class="space-y-2">
			<label class="flex items-center space-x-2">
				<input type="radio" name="radio-default" class="radio" />
				<span>Default</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="radio" name="radio-primary" class="radio radio-primary" />
				<span>Primary</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="radio" name="radio-success" class="radio radio-success" />
				<span>Success</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="radio" name="radio-warning" class="radio radio-warning" />
				<span>Warning</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="radio" name="radio-error" class="radio radio-error" />
				<span>Error</span>
			</label>
			<label class="flex items-center space-x-2">
				<input type="radio" name="radio-disabled" class="radio" disabled />
				<span>Disabled</span>
			</label>
		</div>
	</div>
</div>
