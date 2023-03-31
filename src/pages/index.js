// import { Inter } from 'next/font/google'

import Video from "@/components/video";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="video-list">
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
        <style jsx>{`
          .container {
            display: flex;

            background-color: #f9f9f9;
            {/* padding: 20px 2% 20px 17%; */}
          }
          .video-list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
      

    </>
  )
}
