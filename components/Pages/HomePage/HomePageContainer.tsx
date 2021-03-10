import {FunctionComponent} from "react";
import ExperiencesContainer from "./Experiences/ExperiencesContainer";

const HomePageContainer: FunctionComponent = () => {
    return (
        <div className="py-16">
            <div className="flex justify-between items-center mb-12">
                <img
                    alt="Solomon"
                    src="/solomon.jpeg"
                    className="rounded-md shadow-md"/>
                <div className="ml-3 md:space-y-4">
                    <h1
                        className="font-extrabold tracking-wider md:leading-loose text-gray-800 text-2xl md:text-4xl lg:text-5xl">
                        Hey, I'm Solomon Koang Dak 👋🏿
                    </h1>
                    <p className="text-gray-600 tracking-tight md:leading-8 text-lg">
                        I am a 21 year old serial entrepreneur, software engineer, and content creator. I like to find problems in the world and implement solutions.
                    </p>
                    <p className="text-gray-600 tracking-tight md:leading-8 text-lg">
                        As of today
                        I am the co-founder & CEO of <a href="https://hoopspots.io/" className="font-medium underline">HoopSpots</a> and work
                        as a software engineer at <a href="https://www.nerdery.com/" className="font-medium underline">Nerdery</a>.
                    </p>
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
