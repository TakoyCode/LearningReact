import profilePic from './assets/GOAT2.png'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Audun</h2>
            <p className='card-text'>I study programming and play a lot of auto battler games</p>
        </div>
    );
}

export default Card