import React from 'react';
import '../styles/Work.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Work extends React.Component {
  render() {
    return (
        <div id="work">
          <div className="lefty">
            <h1>hello</h1>
          </div>
          <div className="righty">
            <Carousel id="carousel" autoPlay>
              <div>
                <img src="http://wallpaperstock.net/autumn-sunset_wallpapers_25281_1280x720.jpg" alt="test"/>
              </div>
              <div>
                <img src="https://wallpaperaccess.com/full/1078291.jpg" alt="test"/>
              </div>
              <div>
                <img src="https://elevenews.com/wp-content/uploads/2018/02/brexit-iiea-header-16-9-1280x720.jpg" alt="test"/>
              </div>
            </Carousel>
          </div>
        </div>
    );
  }
}

export default Work;
