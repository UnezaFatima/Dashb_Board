// import Sidebar from '../../Sidebar/Sidebar';
// import Navbar from '../../Navbar/Navbar';
import './List.scss';
import Datatable from '../../Datatable/Datatable';

function List() {
  return (
    <div className='list'> 
     {/* <Sidebar /> */}
     <div className="listContainer">
       {/* <Navbar /> */}
       <Datatable />
     </div>
    </div>
  )
}

export default List