import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BlogPageContainer from "../components/Pages/BlogPage/BlogPageContainer";

const Blog = () => {
    const name = 'Solomon Koang Dak';
    const title = 'Blog - King Solomon';
    const description = 'I like to find problems in the world and write about implementing solutions. My writing' +
        ' topics may range from software to philosophy to history. Everything interests me. ';

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/crown.png"/>
                <meta property="og:title" content={title} key="og-title"/>
                <meta property="twitter:title" content={title} key="twitter-title"/>
                <meta property="description" content={description} key="description"/>
                <meta property="og:description" content={description} key="og-description"/>
                <meta property="og:site_name" content={name} key="og-sitename"/>
                <meta property='og:image' content='/solomon.jpeg' key='og-image'/>
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content='@icodestuff1' key="twhandle" />
            </Head>
            <main className="bg-gray-50 py-8 h-screen">
                <div className="container mx-auto max-w-5xl px-3">
                    <Header/>
                    <BlogPageContainer/>
                    <Footer/>
                </div>
            </main>
        </>
    );
};

export default Blog;
