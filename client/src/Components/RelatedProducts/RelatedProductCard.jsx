import React from 'react';
import axios from 'axios';

import AvgRatingStars from '../RatingsAndReviews/helpers/AvgRatingStars.jsx';
import ComparisonModal from './ComparisonModal.jsx';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    const { parentProductIdInfo } = this.props;
    this.state = {
      productIdInfo: '',
      parentProductIdInfo,
      featuredURL: '',
      openCompareModal: false,
      parentProductFeatures: '',
      comparedFeatures: '',
      salePrice: '',
      avgRating: '',
    };

    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.compareFeatures = this.compareFeatures.bind(this);
  }

  componentDidMount() {
    const { productId, parentProductIdInfo, AvgRatingStars } = this.props;
    const { currentProductFeatures, parentProductFeatures } = this.state;

    // Get the information for a related product
    axios.get(`/products/${productId}`)
      .then(({ data }) => {
        this.setState({
          productIdInfo: data,
          parentProductFeatures: parentProductIdInfo.features,
          currentProductFeatures: data.features,
        });

      })
      .catch((err) => {
        console.log('Error geting products detail in a relatived product', err);
      });

    // Get the feature picture and price for a related product
    axios.get(`/products/${productId}/styles`)
      .then(({ data }) => {
        const defaultProduct = data.find((product) => product['default?'] === true);
        let url;

        if (!defaultProduct) {
          url = data.photos[0].thumbnail_url;
          this.setState({
            salePrice: data.sale_price,
          });
        } else {
          url = defaultProduct.photos[0].thumbnail_url;
          this.setState({
            salePrice: defaultProduct.sale_price,
          });
        }
        if (!url) {
          this.setState({
            count: this.state.count + 1,
            featuredURL: '/images/default-placeholder.png',
          });
        } else {
          this.setState({
            count: this.state.count + 1,
            featuredURL: url,
          });
        }
      })
      .catch((error) => {
        console.log('Error fetching product styles in relatedProductCard', error);
      });

  }

  handleCompareClick() {
    const { openCompareModal, parentProductFeatures, currentProductFeatures } = this.state;
    this.setState({
      openCompareModal: !openCompareModal,
    });
    this.compareFeatures(parentProductFeatures, currentProductFeatures);
  }

  compareFeatures(parentFeature, productFeature) {
    let combinedObj = parentFeature.concat(productFeature);
    let combinedFeatures = combinedObj.filter((item) => item.value !== null);
    let output = [];
    let obj = {};
    combinedFeatures.forEach(item => {
      let obj1 = {};
      if (!obj[item.feature]) {
        obj[item.feature] = item.value;
        obj1['feature'] = item.feature;
        obj1['value'] = item.value;
        output.push(obj1);
      }


    });
    //output = Object.entries(obj);


    this.setState({
      comparedFeatures: output,
    });
  }

  render() {
    const { productIdInfo, featuredURL, salePrice, openCompareModal, comparedFeatures, parentProductIdInfo, avgRating } = this.state;

    return (
      <React.Fragment>
        <div className='cardWrapper'>
          <div className='card' id={productIdInfo.id}>
            <div className='CompareButton' onClick={this.handleCompareClick}><i className="far fa-star"></i></div>
            <div className='pic'>
              <img src={featuredURL} alt={productIdInfo.name}></img>
            </div>
            <div className='info'>
              <p className='category'>{productIdInfo.category}</p>
              <h3 className='title'>{productIdInfo.name}</h3>
              <p className='price'>${productIdInfo.default_price}</p>
              {salePrice ? <p className='price sale'>{salePrice}</p> : null}
              <AvgRatingStars avgRating={avgRating} id={productIdInfo.id} />
            </div>
          </div>
        </div>
        {openCompareModal && (
          <div>
            <ComparisonModal
              closeModal={this.handleCompareClick}
              parentProduct={parentProductIdInfo}
              compareProduct={productIdInfo}
              comparedFeatures={comparedFeatures}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default RelatedProductCard;