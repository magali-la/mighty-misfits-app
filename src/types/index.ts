// Character Profile interface & props
// this defines the structure of the character's data sent to the profile card from app.tsx
export interface Character {
    id: number;
    name: string;
    type: 'Human' | 'Zombie' | 'Robot';
    avatar: string;
    strength: number;
    speed: number;
    wit: number;
    specialAbility: string;
    abilityDesc: string;
}

// this defines the props sent down to the character profile card component
export interface CharacterProfileCardProps {
    character: Character;
    children?: React.ReactNode;
}

// Powerups Display interface and props
export interface Powerup {
    id: number;
    image: string;
    name: string;
    cost: number;
    desc: string; 
}

export interface PowerupDisplayProps {
    powerup: Powerup;
    children?: React.ReactNode;
}