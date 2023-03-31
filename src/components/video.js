import Link from "next/link";

export default function Video() {
    return (
        <>
            <div className="container">
                <div src="/" className="thumbnail" />

                <div className="info-container">
                    
                    <div className="video-info-container">
                        <div className="user-img" />
                        <div className="text-info">
                            <Link href="/" legacyBehavior>
                                <h4>Video TitleVideo TitleVideo TitleVideo ssssssss</h4>
                            </Link>
                            <p>Channel Name</p>
                            <p>Views • timestamp</p>
                        </div>
                    </div>

                </div>

            </div>
            <style jsx>{`
                .container {
                    padding-top: 25px;
                    margin-left: 5px;
                }
                .thumbnail {
                    width: 100%;
                    width: 360px;
                    aspect-ratio: 16 / 9;

                    border-radius: 18px;

                    background-color: green;
                }
                .info-container {
                    width: 100%;
                    width: 360px;
                    /* height: 100%; */

                    /* margin-top: 5px; */
                    padding: 3px;

                    /* background-color: grey; */
                }
                .video-info-container {
                    display: flex;
                    flex-direction: row;
                }
                .user-img {
                    background-color: black;

                    margin-top: 3px;

                    height: 36px;
                    aspect-ratio: 1 / 1;

                    border-radius: 50%;
                }
                .text-info {
                    /* display: flex;
                    flex-direction: column; */
                    /* align-items: center; */
                    top: 0;
                    margin-left: 8px;
                }
                .text-info > p, h4 {
                    margin: 0;
                }
            `}</style>
        </>
    );
}