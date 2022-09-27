import PropTypes from "prop-types";
import logo from "../logo.png";
function Header({ title, content }) {
  return (
    <div>
      <div className="flex justify-center align-center py-16" l>
        <img src={logo} alt="logo" className=" w-1/3 h-1/3"></img>
      </div>
      <div className=" flex justify-center align-center font-bold text-3xl lg:text-5xl xl:text-7xl py-8">
        {title}
      </div>
      <div className="flex justify-center align-center text-center text px-8 py-8">
        {content}
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: "Canberra Modle",
  content:
    "anberra Modern is an annual program of events showcasing Canberra’s unique mid and late twentieth century places and spaces. Our motto is 'Conservation Through Participation' and our innovative events aim to increase awareness of Canberra’s modernist character, heritage and uniqueness.Through event-based advocacy and engagement with the community, Canberra Modern aims to promote protection and appreciation of the places which make an irreplaceable contribution to Canberra’s historic urban and designed cultural landscape. ",
};
Header.prototype = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Header;
