const Profile = () => (
    <header className='profile'>
        <div className='profile__info'>
            <img
                className='profile__photo'
                src='/images/image-jeremy.png'
            ></img>
            <div className='profile__details'>
                <h4>Report for</h4>
                <h2>Jeremy Robson</h2>
            </div>
        </div>
        <div className='profile__controls'>
            <button>Daily</button>
            <button>Weekly</button>
            <button>Monthly</button>
        </div>
    </header>
);

export default Profile;
