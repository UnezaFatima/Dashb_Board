import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
// import { DarkModeContext } from '../../Context/darkModeReducer';
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <>
    <div class="hamburger" id="hamburger">
    &#9776; 
</div>
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon  className='icon' onClick= {() => dispatch({type: "TOGGLE"})} />
          </div>

          <div className="item">
            <FullscreenExitIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon' />
            <div className="count er">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon' />
          </div>
          <div className="item">
          <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;