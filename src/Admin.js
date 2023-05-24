import React from 'react';
import './assets/Style.css';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Dashboard from './admin/Dashboard';
import 'primeicons/primeicons.css';
import Master from './admin/layout/Master';
import Product from './admin/Product';
import Users from './admin/Users';
import Post from './admin/Post';
import ProtectedRoute from './Auth/ProtectedRoute';

function Admin() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/admin/"
            element={
              <ProtectedRoute>
                <Master />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="user" element={<Users />} />
            <Route path="post" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Admin;
