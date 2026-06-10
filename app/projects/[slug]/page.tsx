import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  projectDetails,
  type ProjectDetail,
} from "@/lib/portfolio-projects";
import { ProjectDetailTemplate } from "@/components/project-detail-template";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio Project`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug) as ProjectDetail | undefined;

  if (!project) {
    notFound();
  }

  return <ProjectDetailTemplate project={project} />;
}
