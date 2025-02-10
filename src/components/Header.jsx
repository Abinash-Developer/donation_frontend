import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  
  const signinUser = () => {
    navigate("/sign-in");
  };

  return (
    <>
      <header className="hearder_wrapper">
        <nav className="navbar navbar-expand-xl navbar-light">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="img/Logo.png" className="img-fluid" alt="" />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " aria-current="" href="#">
                    Explore
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="" href="#">
                    Maps
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="" href="#">
                    Campaigns
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="" href="#">
                    Media
                  </a>
                </li>
              </ul>
              <ul className="contact ms-auto">
                <li className="search-bar d-flex">
                  <div className="icon-input">
                    <input className="icon-input__text-field" type="text" />
                    <i className="fas fa-search">
                      <span>Search</span>
                    </i>
                  </div>
                </li>
                <li className="user-img">
                  <span className="user-icon-img" onClick={signinUser}>
                    <img src="img/Avatar.png" />
                  </span>
                  <ul className="login-type">
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Signup</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
