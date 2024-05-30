export const Menu = () => {
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <img
              className="img-logo"
              src="/images/lr-logo.svg"
              alt="Luna Ranjit"
            />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
          >
            <i className="ti-menu"></i>
          </button>
          <div className="collapse navbar-collapse text-center" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/write">
                  Writing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/speak">
                  Speaking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/collaborate">
                  Collaborating
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://twitter.com/LunaRanjit"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentcolor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038.0 9.341-5.003 9.341-9.334.0-.14.0-.282-.006-.422A6.685 6.685.0 0016 3.542a6.658 6.658.0 01-1.889.518 3.301 3.301.0 001.447-1.817 6.533 6.533.0 01-2.087.793A3.286 3.286.0 007.875 6.03 9.325 9.325.0 011.108 2.601a3.289 3.289.0 001.018 4.382A3.323 3.323.0 01.64 6.575v.045a3.288 3.288.0 002.632 3.218 3.203 3.203.0 01-.865.115 3.23 3.23.0 01-.614-.057 3.283 3.283.0 003.067 2.277A6.588 6.588.0 01.78 13.58 6.32 6.32.0 010 13.535 9.344 9.344.0 005.026 15z"></path>
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://lunaranjit.medium.com"
                  target="_blank"
                >
                  medium
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/books">
                  Alien
                </a>
              </li>
            </ul>
            <div className="search">
              <button id="searchOpen" className="search-btn">
                <i className="ti-search"></i>
              </button>
              <div className="search-wrapper">
                <form action="/search/" className="h-100">
                  <input
                    className="search-box pl-4"
                    id="search-query"
                    name="s"
                    type="search"
                    placeholder="Type and hit enter..."
                  />
                </form>
                <button id="searchClose" className="search-close">
                  <i className="ti-close text-dark"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
