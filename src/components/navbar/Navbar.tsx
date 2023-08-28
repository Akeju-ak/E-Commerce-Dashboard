import "./navbar.scss";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Akej-admin</span>
      </div>
      <div className="links">
        <img src="/search.svg" alt="" className="links" />
        <img src="/app.svg" alt="" className="links" />
        <img src="/expand.svg" alt="" className="links" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Nuel</span>
        </div>
        <img src="/settings.svg" alt="" className="links" />
      </div>
    </div>
  );
}
