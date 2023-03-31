import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './assets/components/layout/Header/Header';
import Layout from './assets/components/layout/Layout';
import Button from './assets/components/ui/button/Button';
import styles from './App.module.scss';
import Statistics from './assets/components/screens/profile/statistics/Statistics';

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Layout bgImage='/images/home-bg.jpg'>
      <Button
        clickHandler={() => {
          navigate('/new-workout');
        }}
      >
        New
      </Button>
      <h1 className={styles.heading}>Exercises for the shoulders</h1>
      <Statistics />
    </Layout>
  );
}

export default App;
