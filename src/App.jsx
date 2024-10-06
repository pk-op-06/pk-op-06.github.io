// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './components/Intro';
import './App.css'

import { default as data } from './data';
import Intro from './components/Intro';
import About from './components/About';
import Description from './components/Description';
import Achievements from './components/Achievements';
import Badges from './components/Badges';
import { useEffect, useState } from 'react';
import { PlaybackContext } from './context/Playback';
import Playback from './common/Playback';

// audios
import summary from './assets/audios/summary.mp3';
import personal from './assets/audios/personal.mp3';
import skills from './assets/audios/skills.mp3';

function App() {
  const [audio, setAudio] = useState();

  useEffect(() => {
    console.log({ audio });
  }, [audio])

  return (
    <PlaybackContext.Provider value={{ audio, setAudio }}>
      <div className='mainContainer'>
        <Playback id={'summary'} src={summary} />
        <Intro intro={data.intro} />
        <About about={data.about} />
        <div className='inner-sec flex'>
          <div className='left'>
            <Description title={'projects'} data={data.projects} />
          </div>
          <div className='right'>
            <Badges title={'skills'} data={data.skills} audio={skills} />
            <Description title={'education'} data={data.education} />
            <Description
              title={'personal projects'}
              data={data.personal}
              id={'personal'}
              audio={personal}
            />
            <Achievements achievements={data.achievements}/>
            <Badges
              variant='outlined'
              title={'hobbies'} data={data.hobbies} />
          </div>
        </div>
      </div>
    </PlaybackContext.Provider>
  )
}

export default App
