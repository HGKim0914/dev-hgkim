import Link from "next/link";

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="link-container">
                    <Link href="/" legacyBehavior><h4>Home</h4></Link>
                    <Link href="/" legacyBehavior><h4>About Me</h4></Link>
                    <Link href="/" legacyBehavior><h4>Projects</h4></Link>
                </div>
                <style jsx>{`
                    .sidebar {
                        width: 15%;
                        height: 100vh;
                        
                        /* position: -webkit-sticky; */
                        position: fixed;
                        padding-top: 80px;
                        top: 0;
                        background-color: grey;
                    }
                    .link-container {
                        display: flex;
                        flex-direction: column;
                        justify-content: start;

                        padding-left: 20px;
                        margin-bottom: 20px;

                        width: fit-content;
                        flex-wrap: wrap;
                    }
                `}</style>
            </div>
        </>
    );
}