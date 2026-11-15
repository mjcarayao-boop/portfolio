 export default function EducationPage() {
  const educationData = [
    {
      year: "2023 - Present",
      level: "College",
      school: "Naga College Foundation",
      description:
        "Currently pursuing Information Technology, developing my knowledge in programming, web development, database management, and other areas of technology.",
    },
    {
      year: "2021 - 2023",
      level: "Senior High School",
      school: "Naga City School of Arts and Trades",
      description:
        "Completed my Senior High School education while gaining knowledge, developing my abilities, and preparing for my college journey.",
    },
    {
      year: "2017 - 2021",
      level: "Junior High School",
      school: "RT Subastil Memorial High School",
      description:
        "Built my academic foundation, improved my skills, and gained valuable experiences through classroom learning and school activities.",
    },
    {
      year: "2011 - 2017",
      level: "Elementary",
      school: "Capucnasan Elementary School",
      description:
        "Started my educational journey by developing basic academic skills, building friendships, and discovering the importance of learning.",
    },
  ];

  return (
    <main
      className="min-h-screen w-full bg-stone-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bgHome.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar - Unchanged */}

      <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            My Portfolio
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="/" className="text-white/80 hover:text-white transition">
              Home
            </a>

            <a href="/About" className="text-white/80 hover:text-white transition">
              About
            </a>

            <a href="/Education" className="font-semibold text-white">
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

      {/* Hero Section */}

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.4em] text-green-700 font-bold mb-6 text-sm">
              My Educational Background
            </p>

            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
              Education<span className="text-green-700">.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Every chapter of my education has helped shape the
              person I am today. These are the schools and experiences
              that have contributed to my knowledge, growth, and future.
            </p>

            <div className="flex items-center gap-4 mt-10">
              <div className="w-16 h-[2px] bg-green-700"></div>
              <span className="text-white/60 uppercase tracking-[0.3em] text-xs">
                Learning • Growing • Achieving
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Education Timeline */}

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
              01 / Academic History
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              My Learning Journey
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {educationData.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="flex justify-between items-center mb-10">
                  <span className="text-green-700 text-sm font-bold tracking-widest uppercase">
                    0{index + 1} / {item.level}
                  </span>

                  <span className="text-white/70 text-sm font-medium border border-white/10 bg-white/5 px-4 py-2 rounded-full">
                    {item.year}
                  </span>
                </div>

                <div className="w-12 h-1 bg-green-700 mb-7 group-hover:w-20 transition-all duration-300"></div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-green-700 transition">
                  {item.school}
                </h2>

                <h3 className="text-green-700 font-semibold text-lg mb-5">
                  {item.level}
                </h3>

                <p className="text-white/75 leading-loose text-base">
                  {item.description}
                </p>

                <div className="absolute bottom-0 right-8 text-7xl font-bold text-white/[0.04] pointer-events-none">
                  0{index + 1}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Academic Highlights */}

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
              02 / Personal Development
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white">
              What Education Means to Me.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-9 hover:bg-white/15 transition duration-300">
              <span className="text-green-700 text-4xl font-bold">01</span>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Knowledge
              </h3>

              <p className="text-white/70 leading-relaxed">
                Education helps me discover new ideas, understand
                different subjects, and expand my knowledge.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-9 hover:bg-white/15 transition duration-300">
              <span className="text-green-700 text-4xl font-bold">02</span>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Experience
              </h3>

              <p className="text-white/70 leading-relaxed">
                Every school year gives me valuable experiences,
                challenges, and lessons that help me grow.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-9 hover:bg-white/15 transition duration-300">
              <span className="text-green-700 text-4xl font-bold">03</span>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Future
              </h3>

              <p className="text-white/70 leading-relaxed">
                I see education as an important step toward
                achieving my dreams and becoming a successful
                IT professional.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Closing Section */}

      <section className="px-6 pb-24">
      </section>

    </main>
  );
}