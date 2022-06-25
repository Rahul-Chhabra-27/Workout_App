import { useEffect, useState} from 'react';
import Workout from '../component/Workout';

const Home = () => {
    const [workout,setWorkout] = useState([]);
    useEffect(() => {
        const fetchWorkout = async() => {
            const response = await fetch('/api/workout');
            const data = await response.json();

            if(response.ok) {
                setWorkout(data);
            }
        }
        fetchWorkout();
    },[])
    return(
        <div className="home">
            <div className="workouts">
                {workout.map(workout => <Workout key={workout._id} workout={workout} /> )}
            </div>
        </div>
    )
}
export default Home;