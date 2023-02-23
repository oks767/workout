import { useState } from 'react';
import Header from './assets/components/layout/Header/Header';
import Layout from './assets/components/layout/Layout';

function App() {
  const [count, setCount] = useState(0);

  return <Layout></Layout>;
}

export default App;
