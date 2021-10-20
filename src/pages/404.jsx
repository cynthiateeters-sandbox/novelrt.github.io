import * as React from "react";
import Logo from "../components/Logo";
import Layout from "../components/Layout";

// markup
const NotFoundPage = () => (
    <main className="bg-gray-100 min-h-screen">
        <title>Page Not Found | NovelRT</title>
        <Layout>
            <div
                id="main-branding"
                className="flex flex-col items-center py-12 md:px-12 lg:px-36 xl:px-46 2xl:px-64 bg-gradient-to-b from-green-400 via-blue-500 to-indigo-600"
            >
                <Logo />
                <h1 className="my-4 text-5xl tracking-wide">Page Not Found.</h1>
                <h2 className="text-lg mx-16 xl:w-1/2 text-center">
                    Oops! The page you are looking for does not exist.
                </h2>
            </div>
        </Layout>
    </main>
);

export default NotFoundPage;
