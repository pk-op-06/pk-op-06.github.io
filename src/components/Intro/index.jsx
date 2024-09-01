import PropTypes from 'prop-types';

const Intro = ({ intro }) => {
  return (
    <div className="intro flex">
      <div className="image">
        <img src={intro.image} />
      </div>
      <div className="container">
        <div className="name">{intro.name}</div>
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