import hr from "../assets/curve-hr.svg"

export default function Portfolio(){
    return (
        <div id="portfolio" className="mt-4 text-white">
            <h2 className="text-2xl font-bold">Student Portfolio</h2>
            <p className="font-light text-gray-400">This is my student portfolio of a few semesters</p>

            <iframe height="800px" src="https://portfolio.drieam.app/s/GuxUr36X/J2zgJGmDcAZB7DnxJyTKgH1s" title="Dream Portfolio" className="w-full rounded-md mt-4"/>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    );
}