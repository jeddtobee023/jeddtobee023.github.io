import { faFacebook, faGithub, faInstagram, faVimeo, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import { Figtree } from "next/font/google";
import Image from "next/image";

const customFont = Figtree({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`${customFont.className}`}>
			<div className="flex flex-row min-h-screen justify-center items-center p-4">
				<div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 shadow-cyan-500/50">
					<h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Welcome!</h5>

					<div className="flex flex-row mb-3 gap-3 items-center">
						<Image src="/jedd.jpg" alt="Jedd Niñonuevo" width={100} height={100} className=" border-2 p-1 border-gray-200 rounded-full" />
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Hi! I&apos;m Jedd Niñonuevo, I&apos;m a Full Stack Developer, Video Editor and VFX Editor from Olongapo City, Philippines.
						</p>
					</div>

					<h5 className="font-bold text-gray-900 dark:text-white mb-3">
						I&apos;m currently building this site, check my socials for the meantime:
					</h5>
					<div className="flex flex-col gap-3">
						<Button
							href="https://github.com/jeddtobee023"
							color="light"
							className="focus:ring-sky-200 focus:text-white focus:border-sky-200 focus:bg-sky-600 hover:shadow hover:shadow-cyan-500 transition-shadow"
						>
							<FontAwesomeIcon icon={faGithub} className="mr-2" size="lg" />
							Github
						</Button>
						<Button
							href="https://www.facebook.com/jeddtobee023"
							color="light"
							className="focus:ring-sky-200 focus:text-white focus:border-sky-200 focus:bg-sky-600 hover:shadow hover:shadow-cyan-500 transition-shadow"
						>
							<FontAwesomeIcon icon={faFacebook} className="mr-2" size="lg" />
							Facebook
						</Button>
						<Button
							href="https://www.instagram.com/jeddisafilmmaker"
							color="light"
							className="focus:ring-sky-200 focus:text-white focus:border-sky-200 focus:bg-sky-600 hover:shadow hover:shadow-cyan-500 transition-shadow"
						>
							<FontAwesomeIcon icon={faInstagram} className="mr-2" size="lg" />
							Instagram
						</Button>
						<Button
							href="https://vimeo.com/jeddtobee023/videos"
							color="light"
							className="focus:ring-sky-200 focus:text-white focus:border-sky-200 focus:bg-sky-600 hover:shadow hover:shadow-cyan-500 transition-shadow"
						>
							<FontAwesomeIcon icon={faVimeo} className="mr-2" size="lg" />
							Vimeo
						</Button>
						<Button
							href="https://www.linkedin.com/in/jedidiah-ninonuevo-317693199/"
							color="light"
							className="focus:ring-sky-200 focus:text-white focus:border-sky-200 focus:bg-sky-600 hover:shadow hover:shadow-cyan-500 transition-shadow"
						>
							<FontAwesomeIcon icon={faLinkedin} className="mr-2" size="lg" />
							Linkedin
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
