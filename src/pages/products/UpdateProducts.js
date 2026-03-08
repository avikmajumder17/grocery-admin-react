import { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

import 'datatables.net-dt/css/dataTables.dataTables.css';
import { AddProductModal } from "../../components/ui/modal/AddProductModal";

DataTable.use(DT);



export const UpdateProducts = () => {
  // eslint-disable-next-line
  const [tableData, setTableData] = useState([
    ['Tiger Nixon', '200', '20', "product.png", "product.png", "Yes", "No", "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
    ['Garrett Winters', '200', '20', "product.png", "product.png", "Yes", "No", "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"]
  ]);
  const [addProductModal, setAddProductModal] = useState(false);

  return (
    <>
      <main className="nxl-container">
        <div className="nxl-content">
          {/* [ page-header ] start */}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Update Product</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">Update Product</li>
              </ul>
            </div>
            <div className="page-header-right ms-auto">
              <div className="page-header-right-items">
                <div className="d-flex d-md-none">
                  <Link
                    to="/"
                    className="page-header-right-close-toggle"
                  >
                    <i className="feather-arrow-left me-2" />
                    <span>Back</span>
                  </Link>
                </div>
                <div className="dropdown filter-dropdown">
                  <Link
                    className="btn btn-md btn-light-brand"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0, 10"
                    data-bs-auto-close="outside"
                  >
                    <i className="feather-filter me-2" />
                    <span>Filter</span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="dropdown-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Role"
                          defaultChecked="checked"
                        />
                        <label
                          className="custom-control-label c-pointer"
                          htmlFor="Role"
                        >
                          Role
                        </label>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Team"
                          defaultChecked="checked"
                        />
                        <label
                          className="custom-control-label c-pointer"
                          htmlFor="Team"
                        >
                          Team
                        </label>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Email"
                          defaultChecked="checked"
                        />
                        <label
                          className="custom-control-label c-pointer"
                          htmlFor="Email"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Member"
                          defaultChecked="checked"
                        />
                        <label
                          className="custom-control-label c-pointer"
                          htmlFor="Member"
                        >
                          Member
                        </label>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Recommendation"
                          defaultChecked="checked"
                        />
                        <label
                          className="custom-control-label c-pointer"
                          htmlFor="Recommendation"
                        >
                          Recommendation
                        </label>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                    <Link to="/" className="dropdown-item">
                      <i className="feather-plus me-3" />
                      <span>Create New</span>
                    </Link>
                    <Link to="/" className="dropdown-item">
                      <i className="feather-filter me-3" />
                      <span>Manage Filter</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-md-none d-flex align-items-center">
                <Link
                  to="/"
                  className="page-header-right-open-toggle"
                >
                  <i className="feather-align-right fs-20" />
                </Link>
              </div>
            </div>
          </div>
          {/* [ page-header ] end */}
          {/* [ Main Content ] start */}
          <div className="main-content">
            <div className="bg-white p-4 rounded-2">
              <DataTable className="display">
                <thead>
                  <tr>
                    <th>Product Name</th>

                    <th>Price</th>

                    <th>Discount</th>

                    <th>Featured Image</th>

                    <th>Small Images</th>

                    <th>Featured Product</th>

                    <th>Best Seller</th>

                    <th>Product Description</th>

                    <th>Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((tableItem, index) => (
                    <tr key={index}>
                      <td>{tableItem[0]}</td>

                      <td>{tableItem[1]}</td>

                      <td>{tableItem[2]}</td>

                      <td>{tableItem[3]}</td>

                      <td>{tableItem[4]}</td>

                      <td>{tableItem[5]}</td>

                      <td>{tableItem[6]}</td>

                      <td>{tableItem[7]}</td>

                      <td><i onClick={() => setAddProductModal(!addProductModal)} className="bi product-update bi-pencil-square"></i></td>
                    </tr>
                  ))}
                </tbody>
              </DataTable>
            </div>
          </div>
          {/* [ Main Content ] end */}
        </div>
      </main>

      <AddProductModal addProductModal={addProductModal} setAddProductModal={setAddProductModal} />
    </>
  )
}