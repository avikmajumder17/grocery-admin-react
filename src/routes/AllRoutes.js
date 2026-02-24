import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/dashboard/Dashboard";
import { AddProducts, DeleteProducts, Products, UpdateProducts } from "../pages/products";

export const AllRoutes = ({ navToggle }) => {
  return (
    <div>
        <Routes>
          <Route path="/" element={ <Dashboard navToggle={navToggle} /> } />

          <Route path="products" element={ <Products /> } />
          <Route path="products/add-product" element={ <AddProducts /> } />
          <Route path="products/update-product" element={ <UpdateProducts /> } />
          <Route path="products/delete-product" element={ <DeleteProducts /> } />
        </Routes>
    </div>
  )
}
