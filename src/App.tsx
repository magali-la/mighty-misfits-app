import { useState } from 'react'
import './App.css'
import AlertBox from './components/AlertBox/AlertBox.tsx'
import CharacterProfileCard from './components/CharacterProfileCard/CharacterProfileCard.tsx'
import PowerupDisplay from './components/PowerupDisplay/PowerupDisplay.tsx'
import type { Character, Powerup } from './types/index.ts'

function App() {
  // set up useStates for alert
  const [showAlert, setShowAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // start game handler - it opens the modal alert below the start button conditionally
  function handleStart() {
    setIsOpen(true);
    setShowAlert(true);
  };

  // close alert handler - parent passes down the function as an onclose prop to the alert component, triggered by a close element
  function closeAlert() {
    setIsOpen(false);
    setShowAlert(false);
  }

  // define characters using Character Interface - man, woman, zombie, robot
  const man: Character = {
    id: 1,
    name: 'Brick',
    type: 'Human',
    avatar: '/character_malePerson_hold.png',
    strength: 9,
    speed: 5,
    wit: 3,
    specialAbility: "Smash!",
    abilityDesc: "Smashes through obstacles and foes alike, leaving a blazing trail of destruction in his wake."
  }

  const woman: Character = {
    id: 2,
    name: 'Valora',
    type: 'Human',
    avatar: '/character_femalePerson_attack1.png',
    strength: 6,
    speed: 9,
    wit: 8,
    specialAbility: "Flash Attack!",
    abilityDesc: "Darts through enemies with lightning speed, landing precise hits before they even know she’s there."
  }

  const zombie: Character = {
    id: 3,
    name: 'Munsch',
    type: 'Zombie',
    avatar: '/character_zombie_fall.png',
    strength: 6,
    speed: 4,
    wit: 2,
    specialAbility: "Ghoul Rush!",
    abilityDesc: "Spreads chaos by infecting enemies, making them weaker or turning them against each other."
  }

  const robot: Character = {
    id: 4,
    name: 'Cogsworth',
    type: 'Robot',
    avatar: '/character_robot_cheer0.png',
    strength: 7,
    speed: 5,
    wit: 9,
    specialAbility: "Iron Intellect!",
    abilityDesc: "Uncovers hidden clues and withstands damage like a tank. Enemies struggle to bring him down."
  }

  // define powerups using Powerups Interface
  const antidote: Powerup = {
    id: 1,
    image: '/genericItem_antidote.png',
    name: 'Antidote Boost',
    cost: 30,
    desc: 'Temporarily blocks infection effects and boosts resistance. Munsch hates this one.'
  }
  const book: Powerup = {
    id: 2,
    image: '/genericItem_book.png',
    name: 'History Lesson',
    cost: 15,
    desc: 'Grants a burst of wit. Your team suddenly remembers every sneaky trick in the book.'
  }
  const coffee: Powerup = {
    id: 3,
    image: '/genericItem_coffee.png',
    name: 'Expresso',
    cost: 40,
    desc: 'Supercharges speed and stamina. Caffeine has never been this effective at breaking into labs.'
  }
  const keycard: Powerup = {
    id: 4,
    image: '/genericItem_keycard.png',
    name: 'Stolen Keycard',
    cost: 40,
    desc: 'Unlocks sealed doors, restricted labs, and enemy storage rooms. Who needs stealth when you have this?'
  }
  const paintbrush: Powerup = {
    id: 5,
    image: '/genericItem_paintbrush.png',
    name: 'Art Smarts',
    cost: 25,
    desc: 'Covers cameras and sensors with chaotic graffiti, allowing the team to sneak past unnoticed.'
  }
  const spatula: Powerup = {
    id: 6,
    image: '/genericItem_spatula.png',
    name: 'Spatula of Doom',
    cost: 50,
    desc: 'A surprisingly deadly kitchen spatula that deals quick smack attacks. Agile heroes love this.'
  }
  

  return (
    <div className='flex flex-col gap-9 my-10 w-full'>
      <div className='logotype'>
        <header>MIGHTY</header>
        <header className='small'>MISFITS</header>
      </div>

      {/* intro section */}
      <div className='intro-text'>
        <p>It's the year 2130... The world is in chaos! Zombies, robots, and humans live in rival factions. Four unlikely friends, the Mighty Misfits, must work together to recover the legendary Unity Crystals, uncover what caused the chaos, and fight to save what's left of civilization.</p>
        <p>Pick your hero and take on the apocalypse!</p>
      </div>

      <h1>Choose your Character</h1>
      {/* characters grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-9 gap-x-6 mx-11'>
        <CharacterProfileCard character={man}/>
        <CharacterProfileCard character={woman}/>
        <CharacterProfileCard character={zombie}/>
        <CharacterProfileCard character={robot}/>
      </div>

      <h2>Choose your Powerup</h2>
      {/* powerups carousel */}
      <section className='w-full overflow-x-auto scroll-smooth snap-x snap-mandatory' aria-label='Select your powerup'>
        <div className='flex gap-x-4 mx-12 py-5'>
          <PowerupDisplay powerup={antidote}/>
          <PowerupDisplay powerup={book}/>
          <PowerupDisplay powerup={coffee}/>
          <PowerupDisplay powerup={keycard}/>
          <PowerupDisplay powerup={paintbrush}/>
          <PowerupDisplay powerup={spatula}/>
        </div>
      </section>
      {/* start game button */}
      <button className='start-button text-2xl rounded-3xl w-fit self-center py-4 px-8 bg-brick text-beige font-bold' onClick={handleStart}>START GAME</button>

      {/* conditional alert popup */}
      {showAlert && (
        <div className='self-center w-[50vw]'>
          <AlertBox type='Success' message="You've successfully chosen your character and powerups. Game loading..." onClose={closeAlert} />
          <AlertBox type='Error' message="Attention you haven't chosen both a character and a powerup. Please select both to start the adventure." onClose={closeAlert}/>
        </div>
      )}
    </div>
  )
}

export default App
