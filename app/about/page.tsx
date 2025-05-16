import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "Mongoose", category: "database" },
    { name: "Postman", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "AI tools", category: "tools" },
    { name: "Figma", category: "design" },
  ]

  return (
    <main className="flex flex-col min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        {/* Profile Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span className="text-6xl"><img src={"\Divu.jpg"}></img></span>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Divya</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">MERN Stack Developer</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Hello! I'm Divya, a passionate MERN stack developer with a love for creating elegant, efficient, and
                  user-friendly web applications. With a strong foundation in both front-end and back-end technologies,
                  I enjoy bringing ideas to life through code.
                </p>
                <p>
                  My journey in web development began with a curiosity about how websites work, which quickly evolved
                  into a passion for building them myself. I'm constantly learning and exploring new technologies to
                  enhance my skills and stay current with industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "frontend")
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "backend")
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Database & Data</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "database")
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Tools & Utilities</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "tools" || skill.category === "design")
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <div className="space-y-8">
            <div className="border-l-2 border-purple-200 dark:border-purple-800 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-medium">MERN Stack Training & Internship</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                Excellence Technology | July 28, 2024 - February 2024
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                <li>Completed 6-month MERN stack training program</li>
                <li>Participated in 1-month internship</li>
                <li>Developed full-stack web applications</li>
                <li>Collaborated with team members on various projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>

          <div className="border-l-2 border-purple-200 dark:border-purple-800 pl-6 relative">
            <div className="absolute w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-medium">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2024</p>
            <p className="text-slate-600 dark:text-slate-400">
              Focused on computer science fundamentals, programming, and web development.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
