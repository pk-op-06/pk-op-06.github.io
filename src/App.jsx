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

function App() {
  return (
    <div>
      <Intro intro={data.intro} />
      <About about={data.about} />
      <div className='inner-sec flex'>
        <div className='left'>
          <Description title={'projects'} data={data.projects} />
          <Description title={'education'} data={data.education} />
        </div>
        <div className='right'>
          <Badges title={'skills'} data={data.skills} />
          <Description title={'personal projects'} data={data.personal} />
          <Achievements achievements={data.achievements}/>
          <Badges
            variant='outlined'
            title={'hobbies'} data={data.hobbies} />
        </div>
      </div>
    </div>
  )
}

export default App
