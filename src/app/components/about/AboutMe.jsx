const skillsFront = [
  "JavaScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "CSS",
  "SCSS",
  "Framer Motion",
  "GSAP",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
];
const skillsBack = [
  "MongoDB",
  "MySQL",
  "Node.js",
  "SCSS",
  "GSAP",
  "Framer Motion",
  "Next.js",
  "React",
  "JavaScript",
];
export default function About() {
  return (
    <div className=" relative flex flex-col h-screen items-start justify-center gap-12 md:gap-32 px-16 py-8 max-w-[120rem] mx-auto">
      <div className="md:absolute top-0 left-0 w-screen h-2 bg-black"></div>
      <span className="hover-expand-cursor text-2xl lg:text-3xl font-bold text-start uppercase">
        About Me
      </span>
      <div className="flex flex-col gap-16 ">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="hover-expand-cursor">
            <span className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-extralight">
              I am a advocate of the DRY principle, valuing structured and
              readable code as fundamental to successful software development
            </span>
          </div>
          <div className="hover-expand-cursor flex flex-col gap-4 md:gap-8 md:text-xl lg:text-2xl leading-relaxed uppercase">
            <span>
              Believe that a good user experience and design impact the success
              of a project.
            </span>
            <span>
              Can work solo, but I am more of a team player. In my opinion, a
              strong and cohesive team can achieve better results
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center md:absolute bottom-16 left-16 text-sm">
          {/* SKILLS */}
          <div>
            <span className=" opacity-65">JS, React, Next.js, CSS</span>
          </div>
          <div>
            <span>Node.js, MySQL, MongoDB, CSS</span>
          </div>
          <div>
            <span className="opacity-65">JS, React, Next.js, CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
