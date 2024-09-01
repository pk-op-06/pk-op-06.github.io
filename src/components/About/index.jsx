import PropTypes from 'prop-types';

const About = ({ about }) => {
  return (
    <div className="about">
      {(about || []).map(ab => (
        <div className='row' key={ab.value}>
          <img src={ab.icon} alt={ab.alt} />
          {ab.type === 'link' ?
            <a target='_blank' href={ab.prefix + ab.value}>{ab.value}</a> :
            <span>{ab.value}</span>
          }
        </div>
      ))}
    </div>
  )
};

About.propTypes = {
  about: PropTypes.array
}

export default About;