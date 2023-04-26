import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navItems = [
    {label: "Profile", link: '/profile'},
    {label: "Dashboard", link: '/dashboard'}
  ]
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard">
          MY-DASHBOARD
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item,index)=>
            <li key={index} className="nav-item">
              <a className="nav-link" href={item.link}>
                {item.label}
              </a>
            </li>)
            }
          </ul>
          <button className="btn btn-outline-light mx-3" onClick={handleClick}>
            LOG OUT
          </button>
        </div>
      </div>
    </nav>
  );
};
