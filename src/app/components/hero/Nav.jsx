export default function Nav () {
    return (
        <div className="  flex justify-between">
            {/* INFO */}
            <div className=" w-1/3 flex flex-col  justify-between md:flex-row">
                <p className="font-mono ">honu347@gmail.com</p>
                <p className="font-mono">Based in the Netherlands</p>
            </div>
            {/* LINKS */}
            <div className="flex items-end">
                <div>
                    <p>About</p>
                    <p>Work</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    )
}