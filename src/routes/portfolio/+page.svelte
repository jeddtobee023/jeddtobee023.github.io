<script lang="ts">
	import { Gallery } from "flowbite-svelte";

	const colImages1 = [
        
		{
			alt: "Full Stack Developer and Tech Lead for Project MADE",
			src: "portfolio/oolio-02.png",
		},
		{
			alt: "Full Stack Developer and Tech Lead for Project MADE",
			src: "portfolio/oolio-01.png",
		},
        {
			alt: "Full Stack Developer and UI / UX Designer for Fruit Cart PH (Freelance)",
			src: "portfolio/fruitcart-01.jpg",
		},
        
        {
			alt: "Full Stack Developer and UI / UX Designer for Fruit Cart PH (Freelance)",
			src: "portfolio/fruitcart-02.png",
		},
        
	];

	const colImages2 = [
		{
			alt: "Developed COVID-19 Vaccination ID System (Philippines' first QR Code-based Vaccination ID System)",
			src: "portfolio/cvis-01.png",
		},
		{
			alt: "Developed COVID-19 Vaccination ID System (Philippines' first QR Code-based Vaccination ID System)",
			src: "portfolio/cvis-02.png",
		},
        {
			alt: "Official Olongapo City Website (https://olongapocity.gov.ph - 2019 to 2021)",
			src: "portfolio/ocw-01.png",
		},
	];

	const colImages3 = [
        {
			alt: "Official Olongapo City Website (https://olongapocity.gov.ph - 2019 to 2021)",
			src: "portfolio/ocw-02.png",
		},
        {
			alt: "Victory Subic Creatives Training 2024",
			src: "portfolio/vs-creatives-01.jpg",
		},
		{
			alt: "Victory Subic Volunteer Weekend 2024",
			src: "portfolio/vs-creatives-02.jpg",
		},
		
	];
</script>

<h1 class="text-4xl">Portfolio</h1>
<p>Here are some of my works, professional, freelance and passion projects.</p>
<div class="w-full max-w-4xl">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 md:px-8 lg:p-0 lg:grid-cols-4">
        <div class="flex flex-col gap-4">
            {#each colImages1 as colImage}
            <div class="w-full h-fit overflow-hidden rounded-lg">
                <img src={colImage.src} alt={colImage.alt} class="w-full hover:scale-110 transition-transform duration-300" loading="lazy">
            </div>
            {/each}
        </div>
        <div class="flex flex-col gap-4">
            {#each colImages2 as colImage}
            <div class="w-full h-fit overflow-hidden rounded-lg">
                <img src={colImage.src} alt={colImage.alt} class="w-full hover:scale-110 transition-transform duration-300" loading="lazy">
            </div>
            {/each}
        </div>
        <div class="md:col-span-2 flex flex-col gap-4">
            {#each colImages3 as colImage}
                <div class="w-full h-fit overflow-hidden rounded-lg">
                <img src={colImage.src} alt={colImage.alt} class="w-full hover:scale-110 transition-transform duration-300" loading="lazy">
            </div>
            {/each}
        </div>
    </div>
</div>
