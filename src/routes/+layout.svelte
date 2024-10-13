<script>
	import '../app.pcss';

  let { data, children } = $props()
</script>

<main class="container mx-auto max-w-6xl flex-grow px-4">
	{@render children()}
</main>
