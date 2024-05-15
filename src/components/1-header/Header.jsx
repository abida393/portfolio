import { useState } from "react";
import "./header.css";
function Header() {
  const [showModel, setShowModel] = useState(false);
  return (
    <header>
      <div className="sample" />
      <button
        className="menu headerButton"
        onClick={() => {
          setShowModel(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode">
        <i className="fa-regular fa-moon"></i>
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="module">
            <li>
              <button
                onClick={() => {
                  setShowModel(false);
                }}
                className="closeButton"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
