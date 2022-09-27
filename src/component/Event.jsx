import PropTypes from "prop-types";
import { useState } from "react";

import EventResult from "../component/event/EventResult";

function Event({ title }) {
  const [year, setyear] = useState("2022");
  return (
    <div>
      <div className="flex justify-center align-center  text-3xl py-8 lg:text-5xl  ">
        {title}
      </div>
      <div className="flex justify-center align-center flex-warp py-16">
        <button
          className="btn btn-outline btn-info"
          onClick={() => setyear("2022")}
        >
          2022 EVENTS
        </button>
        <button
          className="btn btn-outline btn-success"
          onClick={() => setyear("2020")}
        >
          2020 EVENTS
        </button>
        <button
          className="btn btn-outline btn-warning"
          onClick={() => setyear("2019")}
        >
          2019 EVENTS
        </button>
        <button
          className="btn btn-outline btn-error"
          onClick={() => setyear("2018")}
        >
          2018 EVENTS
        </button>
        <button
          className="btn btn-outline btn-info"
          onClick={() => setyear("2017")}
        >
          2017 EVENTS
        </button>
      </div>
      <div>
        <EventResult year={year} />
      </div>
    </div>
  );
}

Event.defaultProps = {
  title: "Canberra Event",
};
Event.propTypes = {
  title: PropTypes.string,
};
export default Event;
