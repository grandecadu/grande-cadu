import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default async function Home() {
  return (
    <div className="md:grid md:grid-rows-[20px_1fr_20px] items-center justify-items-center h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col md:flex-row gap-4 md:row-start-2 items-center sm:items-start">
        <div className="h-full flex items-center justify-center">
          <Avatar className="w-[200px] h-[200px]">
            <AvatarImage src="https://github.com/grandecadu.png" />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex p-4 flex-col gap-2">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-2">
              Carlos Santos
              <MdVerified className="inline text-blue-500" />
            </h1>
            <h2 className="text-base">@grandecadu</h2>
          </div>
          <div>
            <p className="text-sm md:text-base max-w-[300px]">
              I&apos;m a software developer with 4+ years of experience.
            </p>
            <p className="text-sm md:text-base max-w-[250px]">Based in 🇧🇷</p>
            <p className="text-sm md:text-base max-w-[250px]">Visited 🇵🇾🇦🇷🇩🇪🇳🇱🇫🇷</p>
            <div className="flex gap-4 mt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href="https://www.linkedin.com/in/carloseorsantos/">
                      <FaLinkedin size={32} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href="https://github.com/grandecadu">
                      <FaGithubSquare size={32} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Github</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href="https://www.instagram.com/grandecadu">
                      <FaInstagramSquare size={32} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-10 md:row-start-3 flex gap-6 items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <HiHome aria-hidden className="text-[#666]" size={20} />
          Home
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/projects"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit my projects
        </Link>
      </footer>
    </div>
  );
}
