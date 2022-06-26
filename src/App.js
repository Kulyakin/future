import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Search from './components/Search';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
        <Search/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
