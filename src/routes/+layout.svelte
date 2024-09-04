<script>
	import "../app.css";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen min-w-screen flex flex-col">
	<div class="flex gap-4 items-center justify-end bg-black text-gray-100 p-8">
		<a href="/" class="mr-auto font-bold">Jedd Niñonuevo</a>
		<a href="/about">About</a>
		<a href="/portfolio">Portfolio</a>
		<a href="/contact">Contact</a>
	</div>
	<main class="flex-1 p-8 bg-black flex flex-col gap-4 justify-center items-center text-white">
		<slot></slot>
	</main>
</div>
