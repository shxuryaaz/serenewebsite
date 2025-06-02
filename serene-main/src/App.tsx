import { useState, useEffect } from 'react';
import { Globe2, Menu, X } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Committees from './pages/Committees';
import Team from './pages/Team';
import Matrix from './pages/Matrix';
import Registration from './pages/Registration';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  // 🔥 LOG VISITOR TRAFFIC
  useEffect(() => {
    fetch('/.netlify/functions/logTraffic')
      .then(res => res.json())
      .then(data => console.log('Visitor logged:', data))
      .catch(err => console.error('Logging failed:', err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'committees':
        return <Committees />;
      case 'team':
        return <Team />;
      case 'matrix':
        return <Matrix />;
      case 'registration':
        return <Registration />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`min-h-screen ${currentPage === 'home' ? 'bg-transparent' : 'bg-white'}`}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
