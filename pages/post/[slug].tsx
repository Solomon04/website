import Error from "next/error";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PostPageContainer from "../../components/Pages/PostPage/PostPageContainer";
import Head from "next/head";
import {createApolloClient} from "../../src/lib/apolloClient";
import {gql} from "graphql-tag";

const Post = ({post}) => {
    const name = 'Solomon Koang Dak';

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/crown.png"/>
                <meta property="og:title" content={post.title} key="og-title"/>
                <meta name='twitter:title' content={post.title} key="twitter-title"/>
                <meta property="description" content={post.metadata.excerpt} key="description"/>
                <meta property="og:description" content={post.metadata.excerpt} key="og-description"/>
                <meta property='og:site_name' content={name} key="og-sitename"/>
                <meta property='og:image' content={post.metadata.cover.url} key='og-image'/>
                <meta name="twitter:card" content="summary" key="twcard"/>
                <meta name="twitter:creator" content='@icodestuff1' key="twhandle"/>
            </Head>
            <main className="bg-gray-50 py-8">
                <div className="container mx-auto max-w-5xl px-3">
                    <Header/>
                    <PostPageContainer post={post}/>
                    <Footer/>
                </div>
            </main>
        </>
    )
};

export async function getServerSideProps(context) {
    const {slug} = context.query;

    const apolloClient = createApolloClient(context);
    const {data, error} = await apolloClient.query({
        query: gql`
            query GetObject {
                getObject(bucket_slug: "kingsolomon-production", input: {
                    slug: "${slug}",
                    read_key: "pj8d2VO5oQpqWCS6XC8B12TZgu5k3vUopygMPQ9MXjOBnNNTex"
                }) {
                    _id
                    title
                    content
                    metadata
                    published_at
                }
            }
        `,
        variables: {slug}
    });

    if (error) return <Error statusCode={400}/>;

    return {props: {post: data.getObject}}
}

export default Post;
