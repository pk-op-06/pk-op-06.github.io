import PropTypes from 'prop-types';

const Badges = ({ data, title, variant = 'filled' }) => {
  return (
    <div id={title} className='badges'>
      <h1 className='container-title'>{title}</h1>
      <div className='container'>
        {(data || []).map(badge => (
          <span className={`chip ${variant}`} key={badge}>{badge}</span>
        ))}
      </div>
    </div>
  )
}

Badges.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  variant: PropTypes.string
};

export default Badges;