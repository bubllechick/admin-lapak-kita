import "./single.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://minio.kinikumuda.id/propert-expo/user-profile/f5675a7072206bc8c4a367fc5beff2a5.jpg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane</h1>
                <div className="detailItem">
                  <span className="itemKey">Email :</span>
                  <span className="itemValue">Hilman@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemValue">Hilman@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemValue">Hilman@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country :</span>
                  <span className="itemValue">Hilman@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single
