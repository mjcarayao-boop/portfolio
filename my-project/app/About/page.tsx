export default function AboutPage() {
  return (
    <main
      className="min-h-screen w-full bg-stone-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bgHome.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar */}

      <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            My Portfolio
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="/" className="text-white/80 hover:text-white transition">
              Home
            </a>

            <a href="/About" className="text-white font-semibold">
              About
            </a>

            <a href="/Education" className="text-white/80 hover:text-white transition">
              Education
            </a>

            <a href="/Hobbies" className="text-white/80 hover:text-white transition">
              Hobbies
            </a>

            <a href="/Contact" className="text-white/80 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* About Hero */}

   {/* About Hero */}
  <section className="pt-40 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <p className="text-sm tracking-[0.4em] uppercase text-green-700 font-semibold mb-5">
          Get to know me
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
          About <span className="text-green-700">Me.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
          Hello! I'm Mark Justine Carayao, an Information Technology
          student passionate about technology, creativity, and
          discovering new opportunities. This is where I share
          my story, interests, and ambitions.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-[2px] w-16 bg-green-700"></div>
          <span className="text-white/70 tracking-widest uppercase text-xs">
            My Story • My Journey • My Future
          </span>
        </div>
      </div>
    </div>
  </section>

  {/* Main Content */}
  <section className="px-6 pb-24">
    <div className="max-w-7xl mx-auto">

      {/* Personal Information */}
      <div className="grid lg:grid-cols-5 gap-6 mb-6">
        <div className="lg:col-span-2 rounded-[2rem] bg-white/10 backdrop-blur-xl p-8 md:p-10 border border-white/20 shadow-lg shadow-black/5">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
            01 / Introduction
          </p>

          <h2 className="text-3xl font-bold text-white mb-8">
            Personal Information
          </h2>

          <div className="space-y-6">
            {[
              ["Full Name", "Mark Justine Carayao"],
              ["Location", "Capucnasan, Milaor, Camarines Sur 4413"],
              ["Course", "Information Technology"],
              ["Email", "mjcarayao@gbox.ncf.edu.ph"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col border-b border-white/20 pb-4"
              >
                <span className="text-xs uppercase tracking-widest text-green-700 font-semibold mb-2">
                  {label}
                </span>
                <span className="text-white font-medium break-words">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Personality */}
        <div className="lg:col-span-3 rounded-[2rem] bg-white/10 backdrop-blur-xl p-8 md:p-12 border border-white/20 shadow-lg shadow-black/5 flex flex-col justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-bold mb-6">
              02 / Who I Am
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              More Than Just
              <span className="block text-green-700">A Student.</span>
            </h2>

            <p className="text-white/85 text-lg leading-loose">
              I am someone who enjoys learning, exploring new ideas,
              and improving my abilities. As an IT student, I am
              interested in programming, web development, and
              understanding how technology works. I believe that
              every challenge is an opportunity to gain experience
              and become better.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="border-l-2 border-green-700 pl-4">
              <h3 className="text-white font-bold text-xl">Learning</h3>
              <p className="text-white/60 text-sm mt-1">Improving every day</p>
            </div>

            <div className="border-l-2 border-green-700 pl-4">
              <h3 className="text-white font-bold text-xl">Creativity</h3>
              <p className="text-white/60 text-sm mt-1">Building new ideas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl p-8 md:p-12 mb-6 border border-white/20 shadow-lg shadow-black/5">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
              03 / Looking Ahead
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Goals &
              <span className="block text-green-700">Ambitions.</span>
            </h2>
          </div>

          <div className="md:col-span-2">
            <p className="text-white/85 text-lg leading-loose">
              My goal is to become a successful IT professional
              with strong knowledge and skills in programming
              and web development. I want to create useful,
              creative, and functional websites and applications.
              I also aim to gain more experience, explore new
              technologies, and continuously improve myself
              so I can build a better future through technology.
            </p>
          </div>
        </div>
      </div>

      {/* My Journey */}
      <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl p-8 md:p-12 border border-white/20 shadow-lg shadow-black/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-bold mb-5">
              04 / My Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The Journey
              <span className="block text-green-700">Continues.</span>
            </h2>

            <div className="w-20 h-1 bg-green-700 mt-8"></div>
          </div>

          <div className="space-y-6">
            <p className="text-white/85 leading-loose text-lg">
              My journey as an Information Technology student
              allows me to discover different areas of technology.
              Through my studies, I have started developing my
              knowledge in programming, database management,
              and website development.
            </p>

            <p className="text-white/85 leading-loose text-lg">
              Every project and activity gives me a chance to
              learn something new. I know that becoming skilled
              in technology takes time, practice, and dedication.
              I am excited to continue learning, take on new
              challenges, and turn my ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

);
}