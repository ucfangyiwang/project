import PropTypes from "prop-types";
import BuildingResult from "../component/building/BuildingResult";

function Building({ title }) {
  return (
    <div>
      <div className="flex justify-center align-center  text-3xl py-8 lg:text-5xl  ">
        {title}
      </div>
      <div>
        <BuildingResult />
      </div>
    </div>
  );
}

Building.defaultProps = {
  title: "Building in Canberra",
};
Building.propTypes = {
  title: PropTypes.string,
};
export default Building;
