import { useState } from "react";
import "./header.css";
function Header() {
  const [showModel, setShowModel] = useState(false);
  return (
    <header>
      <div className="sample" />
      <button
        className="menu"
        onClick={() => {
          setShowModel(true);
        }}
      >
        silce icon
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
      <button>click</button>
      {showModel && (
        <div className="fixed">
          <ul className="module">
            <li>
              <button
                onClick={() => {
                  setShowModel(false);
                }}
              >
                click
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
