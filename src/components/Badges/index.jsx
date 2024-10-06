import PropTypes from 'prop-types';
import Playback from '../../common/Playback';

const Badges = ({ data, title, variant = 'filled', audio }) => {
  return (
    <div id={`${title}-badge`} className='badges'>
      <h1 className='container-title'>{title}</h1>
      { audio && <Playback id={title} src={audio} /> }
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
  variant: PropTypes.string,
  audio: PropTypes.any
};

export default Badges;