import Marquee from "react-fast-marquee";


const skillsFront = ['JavaScript', 'React', 'Next.js', 'TailwindCSS', 'CSS', 'SCSS', 'Framer Motion', 'GSAP', 'Node.js', 'Express', 'MongoDB', 'MySQL']
const skillsBack = ['MongoDB', 'MySQL', 'Node.js', 'SCSS', 'GSAP', 'Framer Motion', 'Next.js', 'React', 'JavaScript']
export default function About() {

    return ( 
        <div className=" relative flex flex-col  items-center justify-center">
            <div className="w-full h-2 bg-black"></div>
             <div className="h-screen">

                {/* TEXT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4 md:gap-12 p-2 md:p-4 px-8 md:px-16 mt-24 max-w-[120rem] mx-auto">

               
                    <div className=" flex justify-center md:justify-start items-center gap-6">
                        
                        <p className="font-bold text-xl uppercase hover-expand-cursor hover:text-2xl ease-in duration-75">About me</p>
                   
                </div>
  
                <div className=" flex justify-center md:justify-end items-center md:items-end text-2xl leading-relaxed uppercase">
                    <span className="hover-expand-cursor ">Believe that a good user experience and design impact the success of a project.</span>
                </div>
  
               
                <div className="text-4xl leading-relaxed font-extralight md:mt-24 flex justify-center items-center md:items-start md:pr-12  hover:text-zinc-900">
                    <span className="hover-expand-cursor">I am a advocate of the DRY  principle, valuing structured and readable code as fundamental to successful software development.</span>
                </div>
  
             
                <div className=" text-2xl leading-relaxed uppercase  flex justify-center items-center md:items-start hover:text-zinc-900">
                 <span className="hover-expand-cursor">Can work solo, but I am more of a team player. In my opinion, a strong and cohesive team can achieve better results.</span>
                </div>
  
              
                <div className="md:hidden flex justify-center items-start">
                </div>
  
            
                <div className="  flex justify-center items-start">
                     <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97 44.7442H57.564L85.4321 16.8761L80.1239 11.5679L52.2558 39.436V0H44.7442V39.436L16.8761 11.5679L11.5679 16.8761L39.436 44.7442H0V52.2558H39.436L11.5679 80.1239L16.8761 85.4321L44.7442 57.564V97H52.2558V57.564L80.1239 85.4321L85.4321 80.1239L57.564 52.2558H97V44.7442Z" fill="rgb(239 68 68)"/>
                    </svg>
                </div>
            </div>
            </div>
        </div>
    )
}