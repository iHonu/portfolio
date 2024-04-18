import Marquee from "react-fast-marquee";


const skillsFront = ['JavaScript', 'React', 'Next.js', 'TailwindCSS', 'CSS', 'SCSS', 'Framer Motion', 'GSAP', 'Node.js', 'Express', 'MongoDB', 'MySQL']
const skillsBack = ['MongoDB', 'MySQL', 'Node.js', 'SCSS', 'GSAP', 'Framer Motion', 'Next.js', 'React', 'JavaScript']
export default function About() {

    return ( 
        <div className=" relative flex flex-col  items-center justify-center">
            <div className="w-full h-2 bg-black"></div>
             <div className="h-screen pt-36">

                {/* TEXT GRID */}
             <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-3  gap-12 p-4 w-full px-16  mt-24">
               
                <div class=" flex justify-start items-center gap-6">
                    <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M40 19.9894C40 19.1636 35.8179 18.4436 29.6559 18.0731C35.2144 15.3626 38.793 13.1075 38.4754 12.3452C38.1578 11.5828 34.018 12.5146 28.1736 14.5368C32.271 9.91001 34.7168 6.44786 34.1345 5.85495C33.5521 5.27263 30.09 7.71837 25.4632 11.8158C27.4749 5.97141 28.4171 1.84224 27.6443 1.52462C26.8819 1.20699 24.6162 4.79619 21.9058 10.3547C21.5352 4.18211 20.8152 0 19.9894 0C19.1636 0 18.4436 4.18211 18.0731 10.3441C15.3626 4.7856 13.1075 1.20699 12.3452 1.52462C11.5828 1.84224 12.5146 5.982 14.5262 11.8158C9.89942 7.71837 6.43727 5.27263 5.85495 5.85495C5.27263 6.43727 7.71837 9.89942 11.8158 14.5262C5.97141 12.5146 1.84224 11.5723 1.52462 12.3452C1.20699 13.1075 4.79619 15.3732 10.3441 18.0731C4.17152 18.4436 0 19.1636 0 19.9894C0 20.8152 4.18211 21.5352 10.3547 21.9058C4.79619 24.6162 1.20699 26.8819 1.52462 27.6443C1.84224 28.4066 5.97141 27.4749 11.8158 25.4632C7.71837 30.09 5.27263 33.5521 5.85495 34.1345C6.43727 34.7168 9.89942 32.271 14.5368 28.1736C12.5251 34.018 11.5828 38.1578 12.3452 38.4754C13.1075 38.793 15.3732 35.2038 18.0731 29.6559C18.4436 35.8285 19.1636 40 19.9894 40C20.8152 40 21.5352 35.8179 21.9058 29.6559C24.6162 35.2144 26.8714 38.8036 27.6443 38.486C28.4066 38.1683 27.4749 34.0286 25.4632 28.1948C30.09 32.2922 33.5521 34.738 34.1345 34.1556C34.7168 33.5733 32.271 30.1112 28.1736 25.4844C34.018 27.496 38.1472 28.4383 38.4648 27.6654C38.7824 26.9031 35.1932 24.6374 29.6347 21.9269C35.8179 21.5352 40 20.8152 40 19.9894Z" fill="#171717"/>
                        
                    </svg>
                    <p className="font-bold text-xl uppercase">About me</p>
                   
                </div>
  
                <div class=" flex justify-end items-end">
                    <span className="hover-expand-cursor text-2xl uppercase">Believe that a good user experience and design impact the success of a project.</span>
                </div>
  
               
                <div class="text-4xl font-extralight    mt-24 flex justify-center items-start pr-12  hover:text-zinc-900">
                    <span className="hover-expand-cursor">I am a advocate of the DRY  principle, valuing structured and readable code as fundamental to successful software development.</span>
                </div>
  
             
                <div class=" text-2xl uppercase  flex justify-center items-start hover:text-zinc-900">
                 <span className="hover-expand-cursor">Can work solo, but I am more of a team player. In my opinion, a strong and cohesive team can achieve better results.</span>
                </div>
  
              
                <div class=" flex justify-center items-start">
                </div>
  
            
                <div class="  flex justify-center items-start">
                     <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97 44.7442H57.564L85.4321 16.8761L80.1239 11.5679L52.2558 39.436V0H44.7442V39.436L16.8761 11.5679L11.5679 16.8761L39.436 44.7442H0V52.2558H39.436L11.5679 80.1239L16.8761 85.4321L44.7442 57.564V97H52.2558V57.564L80.1239 85.4321L85.4321 80.1239L57.564 52.2558H97V44.7442Z" fill="rgb(239 68 68)"/>
                    </svg>
                </div>
            </div>

            {/* TEXT SLIDER */}
            {/* <div className=" absolute bottom-10 gap-8 flex flex-col">
                <Marquee pauseOnHover	>
                    <span className=" uppercase text-2xl font-semibold opacity-30 hover:opacity-70">
                        JavaScript - React - Next.js - TailwindCSS - CSS - SCSS - Framer Motion - GSAP - Node.js - Express - MongoDB - MySQL
                    </span>
                </Marquee>
            </div> */}

            
           
            <div className="px-16 absolute flex flex-col gap-2 -bottom-20 left-0  items-start text-center text-sm w-1/2">
            <Marquee pauseOnHover speed={20} autoFill	> 
                <div className="flex gap-1 uppercase justify-end p-1 border-y-2 border-slate-800 ">
                { skillsFront.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}

                </div>
                <div className="flex flex-col gap-1 uppercase justify-end ">
              
                </div>
                </Marquee>
                <Marquee pauseOnHover direction="right" speed={20} autoFill 	> 
                <div className="flex gap-1 uppercase justify-end p-1 border-y-2 bg-slate-800 border-slate-800 text-white">
                { skillsBack.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
                </div>
                <div className="flex flex-col gap-1 uppercase justify-end ">
              
                </div>
                </Marquee>
            </div>
           
         

            </div>
        </div>
    )
}