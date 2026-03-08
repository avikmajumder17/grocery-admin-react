import { Link } from "react-router-dom";

export const NavigationMenu = () => {
    return (
        <nav className="nxl-navigation">
            <div className="navbar-wrapper">
                <div className="m-header">
                    <Link to="/" className="b-brand w-100">
                        {/* ========   change your logo hear   ============ */}
                        <img
                            src="../../assets/images/logo.svg"
                            alt=""
                            className="logo logo-lg w-100"
                        />
                        <img
                            src="../../assets/images/logo-light.png"
                            alt=""
                            className="logo logo-sm"
                        />
                    </Link>
                </div>
                <div className="navbar-content">
                    <ul className="nxl-navbar">
                        <li className="nxl-item nxl-caption">
                            <label>Navigation</label>
                        </li>
                        <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link" end>
                                <span className="nxl-micon">
                                    <i className="feather-airplay" />
                                </span>
                                <span className="nxl-mtext">Dashboards</span>
                            </Link>
                        </li>

                        {/* <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-bar-chart" />
                                </span>
                                <span className="nxl-mtext">Reports</span>
                                <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span>
                            </Link>
                            <ul className="nxl-submenu">
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="reports-sales.html">
                                        Sales Report
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="reports-leads.html">
                                        Leads Report
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="reports-project.html">
                                        Project Report
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="reports-timesheets.html">
                                        Timesheets Report
                                    </Link>
                                </li>
                            </ul>
                        </li> */}

                        <li className="nxl-item nxl-hasmenu">
                            <Link to="/products" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-box" />
                                </span>
                                <span className="nxl-mtext">Products</span>
                                <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span>
                            </Link>
                            <ul className="nxl-submenu">
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="/products/add-product">
                                        Add Product
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="/products/update-product">
                                        Update Product
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="/products/delete-product">
                                        Delete product
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        
                        {/* <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-dollar-sign" />
                                </span>
                                <span className="nxl-mtext">Payment</span>
                                <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span>
                            </Link>
                            <ul className="nxl-submenu">
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="payment.html">
                                        Payment
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="invoice-view.html">
                                        Invoice View
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="invoice-create.html">
                                        Invoice Create
                                    </Link>
                                </li>
                            </ul>
                        </li> */}

                        {/* <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-users" />
                                </span>
                                <span className="nxl-mtext">Customers</span>
                                <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span>
                            </Link>
                            <ul className="nxl-submenu">
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="customers.html">
                                        Customers
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="customers-view.html">
                                        Customers View
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="customers-create.html">
                                        Customers Create
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                        
                        <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-settings" />
                                </span>
                                <span className="nxl-mtext">Settings</span>
                                {/* <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span> */}
                            </Link>
                        </li>

                        {/* <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-life-buoy" />
                                </span>
                                <span className="nxl-mtext">Help Center</span>
                                <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span>
                            </Link>
                            <ul className="nxl-submenu">
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="#!">
                                        Support
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="help-knowledgebase.html">
                                        KnowledgeBase
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="/docs/documentations">
                                        Documentations
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
