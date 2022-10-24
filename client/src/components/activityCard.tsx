import { Activity, Timeframe } from '../app';

interface Props {
    activity: Activity;
    timeframe: string;
}

const ActivityCard = ({ activity, timeframe }: Props) => (
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
                <button>
                    <img className='icon' src='/images/icon-ellipsis.svg' alt={`${activity.title} options`} />
                </button>
            </div>
            <div className='activity__details'>
                <h1>
                    {activity.timeframes[timeframe as keyof Timeframe].current}
                    hrs
                </h1>
                <h2>
                    {timeframe === 'daily'
                        ? 'Yesterday - '
                        : timeframe === 'weekly'
                        ? 'Last Week - '
                        : 'Last Month - '}
                    {activity.timeframes[timeframe as keyof Timeframe].previous}
                    hrs
                </h2>
            </div>
        </div>
    </div>
);

export default ActivityCard;
