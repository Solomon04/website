import {FunctionComponent} from "react";
import {GET_EXPERIENCES} from "../../../../src/queries/experiences";
import {useQuery} from "@apollo/client";

const ExperiencesContainer: FunctionComponent = () => {
    const { loading, error, data } = useQuery(GET_EXPERIENCES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error Loading Timeline</p>;

    return (
        <div>
            {data.getObjects.objects.map(experience => (
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center mb-16" key={experience._id}>
                    <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-2">
                        <img className="relative mx-auto h-32 w-auto mb-3 md:mb-0"
                             src={experience.metadata.logo.url} alt={experience.metadata.company}/>
                    </div>

                    <div className="lg:col-start-1">
                        <h4
                            className="text-2xl leading-10 font-bold font-serif text-gray-900 tracking-tight">
                            {experience.title}
                        </h4>
                        <h6 className="text-gray-600 font-mono font-semibold text-lg">{experience.metadata.role}</h6>
                        <h6 className="text-gray-600 font-normal font-mono">{experience.metadata.start_date} - {experience.metadata.end_date}</h6>
                        <div className="prose mt-3 text-gray-600" dangerouslySetInnerHTML={{__html: experience.content}}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperiencesContainer;
