import {
  Gamepad2,
  Music2,
  Camera,
  Code2,
  MapPin,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function HobbiesPage() {
  const hobbies = [
    {
      icon: Gamepad2,
      number: "01",
      title: "Playing Online Games",
      description:
        "I enjoy playing online games because they challenge my strategies, improve my decision-making, and allow me to have fun during my free time.",
      category: "Entertainment",
    },
    {
      icon: Music2,
      number: "02",
      title: "Listening to Music",
      description:
        "Music helps me relax, stay focused, and find motivation while studying, working on projects, or enjoying my free time.",
      category: "Lifestyle",
    },
    {
      icon: Camera,
      number: "03",
      title: "Photography",
      description:
        "I enjoy capturing meaningful moments, interesting views, and beautiful surroundings through photography.",
      category: "Creativity",
    },
    {
      icon: Code2,
      number: "04",
      title: "Programming",
      description:
        "I like creating websites, exploring different technologies, solving coding problems, and continuously improving my programming skills.",
      category: "Technology",
    },
    {
      icon: MapPin,
      number: "05",
      title: "Exploring Places",
      description:
        "Discovering new places gives me the opportunity to experience different environments, appreciate beautiful scenery, and create memories.",
      category: "Adventure",
    },
    {
      icon: BookOpen,
      number: "06",
      title: "Reading",
      description:
        "Reading allows me to discover new ideas, gain knowledge, improve my understanding, and learn from different perspectives.",
      category: "Learning",
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

            <a href="/Education" className="text-white/80 hover:text-white transition">
              Education
            </a>

            <a href="/Hobbies" className="font-semibold text-white">
              Hobbies
            </a>

            <a href="/Contact" className="text-white/80 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.4em] text-green-700 font-bold text-sm mb-6">
              Beyond Academics
            </p>

            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
              My Hobbies<span className="text-green-700">.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              The things I enjoy doing help me express my creativity,
              discover new interests, develop my skills, and make
              the most of my free time.
            </p>

            <div className="flex items-center gap-4 mt-10">
              <div className="w-16 h-[2px] bg-green-700"></div>

              <span className="text-white/60 uppercase tracking-[0.3em] text-xs">
                Explore • Create • Enjoy
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Hobbies Grid */}

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
                01 / Personal Interests
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Things I Enjoy
              </h2>
            </div>

            <p className="text-white/60 text-sm tracking-wider">
              06 HOBBIES & INTERESTS
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {hobbies.map((hobby) => {
              const Icon = hobby.icon;

              return (
                <div
                  key={hobby.number}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-9 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="flex justify-between items-start mb-12">

                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-green-700/40 transition">
                      <Icon
                        size={30}
                        strokeWidth={1.5}
                        className="text-green-700"
                      />
                    </div>

                    <span className="text-white/30 text-sm font-semibold tracking-widest">
                      {hobby.number}
                    </span>

                  </div>

                  <p className="text-green-700 uppercase tracking-[0.2em] text-xs font-bold mb-3">
                    {hobby.category}
                  </p>

                  <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-green-700 transition">
                    {hobby.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {hobby.description}
                  </p>

                  <div className="flex justify-end mt-8">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-white/30 group-hover:text-green-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-green-700/5 blur-2xl group-hover:bg-green-700/10 transition"></div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Favorite Hobby */}

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-9 md:p-16">

            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-green-700/10 blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-10 items-center">

              <div className="max-w-3xl">

                <p className="uppercase tracking-[0.3em] text-green-700 font-bold text-xs mb-6">
                  02 / My Main Interest
                </p>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-7">
                  Programming &
                  <span className="block text-green-700">
                    Technology.
                  </span>
                </h2>

                <p className="text-white/75 text-base md:text-lg leading-relaxed">
                  Programming is one of the hobbies I enjoy most.
                  I like creating websites, learning new development
                  tools, solving problems, and turning ideas into
                  working projects. It gives me the opportunity to
                  be creative while continuously developing my
                  technical knowledge and skills.
                </p>

              </div>

              <div className="hidden md:flex w-40 h-40 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Code2
                  size={76}
                  strokeWidth={1}
                  className="text-green-700"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}

    </main>
  );
}