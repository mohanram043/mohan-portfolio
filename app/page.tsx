'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Mohan Ram</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">Experience</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">Projects</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Mohan Ram
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Passionate leader driving innovation in web development, cloud infrastructure, and international marketing.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/MohanRam_resume_Sep2024.pdf">Download Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Experience & Skills</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>DigitalOcean</CardTitle>
                  <CardDescription>Head of Developer Community (2024 - Present)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Leading initiatives to support and expand the global developer community, fostering innovation and collaboration.</p>
                  <ul className="list-disc pl-4 space-y-2 mt-4">
                    <li>Previously led Global Field & Partner Marketing, achieving $2M in sales pipeline within H1 2023.</li>
                    <li>Scaled the Hatch Startup Program, supporting over 5,000 startups globally.</li>
                    <li>Enhanced regional marketing efforts across AMER, EMEA, and APAC, driving revenue and brand growth.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>APAC Expansion</CardTitle>
                  <CardDescription>APAC Head of Sales & Go-to-Market Lead (2020 - 2021)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Expanded DigitalOcean’s presence in Southeast Asia and MENA, achieving $3M+ in first-year revenue.</li>
                    <li>Developed scalable sales processes and assembled a high-performing remote sales team.</li>
                    <li>Established partnerships with major technology and startup ecosystems.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Kyron Global</CardTitle>
                  <CardDescription>Senior Manager, Partnerships & Business Development (2015 - 2016)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Architected a Corporate Innovation program, engaging 180,000+ employees in a Fortune 500 company.</li>
                    <li>Forged strategic partnerships with Fortune 500 companies to drive collaborative innovation.</li>
                    <li>Developed startup engagement programs that facilitated enterprise innovation and digital transformation.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Key Projects</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Global Startup Program - Hatch</CardTitle>
                  <CardDescription>Designed and scaled DigitalOcean’s global startup program</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Transformed Hatch into a revenue-generating program, supporting over 5,000 startups worldwide, and strengthened global startup ecosystems through mentorship and resources.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Corporate Innovation Program</CardTitle>
                  <CardDescription>World’s largest intrapreneurship initiative</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>At Kyron Global, spearheaded the development of a Corporate Innovation program that engaged over 180,000 employees, driving a culture of innovation and positioning the company as an industry leader.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I am always open to new opportunities and collaboration. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/mram" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com/in/mohanram1" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://twitter.com/mohanram" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:mohan@digitalocean.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Mohan Ram. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
