import Link from "next/link";

const links = [
    {title: "Linkedin", url: "https://www.linkedin.com/in/honu347/"},
    {title: "GitHub", url: "https://github.com/iHonu"},
    {title: "Contact", url: "/contact"},
]
export default function Nav () {
    
    return (
        <div className="  flex justify-between">
            {/* INFO */}
            <div className="w-2/3 md:w-1/3 flex flex-col  justify-between md:flex-row">
                <p className="font-mono text-sm">honu347@gmail.com</p>
                <p className="font-mono text-sm hidden md:inline-block">Based in the Netherlands</p>
            </div>
            {/* LINKS */}
            <div className="flex items-end flex-col font-mono gap-2  text-mono tracking-wide duration-75">
                    {
                        links.map((link) => {
                            return <Link className=" text-mono tracking-wide hover:font-bold hover:-translate-x-1 ease-out duration-75" key={link.title} href={link.url
                            }>{link.title}</Link>
                    }
                    )}
               
            </div>
        </div>
    )
}