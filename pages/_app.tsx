import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {ThemeProvider} from "next-themes";
import {useState} from "react";
import MobileMenu from "../components/navbar/mobileMenu";

function MyApp({Component, pageProps}: AppProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            <Head>
                <title>Holistic Life</title>
                <link rel="icon"
                      href=""
                      sizes="32x32"/>
                <link rel="icon"
                      href=""
                      sizes="192x192"/>
            </Head>
            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
            <MobileMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
    )
}

export default MyApp
