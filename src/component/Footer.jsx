import PropTypes from "prop-types";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer({ title, content }) {
  return (
    <div className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="text-xl md: text-2xl lg:text-4xl">{title}</div>
      <div className=" flex flex-warp ">
        <a href="https://www.instagram.com/canberra_modern/">
          <FaInstagram className="px-2 text-5xl" />
        </a>

        <a href="https://www.facebook.com/canberramodern/">
          <FaFacebook className="px-2 text-5xl" />
        </a>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}

Footer.defaultProps = {
  title: "Follow us",
  content: "Copyright © 2022 - All right reserved ",
};
Footer.prototype = {
  title: PropTypes.string,
  content: PropTypes.string,
};
export default Footer;
