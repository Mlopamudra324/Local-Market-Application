import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import LogIn from './pages/login/LogIn';
import Register from './pages/register/Register'
import React from 'react';
import DashboardC from './components/customer/dashboard/DashboardC';
import HomeFurniture from './pages/customer/HomeFurniture';
import Fashion from './pages/customer/Fashion';
import Groceries from './pages/customer/Groceries';
import DashboardV from './components/vendor/dashboard/DashboardV';
import Products from './pages/vendor/products/Products';
import Vendors from './pages/vendor/vendors/Vendors';
import AddProducts from './pages/vendor/addProducts/AddProducts';
import AddOrder from './pages/customer/addOrder/AddOrder';
import Orders from './components/customer/dashboard/Orders';


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/logIn' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboardC' element={<DashboardC />} />
            <Route path='/homeFurniture' element={<HomeFurniture />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/grocery' element={<Groceries />} />
            <Route path='/dashboardV' element={<DashboardV />} />
            <Route path='/addProducts' element={<AddProducts />} />
            <Route path='/products' element={<Products />} />
            <Route path='/vendors' element={<Vendors />} />
            <Route path='/addOrder' element={<AddOrder />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>

          {/* <Routes>
            <Route path='/' element={<DashboardC />} />
            <Route path='/homeFurniture' element={<HomeFurniture />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/grocery' element={<Groceries />} />
          </Routes>

          <Routes>
            <Route path='/' element={<DashboardV />} />
            <Route path='/products' element={<Products />} />
            <Route path='/vendors' element={<Vendors />} />
            <Route path='/addProducts' element={<AddProducts />} />
          </Routes> */}

        </Router >

      </div >
    )
  }

}

export default App;
