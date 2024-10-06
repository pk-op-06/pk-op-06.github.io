import PropTypes from 'prop-types';
import audio from '../../assets/audios/achievements.mp3';
import Playback from '../../common/Playback';

const Achievements = ({ achievements }) => {
  return (
    <div className="achievements">
      <Playback id={'achievements'} src={audio} />
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