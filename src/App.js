import { Routes, Route } from 'react-router-dom';

import Catalog from './components/Catalog/Catalog'
import Header from './components/Header/Header';

import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';


import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Logout from './components/Logout/Logout';
import CreateBlog from './components/CreateBlog/CreateBlog'
import BlogDetails from './components/BlogDetails/BlogDetails';
import EditBlog from './components/EditBlog/EditBlog';
import BlogOwner from './components/common/BlogOwner';
import PrivateRoute from './components/common/PrivateRoute';

import './App.css';

function App() {
  return (
    <AuthProvider>

      <div className="App">
        <Header/>
      <BlogProvider>
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/create' element={
            <PrivateRoute>
              <CreateBlog />
            </PrivateRoute>
            } />
            <Route element={<BlogOwner />}>
              <Route path='/catalog/:blogId/edit' element={<EditBlog />} />
            </Route>
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:blogId' element={<BlogDetails />} />
          </Routes>
        </main>
      </BlogProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
