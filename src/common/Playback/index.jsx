import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'
import { PlaybackContext } from '../../context/Playback';
import { NEXT_AUDIO } from '../../helpers';

const Playback = ({ id, src }) => {
    const [_, setTs] = useState(0);
    const { audio, setAudio } = useContext(PlaybackContext);

    const renderAudio = () => (
        <audio id={id} controls autoPlay style={{ display: 'none' }}>
            <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );

    const pausePrevAudio = () => {
        try {
            if (audio && !audio.paused) {
                audio.pause();
                audio.currentTime = 0; // Rewind track to beginning (if needed?)
            }
        } catch (err) {
            console.log('Error while pausing', err);
        }
    }

    // if no audio, play current
    // if audio and both ids matches, pause it.
    // if audio and diff ids, pause prev and play this.
    const toggle = (_id = id) => {
        const audioEl = document.getElementById(_id);
        if (audioEl) {
            if (audioEl.id === audio?.id) {
                audioEl.paused ? audioEl.play() : audioEl.pause();
                setAudio(audioEl);
                setTs(new Date().getTime());
                return;
            }

            pausePrevAudio();
            setAudio(audioEl);
            audioEl.play();

            audioEl.scrollIntoView({
                behavior: 'smooth'
            });

            audioEl.addEventListener('ended', function() {
                const nextAudio = NEXT_AUDIO[_id];
                if (nextAudio) {
                    const _next = document.getElementById(nextAudio);
                    if (_next) {
                        toggle(nextAudio);
                    } else {
                        pausePrevAudio()
                    }
                }
                setTs(new Date().getTime());
            });
        }
    }

    return (
        <div className='playback'>
            {renderAudio()}
            <div id={`${id}-control`} className='img-container' onClick={() => toggle()}>
                <img src={audio && audio.id === id ? audio.paused ? play : pause : play} />
            </div>
        </div>
    )
};


// export class PlaybackController {
//     constructor(id) {
//         this.id = id;
//     }

//     play() {
//         const myAudio = document.getElementById(this.id);
//         if (myAudio) {
//             const promise = myAudio.play();

//             const control = document.getElementById(`${this.id}-control`);
//             if (promise !== undefined) {
//                 promise.then(_ => {
//                     // Autoplay started!
//                     if (control) {
//                         control.classList.remove('scaleup');
//                     }
//                 }).catch(error => {
//                     // Autoplay was prevented.
//                     // Show a "Play" button so that user can start playback.
//                     console.log('autoplay prevented');

//                     // highlight autoplay button
//                     if (control) {
//                         control.classList.add('scaleup');
//                     }
//                 });
//             }              
//         }
//     }

//     pause() {
//         const myAudio = document.getElementById(this.id);
//         if (myAudio) {
//             myAudio.pause();
//         }
//     }
// }

Playback.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
    play: PropTypes.func,
    pause: PropTypes.func
}
  
export default Playback;