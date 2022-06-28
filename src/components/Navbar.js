import "../App.css";

export default function Navbar() {
  let navLinks = document.querySelector(".navbar");
  function showMenu() {
    navLinks.style.right = "0";
  }
  function hideMenu() {
    navLinks.style.right = "-250px";
  }
  return (
    <header className="header container">
      <img src="/images/logo.svg" alt="logo" />
      <nav className="navbar">
        <button class="close" onClick={hideMenu}>
          <img
            onClick={hideMenu}
            src="./images/icon-close-menu.svg"
            alt="close menu"
          />
        </button>

        <ul className="navlinks">
          <li>
            <a className="arrow" href="#features">
              Features
              <span>
                <img src="./images/icon-arrow-down.svg" alt="expand menu" />
              </span>
            </a>

            <div className="dropdown dropdown--features">
              <a href="#todo">
                <img src="/images/icon-todo.svg" alt="todo icon" />
                Todo List
              </a>

              <a href="#">
                <img src="/images/icon-calendar.svg" alt="calender icon" />
                Calenders
              </a>

              <a href="#">
                <img src="/images/icon-reminders.svg" alt="reminder icon" />
                Reminders
              </a>

              <a href="#">
                <img src="/images/icon-planning.svg" alt="planning icon" />
                Planning
              </a>
            </div>
          </li>

          <li>
            <a className="arrow" href="#company">
              Company
              <span>
                <img src="./images/icon-arrow-down.svg" alt="expand menu" />
              </span>
            </a>
            <div className="dropdown company--dropdown">
              <a href="#">History</a>
              <a href="#">Our Team</a>
              <a href="#">Blog</a>
            </div>
          </li>

          <li>
            <a className="careers" href="#careers">
              Careers
            </a>
          </li>
          <li className="about">
            <a href="#about">About</a>
          </li>
        </ul>

        <div className="login--register">
          <button class="login">Login</button>
          <button class="register">Register</button>
        </div>
      </nav>
      <button class="hamburger" onClick={showMenu}>
        <img src="./images/icon-menu.svg" alt="menu" class="menu" />
      </button>
    </header>

    // <nav className="navbar">
    //   <a href="#home">Home</a>
    //   <a href="#home">Home</a>

    //   <div className="dropdown">
    //     <button className="dropbtn">
    //       Dropdown
    //       <span>
    //         <img src="./images/icon-arrow-down.svg" alt="expand menu" />
    //       </span>
    //     </button>
    //     <div className="dropdown--content">
    //       <a href="#">Link 1</a>
    //       <a href="#">Link 2</a>
    //       <a href="#">Link 3</a>
    //     </div>
    //   </div>
    // </nav>
  );
}
