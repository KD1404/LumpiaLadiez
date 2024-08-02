import { Link } from 'react-router-dom';
import './pages.css';

function Home() {
    return (
        <div className = 'home'>
            <h1 style={{ fontFamily: 'Garet' }}>LumpiaLadiez</h1>
           <button className="button"><Link to = "/order" className="button">ORDER NOW</Link></button>
        </div>
    );
}

export default Home;
