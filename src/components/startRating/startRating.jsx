import React from 'react'
import StarRatings from 'react-star-ratings';

const StartRating = () => {
    return (
        
        <StarRatings
          starRatedColor="#ffc501"
          numberOfStars={5}
          name='rating'
          rating={2.4}
          starSpacing="1px"
          starDimension="18px"
          starHoverColor="orange"
          isSelectable={true}
          isAggregateRating={true}
          changeRating={() => alert('f')}
        />

    )
}

export default StartRating;
