import { useState } from 'react';
import { Activity } from '../app';
import ActivityCard from './activityCard';
import Profile from './profile';

interface Props {
    data: Activity[];
}

const Dashboard = ({ data }: Props) => {
    const [timeframe, setTimeframe] = useState('daily');

    const handleChange = (time: string) => {
        setTimeframe(time)
    }

    return (
        <main className='dashboard'>
            <Profile handleChange={handleChange} timeframe={timeframe}/>
            <section className='activity'>
                {data.map(activity => (
                    <ActivityCard key={activity.title} activity={activity} timeframe={timeframe} />
                ))}
            </section>
        </main>
    );
};

export default Dashboard;
