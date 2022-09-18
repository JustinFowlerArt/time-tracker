import { Activity } from '../app';

interface Props {
    activity: Activity;
}

const ActivityCard = ({ activity }: Props) => (
    <div
        className='activity__card'
        style={{
            backgroundImage: `url(/images/icon-${activity.title
                .toLowerCase()
                .replace(/ /g, '-')}.svg)`,
        }}
    >
        <div className='activity__info'>
            <div className='activity__details'>
                <h3>{activity.title}</h3>
                <button><img className='icon' src='/images/icon-ellipsis.svg'></img></button>
            </div>
            <div className='activity__details'>
                <h1>{activity.timeframes.weekly.current}hrs</h1>
                <h4>Last Week - {activity.timeframes.weekly.previous}hrs</h4>
            </div>
        </div>
    </div>
);

export default ActivityCard;
