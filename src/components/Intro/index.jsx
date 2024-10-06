import PropTypes from 'prop-types';
import Playback from '../../common/Playback';

const Intro = ({ intro }) => {  
  return (
    <div className="intro flex">
      <div className="image">
        <img src={intro.image} />
      </div>
      <div className="container">
        <div className="name">
          {intro.name}
          <Playback id='intro' src={intro.audio} />
        </div>
        <div className="role">{intro.role}</div>
        <div className="title-description">{intro.me}</div>
      </div>
    </div>
  )
};

Intro.propTypes = {
  intro: PropTypes.any
}

export default Intro;