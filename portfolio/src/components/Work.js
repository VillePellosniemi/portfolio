import React from 'react';
import '../styles/Work.scss';
import ImageGridList from './ImageGrid';

class Work extends React.Component {
  render() {
    return (
        <div id="work">
          <div className="lefty">
            <h1 id="skills">SKILLS & WORK</h1>
          </div>
          <div className="righty">
            <ImageGridList/>
          </div>
        </div>
    );
  }
}

export default Work;
