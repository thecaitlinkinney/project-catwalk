import React from 'react';

//props should include one tuple ([value, freq]) and reviewCount (int)
const RatingBar = function RatingBar(props) {
  let value = props.ratingTuple[0];
  let frequency = props.ratingTuple[1];
  let reviewCount = props.reviewCount;
  let percentage = (frequency / reviewCount) * 100;

  return (
    <>
      <div className="rating-bar-container">
        {value} Stars
        <div className='rating-bar-outer'>
          <div className='rating-bar-inner-fill' style={{width: `${percentage}%`}}></div>
        </div>
        {frequency}
      </div>
      <br/>
    </>
  );
};


export default RatingBar;


