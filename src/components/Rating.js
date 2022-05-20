import { useState } from "react";

import Thankyou from "./Thankyou";

const Rating = () => {
  const rating = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(-1);
  const [hideRating, setHideRating] = useState(false);
  const [hideThankyou,setHideThankyou] = useState(true);
  const handleClick = () => {
    setHideRating(true);
    setHideThankyou(false);
  };
  return (
    <div>
      {!hideRating && (
        <div class="rating">
          <div className="star-container">
            <img src="../../images/icon-star.svg" alt="star-img" />
          </div>
          <div className="content">
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="rating-container">
              {rating.map((num, idx) => {
                return (
                  <div
                    className={`rating-btn ${
                      active === idx ? "rating-btn-active" : null
                    }`}
                    onClick={() => {
                      setActive(idx);
                    }}
                  >
                    <p>{num}</p>
                  </div>
                );
              })}
            </div>
            <div className="btn" onClick={handleClick}>
              <p>SUBMIT</p>
            </div>
          </div>
        </div>
      )}
      {!hideThankyou && <Thankyou rating={active}/>}
    </div>
  );
};

export default Rating;
