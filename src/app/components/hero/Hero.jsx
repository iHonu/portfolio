import Link from "next/link";
import Nav from "./Nav";

export default function Hero() {
    return (
        <div className="h-screen w-full flex flex-col px-16 py-8">
            <Nav />
            <div className="relative flex-grow flex flex-col items-center justify-center">
                
                {/* ADDITIONAL TEXT */}
                <div className="absolute w-1/5 bottom-[10vh] right-[10vw]">
                    <span className="font-light text-xl ">Creating web applications with attention to details and design</span>
                </div>

                {/* TEXT CIRCLE */}
                <div className="absolute right-[20vw] top-[10vh]">
                    <div className="relative">
                        <svg viewBox="0 0 300 300" className="w-96 h-96">
                            <defs>
                                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"></path>
                            </defs>
                            <text>
                                <textPath xlinkHref="#circlePath" className="text-lg">
                                    Frontend Developer * Frontend Developer *
                                </textPath>
                            </text>
                        </svg>
                        <Link href="/" className="w-16 h-16 md:w-24 md:h-18 absolute top-0 left-0 right-0 bottom-0 m-auto text-white bg-black rounded-full flex items-center justify-center">
                            Resume
                        </Link>
                    </div>
                </div>

                {/* HERO H1 */}
                <div className="flex flex-col gap-6 items-center">

                    {/* FIRST LINE */}
                    <div className="flex w-[80vh] items-center gap-14">
                        <span className="text-8xl">Creative</span>
                        <svg className="w-12 h-12" viewBox="0 0 51 54" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51 16.923L47.0423 10.077L25.8539 26.4082L29.4738 0H21.5262L25.1621 26.4082L3.97382 10.077L0 16.923L24.8243 27L0 37.077L3.97382 43.923L25.1621 27.5918L21.5262 54H29.4738L25.8539 27.5918L47.0423 43.923L51 37.077L26.1918 27L51 16.923Z" fill="#EF4444"/>
                        </svg>
                    </div>

                    {/* SECOND LINE */}
                    <div className="relative flex w-[75vh] justify-between items-center">
                        <div className="h-12 w-12 bg-red-500 rounded-3xl"></div>
                        <span className="text-9xl font-bold">Web Developer</span>
                    </div>
                </div>
            </div>
            
            {/* BOTTOM TEXT */}
            <div className="">
                <span className="font-mono text-xl">Anastasia Tikhonova</span>
            </div>
        </div>
    );
}

