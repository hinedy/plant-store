import Header from "./Header";
import Head from "next/head";

function Layout({children}) {
    return (
        <>
        <Head>
            <title>Plant Store</title>
            <meta name="description" content="plant e-commerce site" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header></Header>
        <div className="px-10 py-10 flex justify-center">
            {children}
        </div>
        </>
    )
}

export default Layout;