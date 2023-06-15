import Slider from 'react-slick';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectCard(props){
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
      };
    
    const pauseSlider = () => {
        this.slider.slickPause();
    }
    
    const continueSlider = () => {
        this.slider.slickPlay();
    }
    
    const continueSliderOnChange = (index) => {
        this.continueSlider();
    }
    
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-full h-full bg-dark-200 rounded-md py-4 px-4 relative flex flex-col">
            {props.media ?
                <Slider {...settings} ref={slider => (this.slider = slider)} afterChange={this.continueSliderOnChange}>
                {props.media.map(m => {
                    switch(m.type){
                        case "image":
                            return <img src={m.uri} alt={m.alt} className="w-full h-72 mx-auto object-cover"></img>
                        
                        case "youtube":
                            return <YouTube videoId={m.videoId} iframeClassName="w-full h-72 mx-auto object-cover" onPlay={this.pauseSlider} onEnd={this.continueSlider}/>
                            
                        default:
                            return "";
                    }
                })}
            </Slider>
            : null}
            {props.buttons ? 
                <div className="flex flex-row justify-end absolute top-0 right-0 left-0 mt-6 mx-6">
                    {props.buttons.map(b => {
                        switch(b.type){
                            case "text":
                                return <a href={b.uri} rel="noreferrer" target="_blank" className="px-6 py-2 shadow-md rounded-md bg-dark-300 hover:bg-dark-200 hover:shadow-xl ml-2" title={b.title}>{b.text}</a>

                            case "icon":
                                return <a href={b.uri} rel="noreferrer" target="_blank" className={`${b.text ? "px-8" : "px-6"} py-2 shadow-md rounded-md bg-dark-300 hover:bg-dark-200 hover:shadow-xl ml-2 flex flex-col`} title={b.title}>
                                    <FontAwesomeIcon size='2xl' icon={b.icon} />
                                    {b.text ? <span className="text-center text-xs">{b.text}</span> : null}
                                </a>

                            case "svg":
                                return <a href={b.uri} rel="noreferrer" target="_blank" className={`${b.text ? "px-8" : "px-6"} py-2 shadow-md rounded-md bg-dark-300 hover:bg-dark-200 hover:shadow-xl ml-2 flex flex-col`} title={b.title}>
                                    <img src={b.icon} className="h-[2em]" alt={props.name} />
                                    {b.text ? <span className="text-center text-xs">{b.text}</span> : null}
                                </a>

                            default:
                                return "";
                        }
                    })}
                </div>
            : null}
            <div className={`${props.media ? "mt-2" : ""} grow h-100 flex flex-col`}>
                {props.tags ?
                    <div className="flex flex-row mt-2 flex-wrap">
                        {props.tags.map(tag => <span className="py-1 px-2 bg-dark-300 rounded-sm mr-2 mb-1 shadow-sm">{tag}</span>)}
                    </div>
                : null}
                <h2 className="font-bold md:text-xl">{props.name}</h2>
                <div className="grow">
                    <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: props.description}}></p>
                </div>
                <p className="font-light text-gray-500 text-right">{props.date}</p>
            </div>
        </div>
    )
}
