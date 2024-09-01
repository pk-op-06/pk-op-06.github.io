import PropTypes from 'prop-types';

const Achievements = ({ achievements }) => {
  return (
    <div className="achievements">
      <h1 className='container-title'>Achievements</h1>
      {(achievements || []).map(({ title, description }) => (
        <div key={title}>
          <span className='title'>{title}</span>
          {description && <span className='description' dangerouslySetInnerHTML={{ __html: description }} />}
        </div>
      ))}
    </div>
  )
};

Achievements.propTypes = {
  achievements: PropTypes.array
}

export default Achievements;