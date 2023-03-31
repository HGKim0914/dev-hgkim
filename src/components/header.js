import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="header">
                <Link href="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="LOGO" /></Link>
                <div>Search Bar</div>
                <div>Avatar</div>
            </div>
            <style jsx>{`
                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 15px 2%;

                    position: sticky;
                    top: 0;
                    z-index: 10;
                    background-color: white;
                }
                .logo {
                    max-height: 21px;
                    object-fit: contain;
                    margin-left: 35px;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}