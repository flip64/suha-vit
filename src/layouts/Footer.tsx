import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-nav-area" id="footerNav">
        <div className="suha-footer-nav">
          <ul className="h-100 d-flex align-items-center justify-content-between ps-0 d-flex rtl-flex-d-row-r">
            <li><Link to="/home"><i className="ti ti-home"></i>Home</Link></li>
            <li><Link to="/message"><i className="ti ti-message"></i>Chat</Link></li>
            <li><Link to="/cart"><i className="ti ti-basket"></i>Cart</Link></li>
            <li><Link to="/settings"><i className="ti ti-settings"></i>Settings</Link></li>
            <li><Link to="/pages"><i className="ti ti-heart"></i>Pages</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;