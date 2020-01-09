import React from 'react';
import '../styles/Work.scss';
import sr from './scrollReveal';
import Icons from './Icons';
import ImagesGrid from './ImagesGrid';

class Work extends React.Component {

  // noinspection JSAnnotator
  props: Props;

  componentDidMount = () => {
    const config = {
      origin: 'bottom',
      duration: 1200,
      delay: 300,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    sr.reveal(this.refs.box3, config);
  };

  render() {
    return (
        <div id="work">
          <h1 id="skills">SKILLS & WORK</h1>
          <Icons/>
          <ImagesGrid/>
        </div>
    );
  }
}

export default Work;
