import PropTypes from 'prop-types';
import Playback from '../../common/Playback';

const Description = ({ data, title, id, audio }) => {
  const isProjects = title === 'work experience';

  return (
    <div id={title} className={`description${!isProjects ? ' _sec': ''}`}>
      {id === 'personal' && audio && <Playback id={id} src={audio}/>}
      <h1 className='container-title'>{title}</h1>
      {(data || []).map((pro, indx) => (
        <div className='container-inner-title' key={pro.subtitle + indx}>
          {pro.audio && <Playback id={pro.id} src={pro.audio} />}
          <div className='title'>{pro.title}</div>
          <div className='subtitle'>{pro.subtitle}</div>
          <span className='secondary'>{pro.period}</span>
          {isProjects && <div className='flex space-between'>
            <div className='secondary'>Achievements/Tasks</div>
            <span className='secondary'>{pro.location}</span>
          </div>}
          <ul>
            {(pro.achievements || []).map((ach, idx) => (
              <li key={`${title}-${idx}`} dangerouslySetInnerHTML={{ __html: ach }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
};

Description.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
}

export default Description;