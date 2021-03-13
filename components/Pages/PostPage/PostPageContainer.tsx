import {FunctionComponent} from "react";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';


dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

type PostPageProps = {
    post: any;
}
const PostPageContainer: FunctionComponent<PostPageProps> = (props) => {
    const wordsPerMinute = 200; // Average case.
    let textLength = props.post.content.split(" ").length;
    const readTime = Math.ceil(textLength / wordsPerMinute);

    return (
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto py-16 w-full">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                {props.post.title}
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
                <div className="flex items-center">
                    <div>
                        <img className="rounded-full w-6 h-auto"
                             alt="Solomon"
                             src="/solomon.jpeg"/>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">Solomon / {dayjs(props.post.published_at).format('LL')}</p>
                </div>
                <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">{readTime} min read</p></div>
            <div className="prose max-w-none w-full" dangerouslySetInnerHTML={{__html: props.post.content}}/>
        </article>
    );
};

export default PostPageContainer;
