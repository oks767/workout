import Auth from '../assets/components/screens/auth/Auth';
import NewWorkout from '../assets/components/screens/new-workout/NewWorkout';
import Profile from '../assets/components/screens/profile/Profile';
import App from '../App';
import Exercise from '../assets/components/screens/exercise/Exercise';
import Workout from '../assets/components/screens/workout/Workout';
import ListWorkouts from '../assets/components/screens/workout/list/ListWorkouts';
import ExerciseLog from '../assets/components/screens/exercise-log/ExerciseLog';
export const routes = [
  {
    name: 'Home',
    path: '/',

    component: App,
    auth: true,
  },
  {
    name: 'Auth',
    path: '/auth',

    component: Auth,
    auth: false,
  },
  {
    name: 'new-workout',
    path: '/new-workout',

    component: NewWorkout,
    auth: true,
  },
  {
    name: 'profile',
    path: '/profile',

    component: Profile,
    auth: true,
  },
  {
    name: 'new-exercise',
    path: '/new-exercise',

    component: Exercise,
    auth: true,
  },
  {
    path: '/workout/:id',
    component: Workout,
    auth: true,
  },
  {
    path: '/workouts',
    component: ListWorkouts,
    auth: true,
  },
  {
    path: '/exercise/:id',
    component: ExerciseLog,
    isAuth: true,
  },
];
