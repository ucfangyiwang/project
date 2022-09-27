import PropTypes from "prop-types";

function BuildingDetail({ building }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2
          className="card-title"
          dangerouslySetInnerHTML={{ __html: building.title.rendered }}
        ></h2>
        <p>
          from: {building.acf.year}
          <br />
          location:{building.acf.location},{building.acf.suburb}
        </p>
      </div>
    </div>
  );
}

BuildingDetail.propTypes = {
  building: PropTypes.object.isRequired,
};

export default BuildingDetail;
