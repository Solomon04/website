import {FunctionComponent} from "react";
import {useQuery} from "@apollo/client";
import {GET_EXPERIENCES, GET_POSTS} from "../../../src/queries/queries";
import Link from "next/link";

const BlogPageContainer: FunctionComponent = () => {
    const {loading, error, data} = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error Loading Blog Posts</p>;

    return (
        <div className="py-16 mx-auto max-w-2xl">
            <h1
                className="font-extrabold tracking-wider md:leading-loose text-gray-800 text-2xl md:text-4xl lg:text-5xl mb-3">
                King Solomon Blog
            </h1>
            <p className="text-gray-600 tracking-tight text-lg prose leading">
                Here is where I like to journal my thoughts and share knowledge to the world
                on topics such as software, entrepreneurship, philosophy, history and more.
            </p>

            <div className="relative w-full my-4">
                <input aria-label="Search articles" type="text"
                       placeholder="Search articles"
                       className="px-4 py-2 border border-gray-300 block w-full rounded-md bg-white text-gray-900 focus:outline-none"/>
                <svg className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </div>

            <div className="mt-8">
                <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
                    Recent Posts
                </h2>
                <div>
                    {
                        data.getObjects.objects.map(post => (
                            <div className="mb-10" key={post._id}>
                                <h3 className="text-xl font-semibold">
                                    <Link href={`/post/${post.slug}`}>
                                    <a className="border-b border-transparent hover:border-gray-600">
                                        {post.title}
                                    </a>
                                    </Link>
                                </h3>
                                <div className="mt-2 text-gray-800">
                                    {post.metadata.excerpt}
                                </div>
                                <div className="mt-2">
                                    <Link href={`/post/${post.slug}`}>
                                        <a className="text-sm text-gray-700 border-b border-transparent hover:border-gray-600">
                                            Read this article
                                            <svg className="ml-1 w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none"
                                                 stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M5 12L19 12"/>
                                                <path d="M12 5L19 12 12 19"/>
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogPageContainer;
