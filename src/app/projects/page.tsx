import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Bibliotech",
    description:
      "Aplicação web para gerenciar acervo de livros, clientes e emprestimos. Desenvolvido como projeto de conclusão do curso de Sistemas de Informação.",
    url: "https://bibliotech.free.nf/",
    imageUrl: "/projects/bibliotech.png",
    githubUrl: "https://github.com/gx-briel/Bibliotech",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#7D0DA6] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          PHP
        </span>
        <span className="rounded-full bg-[#C9837B] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Bootstrap
        </span>
        <span className="rounded-full bg-[#D5E359] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          JavaScript
        </span>
      </div>
    ),
  },
  {
    name: "Inovamed",
    description:
      "Site estático para projeto da faculdade, que visa levar conhecimento sobre a saúde pública para a população, voltad0 para o público de minha cidade.",
    url: "https://inovamed.vercel.app/",
    imageUrl: "/projects/inovamed.png",
    githubUrl: "https://github.com/gx-briel/inovamed",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#c97610] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Html
        </span>
        <span className="rounded-full bg-[#9510c9] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          CSS
        </span>
        <span className="rounded-full bg-gradient-to-r from-[#195209] to-[#998c2c] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none dark:ring-1 dark:ring-zinc-500">
          API - Maps
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={620}
        height={324}
        alt="Logo for css2wind website"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
