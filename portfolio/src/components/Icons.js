import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JS from '../images/js.png';
import REACT from '../images/react.png';
import PS from '../images/ps.png';
import React from 'react';

class Icons extends React.Component {

  render() {
    return (
        <div>
          <ul id="list">
            <li className="list-item">
              <img className="ikoni" src={HTML} alt="html"/>
            </li>
            <li className="list-item">
              <img className="ikoni" src={CSS} alt="css"/>
            </li>
            <li className="list-item">
              <img className="ikoni" src={JS} alt="css"/>
            </li>
            <li className="list-item">
              <img className="ikoni" src={REACT} alt="css"/>
            </li>
            <li className="list-item">
              <img className="ikoni" src={PS} alt="css"/>
            </li>
          </ul>
        </div>
    );
  }
}

export default Icons;
