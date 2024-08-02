import profilePic from '../assets/153946.webp'

function Foodone(){

    return(
        <div class='card'>
            <img class='card-image' src={profilePic} alt='profile picture'></img>
            <h2 class='card-title'>Lumpia</h2>
            <p class='card-text'>Lumpia ingredients</p>
        </div>
        
    );
}

export default Foodone