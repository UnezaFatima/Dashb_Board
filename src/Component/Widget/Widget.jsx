import { AccountBalanceWalletOutlined, MonetizationOn, ShoppingCartOutlined } from "@mui/icons-material";
import "./Widget.scss";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";


const Widget = ({ type }) => {
    let data;

    // temporary...
    const amount = 100
    const diff = 20

    switch(type){
        case "user":
        data= {
            title:"USERS",
            isMoney:false,
            link:"see all users",
            icon:<Person2OutlinedIcon className="icon"
        
            style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            /> ,
        };
        break;

        case "order":
        data= {
            title:"ORDERS",
            isMoney:false,
            link:"see all orders",
            icon: <ShoppingCartOutlined
            className="icon"
            style={{
                color: "goldenrod",
                backgroundColor: "rgba(300, 165, 32, 0.2)",
              }}/> ,
        };
        break;

        case "earning":
        data= {
            title:"EARNINGS",
            isMoney:true,
            link:"view net earnings",
            icon:<MonetizationOn className="icon"
            style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.2)",
              }}
            /> ,
        };
        break;

        case "balance":
        data= {
            title:"Balance",
            isMoney:true,
            link:"see details",
            icon:<AccountBalanceWalletOutlined className="icon"
            style={{
                color: "purple",
                backgroundColor: "rgba(128, 0, 130, 0.2)",
              }}
            /> 
        };
        break;
        default:
        break;
    }

  return (
    <div className="widget">
        <div className="left"> 
         <span className="title"> {data.title} </span>

         <span className="counter">{data.isMoney
          && "$"} {amount} </span>

         <span className="link">{data.link}</span>
        </div>
        <div className="right"> <div className="percentage positive">
          <ExpandLessIcon /> 
          {diff}  %
          {data.icon}      
        20% </div></div>
    </div>
  )
}

export default Widget