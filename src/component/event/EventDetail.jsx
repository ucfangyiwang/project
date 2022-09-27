import PropTypes from "prop-types";

function EventDetail({ event }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2
          className="card-title"
          dangerouslySetInnerHTML={{ __html: event.title.rendered }}
        ></h2>
        <p>
          time: {event.acf.time}
          <br />
          date:{event.acf.date}
          <br />
          year:{event.acf.year}
        </p>
        <div className="card-actions justify-end ">
          <a href={event.link} target="_blank rel=noreferre">
            <button className="btn btn-primary">More information</button>
          </a>
        </div>
      </div>
    </div>
  );
}

EventDetail.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventDetail;
