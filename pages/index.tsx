import Head from 'next/head'
import Header from "../components/Header/Header";
import HomePageContainer from "../components/Pages/HomePage/HomePageContainer";
import Footer from "../components/Footer/Footer";

export default function Home() {
    const name = 'Solomon Koang Dak';
    const title = 'King Solomon';
    const description = 'I am a 21 year old serial entrepreneur, software engineer, and content creator. I like to find problems in the world and implement solutions.';

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/crown.png"/>
                <meta property="og:title" content={name} key="og-title"/>
                <meta property="twitter:title" content={name} key="twitter-title"/>
                <meta property="description" content={description} key="description"/>
                <meta property="og:description" content={description} key="og-description"/>
                <meta property="og:site_name" content={title} key="og-sitename"/>
                <meta property='og:image' content='/solomon.jpeg' key='og-image'/>
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content='@icodestuff1' key="twhandle" />
            </Head>
            <main className="bg-gray-50 py-8">
                <div className="container mx-auto max-w-5xl px-3">
                    <Header/>
                    <HomePageContainer/>
                    <Footer/>
                </div>
            </main>
        </>
    )
}
