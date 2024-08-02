import profilePic from './assets/153946.webp'

function Card(){

    return(
        <div class='card'>
            <img class='card-image' src={profilePic} alt='profile picture'></img>
            <h2 class='card-title'>Lumpia</h2>
            <p class='card-text'>Lumpia ingredients</p>
        </div>
        
    );
}

export default Card