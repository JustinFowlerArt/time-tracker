import { Activity } from '../app';
import ActivityCard from './activityCard';
import Profile from './profile';

interface Props {
    data: Activity[];
}

const Dashboard = ({ data }: Props) => (
    <main className='dashboard'>
        <Profile />
        <section className='activity'>
            {data.map(activity => (
                <ActivityCard key={activity.title} activity={activity} />
            ))}
        </section>
    </main>
);

export default Dashboard;
