import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            <div>{children}</div>
            <style jsx>{`
                div {
                    background-color: #f9f9f9;
                    padding: 20px 2% 20px 17%;
                }
            `}</style>
        </>
    );
}