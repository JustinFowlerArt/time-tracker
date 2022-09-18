import Dashboard from './components/dashboard';
import data from './data.json';

export type Activity = {
    title: string;
    timeframes: {
        daily: TimeTracked;
        weekly: TimeTracked;
        monthly: TimeTracked;
    };
};

type TimeTracked = {
    current: number;
    previous: number;
};

const App = () => (
    <div className='app'>
        <Dashboard data={data} />
    </div>
);

export default App;
