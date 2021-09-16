import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import AvgRatingStars from './helpers/AvgRatingStars.jsx';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulOrReported: false
    };

    this.handleHelpfulOrReportClick = this.handleHelpfulOrReportClick.bind(this);
  }

  handleHelpfulOrReportClick(event) {
    event.preventDefault();
    let action = event.target.textContent;


    if (!this.state.helpfulOrReported) {

      if (action === 'Yes') {
        action = 'helpful';
      }

      console.log('action - handleHelpfulOrReportClick', action);

      this.setState({helpfulOrReported: true});

      console.log(this.props.review.review_id, action);

      this.props.submitHelpfulOrReport(this.props.review.review_id, action);

    }
  }

  render() {
    let review = this.props.review;
    let date = moment(review.date).format('LL');

    if (review.photos.length > 0) {
      var photos = review.photos.map((photo) => {
        return (
          <img src={photo.url} id={photo.id} width='20' height ='20' aria-label="customer's product"></img>
        );
      });
    } else {
      var photos = <></>;
    }


    return (
      <div className="review-tile">
        <div><AvgRatingStars avgRating={review.rating} /><span className="review-user-date">{review.reviewer_name}, {date}</span>
        </div>

        <div className="review-summary"><h2>{review.summary}</h2></div>
        <div>{review.body}</div>

        {review.recommend &&
          <div> Chekmark placeholder: I recommend this product</div>
        }

        {photos}


        {review.response &&
          <div className="review-response">Response<br></br>{review.response}</div>
        }

        <div>Helpful?
          <span className="helpful-or-report">
            <a href="" onClick={this.handleHelpfulOrReportClick}>
            Yes
            </a>
          </span>
          ({review.helpfulness}) |

          <span className="helpful-or-report">
            <a href="" onClick={this.handleHelpfulOrReportClick}>
            Report
            </a>
          </span>

          <br></br>

          {this.state.helpfulOrReported &&
          <span>Your feedback has been submitted</span>
          }

        </div>


      </div>
    );
  }
}

export default ReviewTile;