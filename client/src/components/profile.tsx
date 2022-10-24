interface Props {
    handleChange: (time: string) => void;
    timeframe: string;
}

const Profile = ({ handleChange, timeframe }: Props) => (
    <header className='profile'>
        <div className='profile__info'>
            <img
                className='profile__photo'
                src='/images/image-jeremy.png'
                alt='Profile photo'
            ></img>
            <div className='profile__details'>
                <h5>Report for</h5>
                <h4>Jeremy Robson</h4>
            </div>
        </div>
        <div className='profile__controls'>
            <button
                className={
                    timeframe === 'daily'
                        ? 'profile__controls_active'
                        : 'profile__controls_inactive'
                }
                onClick={() => handleChange('daily')}
            >
                Daily
            </button>
            <button
                className={
                    timeframe === 'weekly'
                        ? 'profile__controls_active'
                        : 'profile__controls_inactive'
                }
                onClick={() => handleChange('weekly')}
            >
                Weekly
            </button>
            <button
                className={
                    timeframe === 'monthly'
                        ? 'profile__controls_active'
                        : 'profile__controls_inactive'
                }
                onClick={() => handleChange('monthly')}
            >
                Monthly
            </button>
        </div>
    </header>
);

export default Profile;
