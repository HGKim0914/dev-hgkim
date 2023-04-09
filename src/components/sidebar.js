import Link from "next/link";
import SidebarMenu from "./sidebarMenu";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="link-container">
                    <SidebarMenu icon={<HomeIcon />} title="Home" link="/" />
                    <SidebarMenu icon={<WhatshotIcon />} title="About" link="/about" />
                    <SidebarMenu icon={<VideoLibraryIcon />} title="Projects" link="/project" />
                    <SidebarMenu icon={<WifiTetheringIcon />} title="Contact" link="/contact" />
                </div>
                <style jsx>{`
                    .sidebar {
                        background-color: #fff;

                        width: 15%;
                        height: 100vh;
                        
                        position: fixed;
                        padding-top: 55px;
                        top: 0;
                    }
                    .link-container {
                        display: flex;
                        flex-direction: column;
                        justify-content: start;
                    }
                `}</style>
            </div>
        </>
    );
}