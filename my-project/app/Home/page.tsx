export default function HomePage() {
  return (
    <main
      className="min-h-screen w-full bg-stone-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bgHome.png')",
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Navbar - Original Design */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-white">
            My Portfolio
          </h1>

          <div className="hidden gap-6 md:flex">
            <a href="/" className="font-semibold text-white">
              Home
            </a>

            <a href="/About" className="text-white/80 transition hover:text-white">
              About
            </a>

            <a href="/Education" className="text-white/80 transition hover:text-white">
              Education
            </a>

            <a href="/Hobbies" className="text-white/80 transition hover:text-white">
              Hobbies
            </a>

            <a href="/Contact" className="text-white/80 transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Introduction */}
          <div className="max-w-2xl">
            <p className="mb-5 text-lg font-semibold uppercase tracking-widest text-green-600">
              Welcome to My Personal Portfolio
            </p>

            <h1 className="text-6xl font-bold leading-tight text-green-950 lg:text-7xl">
              Hi, I'm
              <span className="text-green-700"> Justine</span>
            </h1>

            <div className="mt-5 h-1 w-24 rounded-full bg-green-700" />

            <p className="mt-8 text-lg leading-relaxed text-white">
              I am an Information Technology student who enjoys exploring
              technology, learning new programming skills, and creating
              websites and digital projects. I believe that every challenge
              is an opportunity to improve myself and gain new knowledge.
              This portfolio showcases who I am, my educational journey,
              hobbies, and the things I aspire to achieve in the future.
            </p>

            <a
              href="/About"
              className="mt-9 inline-block rounded-xl bg-green-800 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-green-900"
            >
              Learn More About Me
            </a>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="hellyeah.png"
                alt="Profile"
                className="h-80 w-80 rounded-full border-8 border-white/20 object-cover backdrop-blur-md lg:h-[450px] lg:w-[450px]"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}