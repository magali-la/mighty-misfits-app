import './App.css'
import CharacterProfileCard from './components/CharacterProfileCard/CharacterProfileCard.tsx'
import PowerupDisplay from './components/PowerupDisplay/PowerupDisplay.tsx'
import type { Character } from './types/index.ts'

function App() {
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
  

  return (
    <div className='flex flex-col gap-9 my-10'>
      <div className='logotype'>
        <header>MIGHTY</header>
        <header className='small'>MISFITS</header>
      </div>

      {/* intro section */}
      <div className='intro-text'>
        <p>It's the year 2130... The world is in chaos! Zombies, robots, and humans live in rival factions. Four unlikely friends, the Mighty Misfits, must work together to recover the legendary Unity Crystals, uncover what caused the chaos, and fight to save what's left of civilization.</p>
        <p>Pick your hero and take on the apocalypse!</p>
      </div>

      <h1>Choose your character</h1>
      {/* characters grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-9 gap-x-6 mx-11'>
        <CharacterProfileCard character={man}/>
        <CharacterProfileCard character={woman}/>
        <CharacterProfileCard character={zombie}/>
        <CharacterProfileCard character={robot}/>
      </div>

      <h2>Choose your powerup</h2>
      {/* powerups grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-4 mx-20'>
        <PowerupDisplay/>
        <PowerupDisplay/>
        <PowerupDisplay/>
      </div>
      {/* start game button */}
      <button className='start-button text-2xl rounded-3xl w-fit self-center py-4 px-8 bg-brick text-beige font-bold'>START GAME</button>
    </div>
  )
}

export default App
