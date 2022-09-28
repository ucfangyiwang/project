import { useEffect, useState } from "react";
import BuildingDetail from "./BuildingDetail";
import PropTypes from "prop-types";
function BuildingResult({ building }) {
  const [buildings, setbuildings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchBuilding();
  }, []);

  const fetchBuilding = async () => {
    const response = await fetch(process.env.REACT_APP_BUILDING);

    const data = await response.json();
    setbuildings(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-clos-1 gap3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {buildings.map((building) => (
          <BuildingDetail key={building.id} building={building} />
        ))}
      </div>
    );
  } else {
    return <h3>Loading.....</h3>;
  }
}

BuildingResult.propTypes = {
  building: PropTypes.string.isRequired,
};

export default BuildingResult;
