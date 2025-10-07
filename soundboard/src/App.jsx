import { useState } from 'react'
import './App.css'
import { SoundButton } from './SoundButton.1';
import { useEffect } from 'react';

const sounds = 
[
  {
   "url": "sounds/amogus.mp3",
   "name": "Amogus"
  },
  {
   "url": "sounds/glorp.mp3",
   "name": "Glorp"
  },
  {
   "url": "sounds/aughhhh.mp3",
   "name": "Aughhhh"
  },
  {
   "url": "sounds/bruh.mp3",
   "name": "Bruh"
  },
  {
   "url": "sounds/CTPD.mp3",
   "name": "CTPD"
  },
  {
   "url": "sounds/discord.mp3",
   "name": "Discord"
  },
  {
   "url": "sounds/goofy.mp3",
   "name": "Goofy"
  },
  {
   "url": "sounds/haha.mp3",
   "name": "Haha"
  },
  {
   "url": "sounds/huh.mp3",
   "name": "Huh"
  },
  {
   "url": "sounds/oiia.mp3",
   "name": "Oiia"
  },
  {
   "url": "sounds/prd.mp3",
   "name": "Prd"
  },
  {
   "url": "sounds/prd2.mp3",
   "name": "Prd 2"
  },
  {
   "url": "sounds/trubka.mp3",
   "name": "Trubka"
  },
  {
   "url": "sounds/vine.mp3",
   "name": "Vine"
  },
  {
   "url": "sounds/scooby.mp3",
   "name": "Scooby"
  },
  {
   "url": "sounds/phone.mp3",
   "name": "Phone"
  },
  {
   "url": "sounds/rizz-sound-effect.mp3",
   "name": "Rizz"
  },
  {
   "url": "sounds/cr-brrr.mp3",
   "name": "CR brrr"
  }
 ]

function getLocalStorage() {
  const counter = parseInt(localStorage.getItem("counter"))
  if (Number.isSafeInteger(counter)) {
    return counter
  } else {
    console.log('notsafe')
    return 0
  }
}


function App() {
  const [counter, setCounter] = useState(getLocalStorage())
  const handleClick = () => {setCounter(counter + 1)}


  const content = sounds.map((sound)=> {
    return <SoundButton key={sound.name} title={sound.name} audioSrc={"https://materialy.jakub.dev/soundboard-api/" + sound.url} clickFunc={handleClick}></SoundButton> 
  }) 

 
  return (
    <>
      <p>{counter} {localStorage.setItem("counter", counter)}</p>
      {content}
      
    </>
  )
}

export default App
