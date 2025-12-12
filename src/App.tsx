import { useState } from 'react'
import './App.css'
import AlertBox from './components/AlertBox/AlertBox.tsx'
import CharacterProfileCard from './components/CharacterProfileCard/CharacterProfileCard.tsx'
import PowerupDisplay from './components/PowerupDisplay/PowerupDisplay.tsx'
import type { AlertType, Character, Powerup } from './types/index.ts'

function App() {
  // set up useStates for character & powerup selection
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedPowerup, setSelectedPowerup] = useState<string>('');

  // selected character handler
  function selectCharacter(characterName: string): void {
    console.log(characterName);
    setSelectedCharacter(characterName);
  }
  // selected powerup handler
  function selectPowerup(powerupName: string): void {
    console.log(powerupName);
    setSelectedPowerup(powerupName);
  }

  // console.log to avoid netlify deploy issues with unused locals
  console.log(selectedCharacter, selectedPowerup);
  
  // set up useStates for alert
  const [alertType, setAlertType] = useState<AlertType>('Error');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // start game handler - it opens the modal alert below the start button conditionally
  function handleStart() {
    // determine which alert should show
    if (selectedCharacter.length !== 0 && selectedPowerup.length !== 0) {
      setAlertType('Success')
    } else {
      setAlertType('Error');
    }
    // open the alert
    setIsOpen(true);
    console.log(isOpen);
  };

  // close alert handler - parent passes down the function as an onclose prop to the alert component, triggered by a close element
  function closeAlert() {
    setIsOpen(false);
  }

  // define characters using Character Interface - man, woman, zombie, robot
  const man: Character = {
    id: 1,
    name: 'Brick',
    type: 'Human',
    avatar: '/character_malePerson_hold.png',
    selectedAvatar: '/character_malePerson_duck.png',
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
    selectedAvatar: '/character_femalePerson_shove.png',
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
    selectedAvatar: '/character_zombie_slide.png',
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
    selectedAvatar: '/character_robot_behindBack.png',
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
        <CharacterProfileCard character={man} onSelect={selectCharacter} isSelected={selectedCharacter === man.name}/>
        <CharacterProfileCard character={woman} onSelect={selectCharacter} isSelected={selectedCharacter === woman.name}/>
        <CharacterProfileCard character={zombie} onSelect={selectCharacter} isSelected={selectedCharacter === zombie.name}/>
        <CharacterProfileCard character={robot} onSelect={selectCharacter} isSelected={selectedCharacter === robot.name}/>
      </div>

      <h2>Choose your Powerup</h2>
      {/* powerups carousel */}
      <section className='w-full overflow-x-auto scroll-smooth snap-x snap-mandatory' aria-label='Select your powerup'>
        <div className='flex gap-x-4 mx-12 py-5'>
          <PowerupDisplay powerup={antidote} onSelect={selectPowerup} isSelected={selectedPowerup === antidote.name}/>
          <PowerupDisplay powerup={book} onSelect={selectPowerup} isSelected={selectedPowerup === book.name}/>
          <PowerupDisplay powerup={coffee} onSelect={selectPowerup} isSelected={selectedPowerup === coffee.name}/>
          <PowerupDisplay powerup={keycard} onSelect={selectPowerup} isSelected={selectedPowerup === keycard.name}/>
          <PowerupDisplay powerup={paintbrush} onSelect={selectPowerup} isSelected={selectedPowerup === paintbrush.name}/>
          <PowerupDisplay powerup={spatula} onSelect={selectPowerup} isSelected={selectedPowerup === spatula.name}/>
        </div>
      </section>
      {/* start game button */}
      <button className='start-button text-2xl rounded-3xl w-fit self-center py-4 px-8 bg-brick text-beige font-bold' onClick={handleStart}>START GAME</button>

      {/* conditional alert popup */}
      {/* use isOpen to determine if the div opens up at all */}
      {isOpen && (
        <div className='self-center w-[50vw]'>
          {/* use alertType to determine which alert opens */}
          {alertType === 'Success' ? (
            <AlertBox type='Success' message="You've successfully chosen your character and powerups. Game loading..." onClose={closeAlert} /> )
            :
            (<AlertBox type='Error' message="Attention you haven't chosen both a character and a powerup. Please select both to start the adventure." onClose={closeAlert}/>)
          }
        </div>
      )}
    </div>
  )
}

export default App
