/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ig3nPy3wcim
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="w-full bg-primary py-6 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <Link href="#" className="text-primary-foreground" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Student Led Marketing Agency</span>
          </Link>
          <Button variant="outline" className="text-primary-foreground">
            Speak to Our Team
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Student Led Marketing Agency
              </h1>
              <p className="text-muted-foreground md:text-xl">
                We help businesses and organizations create enticing websites
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[300px] w-[300px] animate-spin-slow rounded-full bg-gradient-to-r from-primary to-primary/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[250px] w-[250px] animate-spin-slow rounded-full bg-gradient-to-r from-primary/50 to-primary" />
              </div>
              <div className="relative z-10 flex h-[400px] w-full items-center justify-center">
                <div className="h-[200px] w-[200px] rounded-full bg-primary/10 p-4">
                  <div className="h-full w-full rounded-full bg-primary/20 p-4">
                    <div className="h-full w-full rounded-full bg-primary/30 p-4">
                      <div className="h-full w-full rounded-full bg-primary/40 p-4">
                        <div className="h-full w-full rounded-full bg-primary/50 p-4">
                          <div className="h-full w-full rounded-full bg-primary/60 p-4">
                            <div className="h-full w-full rounded-full bg-primary/70 p-4">
                              <div className="h-full w-full rounded-full bg-primary/80 p-4">
                                <div className="h-full w-full rounded-full bg-primary/90 p-4">
                                  <div className="h-full w-full rounded-full bg-primary" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-background p-4 shadow">
                  <h3 className="text-2xl font-bold">$2.5M+</h3>
                  <p className="text-muted-foreground">Total Revenue Created</p>
                </div>
                <div className="rounded-lg bg-background p-4 shadow">
                  <h3 className="text-2xl font-bold">250+</h3>
                  <p className="text-muted-foreground">Clients Helped</p>
                </div>
                <div className="rounded-lg bg-background p-4 shadow">
                  <h3 className="text-2xl font-bold">100M+</h3>
                  <p className="text-muted-foreground">Media Impressions</p>
                </div>
                <div className="rounded-lg bg-background p-4 shadow">
                  <h3 className="text-2xl font-bold">5</h3>
                  <p className="text-muted-foreground">Services</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="text-muted-foreground md:text-xl">
                We are a student-led marketing agency that specializes in creating engaging and effective websites for
                businesses and organizations. Our team of talented designers, developers, and strategists work closely
                with our clients to understand their unique needs and goals, and then craft custom solutions that help
                them stand out in the digital landscape.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <Carousel opts={{ align: "start" }} orientation="horizontal" className="w-full max-w-4xl">
                <CarouselContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <CarouselItem>
                    <Card className="h-full w-full">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                        <GlobeIcon className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-semibold">Web Design</h3>
                        <p className="text-muted-foreground">
                          Crafting visually stunning and user-friendly websites that captivate your audience.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="h-full w-full">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                        <MegaphoneIcon className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-semibold">Digital Marketing</h3>
                        <p className="text-muted-foreground">
                          Developing and executing targeted digital marketing strategies to drive growth and engagement.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="h-full w-full">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                        <BriefcaseIcon className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-semibold">Branding</h3>
                        <p className="text-muted-foreground">
                          Crafting unique and memorable brand identities that resonate with your target audience.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="h-full w-full">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                        <CodeIcon className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-semibold">Web Development</h3>
                        <p className="text-muted-foreground">
                          Building custom, high-performing websites and web applications tailored to your needs.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="h-full w-full">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                        <InfoIcon className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-semibold">Analytics</h3>
                        <p className="text-muted-foreground">
                          Providing in-depth data analysis and insights to optimize your online presence and
                          performance.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="h-full w-full">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                        <HeadphonesIcon className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-semibold">Social Media</h3>
                        <p className="text-muted-foreground">
                          Crafting engaging social media strategies and content to connect with your audience.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card className="h-full w-full">
                  <CardContent className="flex flex-col items-start gap-4 p-6">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-semibold">John Doe</h4>
                        <p className="text-muted-foreground">CEO, Acme Inc.</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The Student Led Marketing Agency has been an invaluable\n partner in helping us create a stunning
                      website that\n perfectly represents our brand. Their team's creativity\n and attention to detail
                      are unparalleled."
                    </p>
                  </CardContent>
                </Card>
                <Card className="h-full w-full">
                  <CardContent className="flex flex-col items-start gap-4 p-6">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-semibold">Jane Smith</h4>
                        <p className="text-muted-foreground">Marketing Manager, XYZ Corp.</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Working with the Student Led Marketing Agency has been a\n game-changer for our business. Their
                      digital marketing\n expertise has helped us reach new heights and connect\n with our target
                      audience in a more meaningful way."
                    </p>
                  </CardContent>
                </Card>
                <Card className="h-full w-full">
                  <CardContent className="flex flex-col items-start gap-4 p-6">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-semibold">Michael Johnson</h4>
                        <p className="text-muted-foreground">Director of Marketing, Globex Inc.</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The Student Led Marketing Agency has exceeded our\n expectations in every way. Their team's
                      strategic\n thinking and innovative approach have helped us\n transform our online presence and
                      drive significant\n growth for our business."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Student Led Marketing Agency. All rights reserved.</p>
        <nav />
      </footer>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MegaphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
