import './App.css'
import CharacterProfileCard from './components/CharacterProfileCard/CharacterProfileCard.tsx'
import PowerupDisplay from './components/PowerupDisplay/PowerupDisplay.tsx'

function App() {
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
        <CharacterProfileCard/>
        <CharacterProfileCard/>
        <CharacterProfileCard/>
        <CharacterProfileCard/>
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
