import TitlePage from './TitlePage.jsx';
import SignUpPage from './SignUpPage.jsx';
import UserSelectPage from './UserSelectPage.jsx';
import ProfileSettingsPage from './ProfileSettingsPage.jsx';
import ProfileEditorPage from './ProfileEditorPage.jsx';
import ManagePasswordPage from './ManagePasswordPage.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigate to='/profile' />} />
        <Route path='/title' Component={TitlePage} />
        <Route path='/signup' Component={SignUpPage} />
        <Route path='/userselect' Component={UserSelectPage} />
        <Route path='/profile' Component={ProfileSettingsPage} />
        <Route path='/profile-edit' Component={ProfileEditorPage} />
        <Route path='/manage-password' Component={ManagePasswordPage} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
