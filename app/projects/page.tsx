import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A frontend e-commerce  product filtering, ",
      image: "/Screenshot 2025-05-16 152047.png",
      technologies: ["html","css","Javascript","React.js",],
      liveUrl: "https://sweet-profiterole-00323c.netlify.app/",
     
    },
    {
      id: 2,
      title: "Coffe Cafe",
      description:
        "Create with ai tool Loveable",
      image: "\Screenshot 2025-05-16 152207.png",
      technologies: ["React.js", "next.js" ],
      liveUrl: "https://aromatic-cafe-web.lovable.app/",
     
    },
    {
      id: 3,
      title: "To-do List",
      description:
        " create with ai tool vo",
      image: "\Screenshot 2025-05-16 180314.png",
      technologies: ["React.js", "next.js"],
      liveUrl: "https://v0-grocery-shop-todo-list-1xk8zlmh4.vercel.app/",
     
    },
    {
      id: 4,
      title: "Anime Wacting",
      description:
        "full Mern Stack project movie wesbite connection wuth data base",
      image: "\Screenshot 2025-05-16 182835.png",
      technologies: ["html","css","javscript","React.js", "Node.js","express", "MongoDB"],
      liveUrl: "https://remarkable-sunflower-353565.netlify.app/",
     
    },
    {
      id: 5,
      title: "E-commerace",
      description:
        "Create with ai tool",
      image: "\Screenshot 2025-05-16 183327.png",
      technologies: ["React.js","next.js"],
      liveUrl: "https://stalwart-crostata-6f4161.netlify.app/",
     
    },
   
  ]

  return (
    <main className="flex flex-col min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl">
          Here's a collection of my recent work. Each project represents different skills and technologies I've worked
          with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-2 py-1 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="px-2 py-1 text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-3 mt-4">
                  <Button asChild size="sm" variant="default">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </Link>
                  </Button>
                  {/* <Button asChild size="sm" variant="outline">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </Link>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
