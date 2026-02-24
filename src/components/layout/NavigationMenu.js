import { Link } from "react-router-dom";

export const NavigationMenu = ({ navToggle }) => {
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
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-airplay" />
                                </span>
                                <span className="nxl-mtext">Dashboards</span>
                                <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span>
                            </Link>
                            <ul className="nxl-submenu">
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="/">
                                        CRM
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="analytics.html">
                                        Analytics
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-cast" />
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
                        </li>

                        <li className="nxl-item nxl-hasmenu active">
                            <Link to="/products" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-cast" />
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
                        
                        <li className="nxl-item nxl-hasmenu">
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
                        </li>

                        <li className="nxl-item nxl-hasmenu">
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
                        </li>
                        
                        <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-settings" />
                                </span>
                                <span className="nxl-mtext">Settings</span>
                                <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span>
                            </Link>
                            <ul className="nxl-submenu">
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-general.html">
                                        General
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-seo.html">
                                        SEO
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-tags.html">
                                        Tags
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-email.html">
                                        Email
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-tasks.html">
                                        Tasks
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-leads.html">
                                        Leads
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-support.html">
                                        Support
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-finance.html">
                                        Finance
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-gateways.html">
                                        Gateways
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-customers.html">
                                        Customers
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-localization.html">
                                        Localization
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-recaptcha.html">
                                        reCAPTCHA
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link className="nxl-link" to="settings-miscellaneous.html">
                                        Miscellaneous
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nxl-item nxl-hasmenu">
                            <Link to="/" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-power" />
                                </span>
                                <span className="nxl-mtext">Authentication</span>
                                <span className="nxl-arrow">
                                    <i className="feather-chevron-right" />
                                </span>
                            </Link>
                            <ul className="nxl-submenu">
                                <li className="nxl-item nxl-hasmenu">
                                    <Link to="/" className="nxl-link">
                                        <span className="nxl-mtext">Login</span>
                                        <span className="nxl-arrow">
                                            <i className="feather-chevron-right" />
                                        </span>
                                    </Link>
                                    <ul className="nxl-submenu">
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-login-cover.html">
                                                Cover
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-login-minimal.html">
                                                Minimal
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-login-creative.html">
                                                Creative
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nxl-item nxl-hasmenu">
                                    <Link to="/" className="nxl-link">
                                        <span className="nxl-mtext">Register</span>
                                        <span className="nxl-arrow">
                                            <i className="feather-chevron-right" />
                                        </span>
                                    </Link>
                                    <ul className="nxl-submenu">
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-register-cover.html">
                                                Cover
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-register-minimal.html">
                                                Minimal
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link
                                                className="nxl-link"
                                                to="./auth-register-creative.html"
                                            >
                                                Creative
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nxl-item nxl-hasmenu">
                                    <Link to="/" className="nxl-link">
                                        <span className="nxl-mtext">Error-404</span>
                                        <span className="nxl-arrow">
                                            <i className="feather-chevron-right" />
                                        </span>
                                    </Link>
                                    <ul className="nxl-submenu">
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-404-cover.html">
                                                Cover
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-404-minimal.html">
                                                Minimal
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-404-creative.html">
                                                Creative
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nxl-item nxl-hasmenu">
                                    <Link to="/" className="nxl-link">
                                        <span className="nxl-mtext">Reset Pass</span>
                                        <span className="nxl-arrow">
                                            <i className="feather-chevron-right" />
                                        </span>
                                    </Link>
                                    <ul className="nxl-submenu">
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-reset-cover.html">
                                                Cover
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-reset-minimal.html">
                                                Minimal
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-reset-creative.html">
                                                Creative
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nxl-item nxl-hasmenu">
                                    <Link to="/" className="nxl-link">
                                        <span className="nxl-mtext">Verify OTP</span>
                                        <span className="nxl-arrow">
                                            <i className="feather-chevron-right" />
                                        </span>
                                    </Link>
                                    <ul className="nxl-submenu">
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-verify-cover.html">
                                                Cover
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-verify-minimal.html">
                                                Minimal
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link className="nxl-link" to="./auth-verify-creative.html">
                                                Creative
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nxl-item nxl-hasmenu">
                                    <Link to="/" className="nxl-link">
                                        <span className="nxl-mtext">Maintenance</span>
                                        <span className="nxl-arrow">
                                            <i className="feather-chevron-right" />
                                        </span>
                                    </Link>
                                    <ul className="nxl-submenu">
                                        <li className="nxl-item">
                                            <Link
                                                className="nxl-link"
                                                to="./auth-maintenance-cover.html"
                                            >
                                                Cover
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link
                                                className="nxl-link"
                                                to="./auth-maintenance-minimal.html"
                                            >
                                                Minimal
                                            </Link>
                                        </li>
                                        <li className="nxl-item">
                                            <Link
                                                className="nxl-link"
                                                to="./auth-maintenance-creative.html"
                                            >
                                                Creative
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nxl-item nxl-hasmenu">
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
                        </li>
                    </ul>

                    <div className="card text-center">
                        <div className="card-body">
                            <i className="feather-sunrise fs-4 text-dark" />
                            <h6 className="mt-4 text-dark fw-bolder">Downloading Center</h6>
                            <p className="fs-11 my-3 text-dark">
                                Duralux is a production ready CRM to get started up and running
                                easily.
                            </p>
                            <Link
                                to="https://www.themewagon.com/themes/Duralux-admin"
                                target="_blank"
                                className="btn btn-primary text-dark w-100"
                            >
                                Download Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
