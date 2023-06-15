import hr from "../assets/curve-hr.svg"

export default function Portfolio(){
    return (
        <div id="portfolio" className="mt-4 text-white">
            <h2 className="text-2xl font-bold">Student Portfolio</h2>
            <p className="font-light text-gray-400">This is my student portfolio of a few semesters</p>

            <div className="mt-4">
                <a href="https://portfolio.drieam.app/s/GuxUr36X/KpBY1xWbrhPmWmuUecf4EW15" target="_blank" rel="noreferrer" className="px-6 py-2 shadow-md rounded-md bg-dark-300 hover:bg-dark-200 hover:shadow-xl">View my portfolio</a>
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    );
}
