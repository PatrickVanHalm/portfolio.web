import hr from '../assets/curve-hr.svg'

export default function Footer(){
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">About</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="https://portfolio.drieam.app/s/GuxUr36X/KpBY1xWbrhPmWmuUecf4EW15" className="hover:underline" target="_blank" rel="noreferrer">Student Portfolio</a></li>
      </ul>

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">Copyright © 2023 Patrick van Halm. All Right Reserved</p>

    </div>
  )
}
