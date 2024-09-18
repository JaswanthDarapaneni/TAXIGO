import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import ContactPage from './pages/ContactUsPage';
import AboutPage from './pages/About';

import './assets/css/style.css'
import NotFound from './parts/NotFound';
import LoginPage from './pages/Login';
import SignPage from './pages/Signup';
import PrivateRoute from './routes/PrivateRoutes';
import { isUserLoggedIn } from './authCheck/auth';
import Header from './parts/header';

const App = () => {
  // Replace this with your actual login status logic
  const isLoggedIn = isUserLoggedIn(); // Example: use state or context to manage this
  const mode = 'dark';
  return (
    <div className='dark bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900'>
      <Router>
      <Header loginStatus={isLoggedIn} mode={mode}/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Use PrivateRoute for signin and signup */}
          <Route 
            path="/signin" 
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <LoginPage />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/signup" 
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <SignPage />
              </PrivateRoute>
            } 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
