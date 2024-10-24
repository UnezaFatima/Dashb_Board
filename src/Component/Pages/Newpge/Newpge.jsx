import React, { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
// import Navbar from '../../Navbar/Navbar';
import './Newpge.scss';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Newpge = ({ inputs, title }) => {

   const [file, setFile] = useState(" ");

  //  console.log(file);
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top">
          <h1> {title} </h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'>  Image: <DriveFolderUploadOutlinedIcon className='icon' /> </label>
                <input type="file" id='file' onChange={ e=> setFile (e.target.files[0])} style={{ display: "none" }} />
              </div>
              {/* 
              <div className="formInput">
                <label> Name and surname </label>
                <input type="text" placeholder='John Doe' />
              </div>

              <div className="formInput">
                <label> Email </label>
                <input type="email" placeholder='john_doe@gmail.com' />
              </div>

              <div className="formInput">
                <label> Phone </label>
                <input type="text" placeholder='+1 234 567 89' />
              </div>

              <div className="formInput">
                <label> Password </label>
                <input type="password" placeholder='passwword' />
              </div>

              <div className="formInput">
                <label> Address </label>
                <input type="text" placeholder='Elton St. 216 NewYork' />
              </div>

              <div className="formInput">
                <label> Country </label>
                <input type="text" placeholder='USA' />
              </div> */}

              {inputs.map((input) => (

                <div className="formInput" key={input.id}>
                  <label> {input.label} </label>
                  <input type= {input.type} placeholder= {input.placeholder} />
                </div>
              ))}

              <button> Send </button>


            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newpge;