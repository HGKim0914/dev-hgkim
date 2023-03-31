import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="header">
                <div>LOGO</div>
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
            `}</style>
        </>
    );
}