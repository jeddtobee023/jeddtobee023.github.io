<script lang="ts">
	import { Fa } from "svelte-fa";
	import { faVimeo, faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

	const socials = [
		{ site: "https://github.com/jeddtobee023", text: "GitHub", icon: faGithub },
		{ site: "https://www.facebook.com/jeddtobee023", text: "Facebook", icon: faFacebook },
		{ site: "https://www.instagram.com/jeddisafilmmaker", text: "Instagram", icon: faInstagram },
		{ site: "https://vimeo.com/jeddtobee023/videos", text: "Vimeo", icon: faVimeo },
		{ site: "https://www.linkedin.com/in/jedidiah-ninonuevo-317693199/3", text: "LinkedIn", icon: faLinkedin },
        { site: "mailto:jedd.is.a.developer@gmail.com", text: "Email", icon: faEnvelope },
	];
</script>

<h1 class="text-4xl">Contact</h1>
<p>Follow me on my socials and you can contact me on my email as well.</p>
<div class="w-full max-w-sm grid grid-cols-2 md:grid-cols-3 gap-4">
    {#each socials as link}
        <a href={link.site} target="_blank" class="text-lg text-white"><Fa icon={link.icon} class="mr-2 inline" size="lg" />{link.text}</a>
    {/each}
</div>
