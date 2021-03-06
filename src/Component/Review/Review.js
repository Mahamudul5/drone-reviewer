import React from 'react';
import './Review.css'

const Review = (props) => {
    const { id, name, comments, rating } = props.reviews;
    return (
        <div className='reviews-card'>

            <h3>{name}<small>{id}</small>:
            </h3><p>{comments}</p>
            <h4>Rating:{rating}</h4>
        </div>
    );
};

export default Review;