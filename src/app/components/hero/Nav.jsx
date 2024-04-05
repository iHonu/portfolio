export default function Nav () {
    return (
        <div className="  flex justify-between">
            {/* INFO */}
            <div className="w-2/3 md:w-1/3 flex flex-col  justify-between md:flex-row">
                <p className="font-mono text-sm">honu347@gmail.com</p>
                <p className="font-mono text-sm hidden md:inline-block">Based in the Netherlands</p>
            </div>
            {/* LINKS */}
            <div className="flex items-end">
                <div>
                    <p>Linkedin</p>
                    <p>GitHub</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    )
}