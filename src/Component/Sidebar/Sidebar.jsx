import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import {Link} from "react-router-dom";
import { useContext } from "react";
// import { DarkModeContext } from "../../Context/darkModeReducer";
import { DarkModeContext } from "../../Context/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">

        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo"> Lamadmin </span>
        </Link>
        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"> MAIN </p>
          <li>
            <DashboardIcon className="icon"/>
            <span> Dashboard </span>
          </li>
          <p className="title"> LISTS </p>
          <Link to="/users" style={{textDecoration:"none"}}>
        <span className="logo"> Lamadmin </span>
        
          <li>
            <Person2OutlinedIcon className="icon" />
            <span> Users </span>
          </li>
          </Link>
          
          <Link to="/products" style={{textDecoration:"none"}}>
        <span className="logo"> Lamadmin </span>
       
          <li>
            <ProductionQuantityLimitsOutlinedIcon className="icon" />
            <span> Products </span>
          </li>
          </Link>
          <li>
            <ViewStreamOutlinedIcon className="icon" />
            <span> Orders </span>
          </li>
          <li>
            <DeliveryDiningIcon className="icon" />
            <span> Delivery </span>
          </li>
          <p className="title"> USEFUL </p>
          <li>
            <QueryStatsIcon className="icon" />
            <span> Status </span>
          </li>
          <li>
            <NotificationsPausedIcon className="icon" />
            <span> Notifications </span>
          </li>
          <p className="title"> SERVICE </p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span> System Health </span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span> Logs </span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span> Settings </span>
          </li>
          <p className="title"> USER </p>
          <li>
            <AccountCircleIcon className="icon" />
            <span> Profile </span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span> Logout </span>
          </li>
        </ul>
      </div>
    <div className="bottom"> 
       <div className="coloroption" onClick={() => dispatch({type: "LIGHT"})}> </div>  
       
       <div className="coloroption" onClick={() => dispatch({type: "DARK"})}> </div>
      
    </div>
    </div>
  );
};

export default Sidebar;
