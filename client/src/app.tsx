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

const App = () => <Dashboard data={data} />;

export default App;
