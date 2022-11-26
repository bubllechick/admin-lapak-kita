import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">LapakKita</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">List</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <ProductionQuantityLimitsIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <CreditCardOutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <InsertChartOutlinedOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>Notification</span>
                    </li>
                    <p className="title">Services</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Setting</span>
                    </li>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar
