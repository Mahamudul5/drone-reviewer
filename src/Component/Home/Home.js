
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews] = useReviews();


    return (
        <div>
            <div className='home'>
                <div>
                    <h1>Fly like a Bird </h1>
                    <h1> with<span> Dji</span></h1>
                    <p>A leap forward in professional-quality aerial imaging, the Mavic 3 from DJI is their flagship drone that offers a dual-camera setup in a 3-axis gimbal. There's the 20MP wide-angle camera with 4/3" CMOS from legendary camera maker Hasselblad and a 12MP telephoto with 1/2" CMOS, 4K video, and 28x hybrid zoom.</p>
                    <button className='btn'>EXPLORE NOW</button>
                </div>
                <img src="./images/drone.jpg" alt="" />
            </div>
            <h1>Our Customer Reviews:({reviews.length})</h1>

            <div className='display-review'>
                {
                    reviews.map(review => <Review key={review.id} reviews={review}></Review>).slice(0, 3)
                }
            </div>
            <Link className='showAll' to='/Reviews'>see all</Link>
        </div>

    );
};

export default Home;