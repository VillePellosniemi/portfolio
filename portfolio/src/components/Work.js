import React from 'react';
import '../styles/Work.scss';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Work extends React.Component {
  render() {
    return (
        <div id="work">
          <AliceCarousel>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className="yours-custom-class" />
            <img src="/img2" className="yours-custom-class" />
            <img src="/img3" className="yours-custom-class" />
            <img src="/img4" className="yours-custom-class" />
            <img src="/img5" className="yours-custom-class" />
          </AliceCarousel>
        </div>
    );
  }
}

export default Work;
