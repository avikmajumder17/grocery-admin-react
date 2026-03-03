import { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

import 'datatables.net-dt/css/dataTables.dataTables.css';

DataTable.use(DT);



export const DeleteProducts = () => {
  // eslint-disable-next-line
  const [tableData, setTableData] = useState([
    [ 'Tiger Nixon', 'System Architect', `<i class="bi delete-product bi-trash3"></i>` ],
    [ 'Garrett Winters', 'Accountant', `<i class="bi delete-product bi-trash3"></i>` ],
	// ...
  ]);

  return (
    <main className="nxl-container">
      <div className="nxl-content">
        {/* [ page-header ] start */}
        <div className="page-header">
          <div className="page-header-left d-flex align-items-center">
            <div className="page-header-title">
              <h5 className="m-b-10">Delete Product</h5>
            </div>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Delete Product</li>
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
              <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                <div
                  id="reportrange"
                  className="reportrange-picker d-flex align-items-center"
                >
                  <span className="reportrange-picker-field" />
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
          <DataTable data={tableData} className="display">
            <thead>
              <tr>
                <th>Name</th>
                
                <th>Position</th>

                <th>Edit</th>
              </tr>
            </thead>
          </DataTable>
        </div>
        {/* [ Main Content ] end */}
      </div>
    </main>
  )
}