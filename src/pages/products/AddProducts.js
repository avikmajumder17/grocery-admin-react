import { Link } from "react-router-dom";

import "./Css/Products.css";

export const AddProducts = () => {
    return (
        <main className="nxl-container">
            <div className="nxl-content">
                {/* [ page-header ] start */}
                <div className="page-header">
                    <div className="page-header-left d-flex align-items-center">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Add Product</h5>
                        </div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item">Add Product</li>
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
                    <form className="bg-white p-4 rounded-2">
                        <div className="products-form row">
                            <div className="col-lg-4 mb-4">
                                <label htmlFor="" className="form-label">Product Name</label>

                                <input type="text" className="form-control" placeholder="Product name" />
                            </div>

                            <div className="col-lg-4 mb-4">
                                <label htmlFor="" className="form-label">Product Price</label>

                                <input type="number" className="form-control" placeholder="Product price" />
                            </div>

                            <div className="col-lg-4 mb-4">
                                <label htmlFor="" className="form-label">Product Discount (%)</label>

                                <input type="number" className="form-control" placeholder="Product discount" />
                            </div>

                            <div className="col-lg-6 mb-4">
                                <label htmlFor="" className="form-label">Product Featured Image</label>

                                <input type="file" />
                            </div>

                            <div className="col-lg-6 mb-4">
                                <label htmlFor="" className="form-label">Product Small Images</label>

                                <input type="file" />
                            </div>

                            <div className="col-lg-4 mb-4">
                                <label htmlFor="" className="form-label">Featured Product</label>

                                <div className="deowhirwerwe">
                                    <div className="checkbox-wrapper-59">
                                        <label className="switch">
                                            <input type="checkbox" />

                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-4">
                                <label htmlFor="" className="form-label">Best Seller</label>

                                <div className="deowhirwerwe">
                                    <div className="checkbox-wrapper-59">
                                        <label className="switch">
                                            <input type="checkbox" />

                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 mb-4">
                                <label htmlFor="" className="form-label">Product Description</label>

                                <textarea name="" className="form-control" placeholder="Type product description here" id=""></textarea>
                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="col-lg-2">
                                    <button className="btn btn-primary w-100 mt-4">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* [ Main Content ] end */}
            </div>
        </main>
    )
}