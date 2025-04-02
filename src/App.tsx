import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './layout/layout';
import Home from './pages/Home/Home';
import { HOME_PATH } from './routes/routes';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={`${HOME_PATH}/*`} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
