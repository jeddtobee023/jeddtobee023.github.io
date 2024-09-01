<script lang="ts">
	import { Alert, Avatar, Button, Card } from "flowbite-svelte";
	import { Fa } from "svelte-fa";
	import { faVimeo, faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
	import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

	const socials = [
		{ site: "https://github.com/jeddtobee023", text: "GitHub", icon: faGithub },
		{ site: "https://www.facebook.com/jeddtobee023", text: "Facebook", icon: faFacebook },
		{ site: "https://www.instagram.com/jeddisafilmmaker", text: "Instagram", icon: faInstagram },
		{ site: "https://vimeo.com/jeddtobee023/videos", text: "Vimeo", icon: faVimeo },
		{ site: "https://www.linkedin.com/in/jedidiah-ninonuevo-317693199/3", text: "LinkedIn", icon: faLinkedin },
	];
</script>

<main class="min-h-screen min-w-screen flex flex-col gap-4 p-6 justify-center items-center bg-slate-800 dark:bg-gray-300">
	<Card size="md" class="gap-4 shadow-lg shadow-primary-500/50">
		<h5 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome!</h5>

		<div class="flex flex-wrap gap-4 items-center">
			<Avatar src="jedd.jpg" size="lg" alt="Jedd's berry much professional" border class="mx-auto w-24 h-auto" />
			<p class="flex-1">Hi! I'm Jedd Niñonuevo, I'm a Full Stack Developer, Video Editor and VFX Editor from Olongapo City, Philippines.</p>
		</div>

		<Alert color="red">
			<Fa icon={faInfoCircle} slot="icon" size="lg"/>
			<p>I'm currently building this site, check my socials for the meantime.</p>
		</Alert>

		{#each socials as link}
			<Button type="button" href={link.site} target="_blank" color="alternative"><Fa icon={link.icon} class="mr-2" size="lg" />{link.text}</Button>
		{/each}
	</Card>
</main>
