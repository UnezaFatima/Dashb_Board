import Navbar from '../Home/../../Navbar/Navbar.jsx';
import './Home.scss';
import  Widget from '../../../Component/Widget/Widget';
import Featured from '../../Featured/featured';
import Sidebar from '../../Sidebar/Sidebar';
import Chart from '../../Chart/chart';
import List from '../../Table/Table';
import './Home.scss';


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {/* <Table /> */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;








// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import "./home.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";
// import Table from '../../../Component/Table/Table.jsx';

// const Home = () => {
//   return (
    // <div className="home">
    //   <Sidebar />
    //   <div className="homeContainer">
    //     <Navbar />
    //     <div className="widgets">
    //       <Widget type="user" />
    //       <Widget type="order" />
    //       <Widget type="earning" />
    //       <Widget type="balance" />
    //     </div>
    //     <div className="charts">
    //       <Featured />
    //       <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
    //     </div>
    //     <div className="listContainer">
    //       <div className="listTitle">Latest Transactions</div>
    //       {/* <Table /> */}
    //       <Table />
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default Home;