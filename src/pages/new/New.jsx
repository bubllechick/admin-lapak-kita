import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";


const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");
  console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://www.freeiconspng.com/thumbs/camera-icon/analog-camera-for-ios-app-icon-full-size--33.jpg" }
              alt=""
              className="img"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={e => setFile(e.target.files[0])}
                  style={{ display: "none" }} />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              {/* <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="name..." />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="email@..." />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+ 62 ..." />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="address..." />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="country..." />
              </div> */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
