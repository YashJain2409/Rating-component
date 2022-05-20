const Thankyou = (props) => {
  console.log(props);
  return (
    <div className="thankyou">
      <div className="image-container">
        <img src="../../images/thank-you.svg" alt="star-img" />
      </div>
      <div className="rating-content">
        <div className="rating-tag">
          <p>You selected {props.rating + 1} out of 5</p>
        </div>
        <div className="thankyou-content">
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
