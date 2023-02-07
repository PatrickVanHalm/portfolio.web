import resume from "../assets/resume.pdf"

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <ul className="hidden md:flex">
                <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
                <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
                <li className="p-4"><a href="#projects" className="hover:underline">Projects</a></li>
                <li className="p-4"><a href="#portfolio" className="hover:underline">Student Portfolio</a></li>
            </ul>
            <a href={resume} rel="noreferrer" target="_blank" className="px-6 py-2 shadow-md rounded-md bg-dark-200 hover:bg-dark-100 hover:shadow-xl ml-2">Resume</a>
        </div>
    </div>
    )
}
