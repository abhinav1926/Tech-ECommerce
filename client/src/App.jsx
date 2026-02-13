import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import CourseDetails from './pages/CourseDetails';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Route (Full Screen, No Navbar) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Public Routes (With Navbar & Container) */}
        <Route path="*" element={
          <div className="min-h-screen font-sans text-gray-900 bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/course/:id" element={<CourseDetails />} />
              </Routes>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
