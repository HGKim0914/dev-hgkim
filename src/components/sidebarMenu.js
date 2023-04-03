import Link from "next/link";

export default function SidebarMenu(props) {
    return (
        <>
            <div className="link-div">
                <Link href="/" legacyBehavior>
                        <a>
                            <div className="circular-link">
                                <span>{props.icon}</span>
                                <p>{props.title}</p>
                            </div>
                        </a>
                </Link>
            </div>
            <style jsx>{`
            .link-div {
                padding-right: 10px;
                padding-left: 10px;
                height: 45px;
            }
            .circular-link {
                display: flex;
                align-items: center;

                cursor: pointer;
                border-radius: 9px;

                width: 100%;
                height: 45px;
            }
            .circular-link:hover {
                background: lightgray;
            }
            .circular-link:hover > span {
                color: #ff0000;
            }
            a {
                text-decoration: none;
                color: #0f0f0f;
            }
            span {
                margin-left: 20px;
                line-height: 0px;
            }
            p {
                margin-left: 20px;
            }
            `}</style>
        </>
    );
}