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
    // explicitly state the type of parameter that should be passed in the function
    onSelect: (characterName: string) => void;
    // prop to determine persistent color on selected character
    isSelected?: boolean;
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
    onSelect: (powerupName: string) => void;
    isSelected?: boolean;
    children?: React.ReactNode;
}

// Alert interface and props
// this defines the string options for the alert types
export type AlertType = 'Success' | 'Error';

// this defines the props sent down to the alert component
export interface AlertBoxProps {
    type: AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;
}