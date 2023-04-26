import { Figtree } from "next/font/google";

const customFont = Figtree({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`${customFont.className} `}>
			<div className="flex flex-row min-h-screen justify-center items-center p-4">
				<div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 shadow-cyan-500/50">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Welcome!</h5>
					</a>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Hi! I&apos;m Jedd Niñonuevo, I&apos;m a Full Stack Developer, Video Editor and VFX Editor from Olongapo City Philippines.
					</p>
					<h5 className="font-bold text-gray-900 dark:text-white mt-3 mb-0">I&apos;m currently building this site, come back later.</h5>
				</div>
			</div>
		</main>
	);
}
