import PropTypes from 'prop-types';

const Description = ({ data, title }) => {
  const isProjects = title === 'projects';

  return (
    <div id={title} className={`description${!isProjects ? ' _sec': ''}`}>
      <h1 className='container-title'>{title}</h1>
      {(data || []).map((pro, indx) => (
        <div key={pro.subtitle + indx}>
          <div className='title'>{pro.title}</div>
          <div className='subtitle'>{pro.subtitle}</div>
          <div className='flex space-between'>
            <span className='secondary'>{pro.period}</span>
            <span className='secondary'>{pro.location}</span>
          </div>
          { isProjects && <div className='secondary'>Achievements/Tasks</div> }
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