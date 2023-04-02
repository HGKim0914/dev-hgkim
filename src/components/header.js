import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '@material-ui/icons/Search';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <span className="icons"><MenuIcon /></span>
                    <Link href="/">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="LOGO" />
                    </Link> 
                </div>

                <div className="header-middle">
                    <input 
                        // onChange={(e)=> setInputSearch(e.target.value)} 
                        // value={inputSearch} 
                        type="text" 
                        placeholder=" Search"
                        className='input'
                    />
                    <div className="">
                        <Link href={`/`}>
                            <div className="search-icon"><SearchIcon /></div>
                        </Link>
                    </div>
                </div>

                <div className='header-right'>
                    <span className="right-icons"><LinkedInIcon /></span>
                    <span className="right-icons"><GitHubIcon /></span>
                    <img className="avatar-img" src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light" />
                </div>
            </div>
            <style jsx>{`
                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 8px 2%;

                    position: sticky;
                    top: 0;
                    z-index: 10;
                    background-color: white;
                }
                .logo-container {
                    display: flex;
                    justify-content: center;
                }
                .icons {
                    display: flex;
                    align-items: center;
                    color: #030303;
                    cursor: pointer;
                    margin-right: 20px;
                }
                .icons:hover {
                    background-color: #dddddd;
                    border-radius: 5px;
                }
                .logo {
                    max-height: 21px;
                    object-fit: contain;
                    margin-top: 2.5px;
                    cursor: pointer;
                }
                .header-middle {
                    display: flex;
                    width: 42%;
                }
                .header-right {
                    display: flex;
                    align-items: center;
                }
                input {
                    width: 100%;
                    height: 32px;

                    border: 1px solid lightgray;
                    border-top-left-radius: 18px;
                    border-bottom-left-radius: 18px;

                    text-indent: 10px;
                    flex: 1;
                }
                .search-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    color: grey;
                    border: 1px solid lightgray;
                    width: 60px;
                    height: 34px;
                    cursor: pointer;

                    border-left: none;
                    border-top-right-radius: 18px;
                    border-bottom-right-radius: 18px;
                }
                .search-icon:hover {
                    background-color: #e0e0e0;
                }
                .right-icons {
                    cursor: pointer;
                    margin-right: 20px;
                }
                .avatar-img {
                    width: 32px;
                    aspect-ratio: 1 / 1;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}