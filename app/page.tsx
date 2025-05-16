import Link from "next/link"
import { ArrowRight, Code, User, Mail, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-purple-600 dark:text-purple-400">Divya</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
                MERN Stack Developer crafting engaging I specialize in building dynamic
                responsive Website
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span className="text-6xl"> <Image
                  src="/yo.jpg"
                  alt="Divudev"
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Building responsive web applications with modern frameworks and technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Creating full-stack applications with focus on user experience and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">About Me</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Passionate MERN stack developer with expertise in modern web technologies and tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            I specialize in MERN stack development with expertise in modern frameworks and tools.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "Mongoose",
              "Postman",
              "Git",
              "GitHub",
              "AI tools",
              "Figma",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full shadow-sm text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/about">
                Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-slate-200 dark:bg-slate-700">
                <img
                  src="\Screenshot 2025-05-16 152047.png"
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  A frontend e-commerce.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs">React</span>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-slate-200 dark:bg-slate-700">
                <img
                  src="\Screenshot 2025-05-16 152207.png"
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coffe cafe</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  coffe cafe addto card page.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs">Type.script</span>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-purple-50 dark:bg-purple-900/10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" /> Get In Touch
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
