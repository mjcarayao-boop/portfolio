import {
  Mail,
  MapPin,
  Globe,
  UserRound,
  Camera,
  Briefcase,
  Send,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email Address",
      value: "mjcarayao@gbox.ncf.edu.ph",
      link: "mailto:mjcarayao@gbox.ncf.edu.ph",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Milaor, Camarines Sur, Philippines",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Globe,
      name: "GitHub",
      username: "Your GitHub profile",
      link: null,
    },
    {
      icon: UserRound,
      name: "Facebook",
      username: "Your Facebook profile",
      link: null,
    },
    {
      icon: Camera,
      name: "Instagram",
      username: "Your Instagram profile",
      link: null,
    },
    {
      icon: Briefcase,
      name: "LinkedIn",
      username: "Your LinkedIn profile",
      link: null,
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

            <a href="/Hobbies" className="text-white/80 hover:text-white transition">
              Hobbies
            </a>

            <a href="/Contact" className="text-white font-semibold">
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
              Get In Touch
            </p>

            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
              Contact Me<span className="text-green-700">.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Have a question, an idea, or an opportunity to share?
              Feel free to reach out. I would be happy to connect,
              exchange ideas, and explore new possibilities.
            </p>

            <div className="flex items-center gap-4 mt-10">
              <div className="w-16 h-[2px] bg-green-700"></div>

              <span className="text-white/60 uppercase tracking-[0.3em] text-xs">
                Let's Start a Conversation
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Information */}

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-bold mb-4">
              01 / Contact Information
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Let's Connect
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left Side */}

            <div className="space-y-6">

              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/15 transition duration-300"
                  >
                    <div className="flex items-center gap-5">

                      <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                        <Icon
                          size={30}
                          strokeWidth={1.5}
                          className="text-green-700"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">
                          {item.title}
                        </p>

                        <p className="text-white text-lg font-semibold break-all">
                          {item.value}
                        </p>
                      </div>

                      {item.link && (
                        <a
                          href={item.link}
                          aria-label={`Open ${item.title}`}
                          className="ml-auto text-white/40 hover:text-green-700 transition"
                        >
                          <ArrowUpRight size={22} />
                        </a>
                      )}

                    </div>
                  </div>
                );
              })}

              {/* Social Media */}

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                    <MessageCircle
                      size={27}
                      strokeWidth={1.5}
                      className="text-green-700"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Social Media
                    </h3>

                    <p className="text-white/50 text-sm">
                      Find me on social platforms
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">

                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <div
                        key={social.name}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <Icon
                          size={23}
                          strokeWidth={1.5}
                          className="text-green-700 shrink-0"
                        />

                        <div className="min-w-0">
                          <p className="text-white font-semibold">
                            {social.name}
                          </p>

                          <p className="text-white/40 text-xs truncate">
                            {social.username}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                </div>

                <p className="text-white/40 text-xs mt-5">
                  Add your actual social media profile links when ready.
                </p>

              </div>
            </div>

            {/* Right Side - Contact Form */}

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10">

              <div className="mb-9">
                <p className="text-green-700 uppercase tracking-[0.3em] text-xs font-bold mb-4">
                  02 / Send a Message
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get In Touch.
                </h2>

                <p className="text-white/60 leading-relaxed">
                  Fill out the form below to send me a message.
                  I look forward to hearing from you.
                </p>
              </div>

              <form
                action="mailto:mjcarayao@gbox.ncf.edu.ph"
                method="post"
                encType="text/plain"
                className="space-y-6"
              >

                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 text-sm font-medium mb-3"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="Name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 text-sm font-medium mb-3"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white/80 text-sm font-medium mb-3"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="Subject"
                    type="text"
                    required
                    placeholder="What is your message about?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 text-sm font-medium mb-3"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="Message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition duration-300"
                >
                  <Send size={19} />
                  Send Message
                </button>

                <p className="text-white/40 text-xs text-center">
                  This form opens your default email application.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}