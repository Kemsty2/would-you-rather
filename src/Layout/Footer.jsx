import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer_in_clearfix">
        <div className="container">
          <p>© 2020 King Kemsty</p>
          <ul>
            <li>
              <a
                href="http://kingkemsty.me"
                className="animated_link"
                target="_parent"
              >
                King Kemsty
              </a>
              <a href="https://icons8.com/icon/zRnXoUxTmY2M/poll-vertical" className="ml-3" target="_parent">Poll Vertical icon by Icons8</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
