import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2>Our customer reviews:{reviews.length}</h2>
            <div className='all-reviews'>
                {
                    reviews.map(review => <Review key={review.id} reviews={review}></Review>)

                }
            </div>

        </div>
    );
};

export default Reviews;