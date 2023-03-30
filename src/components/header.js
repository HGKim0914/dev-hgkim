import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="header">
                <div>box1</div>
                <div>box2</div>
                <div>box3</div>
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