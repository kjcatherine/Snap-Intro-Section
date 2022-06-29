import "../App.css";

export default function Navbar() {
  // const mainNav = document.querySelector(".main.nav");
  // const submenu = document.querySelectorAll(".submenu");
  // const hasSubmenu = document.querySelectorAll(".has-submenu");
  // const menuIcon = document.querySelector(".menu-icon");
  let navLinks = document.querySelector(".main-nav");
  function showMenu() {
    navLinks.style.right = "0";
  }
  function hideMenu() {
    navLinks.style.right = "-300px";
  }
  return (
    <header className="header container">
      <img src="/images/logo.svg" alt="logo" />

      <nav className="main-nav">
        <button onClick={hideMenu} class="close button">
          <img src="./images/icon-close-menu.svg" alt="close menu" />
        </button>
        <ul>
          <li>
            <a className="has-submenu" href="#">
              Features
              <span className="arrow">
                <img src="./images/icon-arrow-down.svg" alt="expand menu" />
              </span>
            </a>

            <ul className="submenu features">
              <li>
                <a href="#todo">
                  <span className="icon">
                    <img src="/images/icon-todo.svg" alt="todo icon" />
                  </span>
                  Todo List
                </a>
              </li>
              <li>
                <a href="#calendar">
                  <span className="icon">
                    <img src="/images/icon-calendar.svg" alt="calender icon" />
                  </span>
                  Calenders
                </a>
              </li>
              <li>
                <a href="#reminder">
                  <span className="icon">
                    <img src="/images/icon-reminders.svg" alt="reminder icon" />
                  </span>
                  Reminders
                </a>
              </li>
              <li>
                <a href="#planning">
                  <span className="icon">
                    <img src="/images/icon-planning.svg" alt="planning icon" />
                  </span>
                  Planning
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="has-submenu" href="#">
              Company
              <span className="arrow">
                <img src="./images/icon-arrow-down.svg" alt="expand menu" />
              </span>
            </a>
            <ul className="submenu company">
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                {" "}
                <a href="#">Blog</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="login--register">
          <button class="login">Login</button>
          <button class="register">Register</button>
        </div>
      </nav>
      <button onClick={showMenu} class="hamburger button">
        <img src="./images/icon-menu.svg" alt="menu" class="menu" />
      </button>
    </header>
  );
}
