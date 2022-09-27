import { useEffect, useState } from "react";
import EventDetail from "./EventDetail";
import PropTypes from "prop-types";
function EventResult({ year }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    const response = await fetch(
      "http://cm.beneb.com/wp-json/wp/v2/events/?per_page=50"
    );

    const data = await response.json();
    setEvents(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-clos-1 gap3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {events.map((event) => {
          if (event.acf.year === year) {
            console.log(event.acf.year);
            return <EventDetail key={event.id} event={event} />;
          }
        })}
      </div>
    );
  } else {
    return <h3>Loading.....</h3>;
  }
}

EventResult.propTypes = {
  year: PropTypes.string.isRequired,
};

export default EventResult;
