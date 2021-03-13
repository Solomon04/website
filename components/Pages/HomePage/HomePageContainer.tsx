import {FunctionComponent} from "react";
import ExperiencesContainer from "./Experiences/ExperiencesContainer";

const HomePageContainer: FunctionComponent = () => {
    return (
        <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:items-center mb-12">
                <div className="-mx-4 relative lg:mt-0">
                    <img className="relative mx-auto rounded-md shadow-md w-auto mb-3 md:mb-0"
                         alt="Solomon"
                         src="/solomon.jpeg"/>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                    <div className="ml-3 md:space-y-4">
                        <h1
                            className="font-extrabold tracking-wide md:leading-loose text-gray-800 text-xl md:text-4xl lg:text-5xl">
                            Hey, I'm Solomon
                        </h1>
                        <p className="text-gray-600 tracking-tight md:leading-8 md:text-lg">
                            I am a 21 year old serial entrepreneur, software engineer, and content creator. I like to find problems in the world and implement solutions.
                        </p>
                        <p className="text-gray-600 tracking-tight md:leading-8 md:text-lg">
                            As of today
                            I am the co-founder & CEO of <a href="https://hoopspots.io/" className="font-medium underline">HoopSpots</a> and work
                            as a software engineer at <a href="https://www.nerdery.com/" className="font-medium underline">Nerdery</a>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">Timeline</h3>
                <ExperiencesContainer/>
            </div>
        </div>
    );
};

export default HomePageContainer;
