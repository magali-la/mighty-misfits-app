// import props from types file
import type { CharacterProfileCardProps } from "../../types";

// use destructuring to get the keys from the Character Interface, set type as props for parameters
export default function CharacterProfileCard({character: { id, name, type, avatar, strength, speed, wit, specialAbility, abilityDesc }, children}: CharacterProfileCardProps) {
    return (
        <div className="h-full border-3 bg-carrot/35 border-prussian shadow-2xl rounded-xl flex flex-col gap-4 text-xl items-center pt-0 p-6 md:p-10 focus:outline-4 focus:outline-offset-4 focus:outline-spruce/50 focus:bg-carrot/60 cursor-pointer" tabIndex={0}>
            {/* character avatar */}
            <div className="w-fit">
                <img src={avatar} alt="brick illustration, man with mustashe" />
            </div>
            {/* character name */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <h3>{name}</h3>
                <p>{type}</p>
            </div>
            {/* character info */}
            <div className="flex flex-col gap-2 w-full md:w-3/5 self-start">
                {/* strength */}
                <div className="flex flex-row justify-between items-center w-full">
                    <h4>Strength:</h4>
                    <p className="character-text">{strength}</p>
                </div>
                {/* speed */}
                <div className="flex flex-row justify-between items-center w-full">
                    <h4>Speed:</h4>
                    <p className="character-text">{speed}</p>
                </div>
                {/* wit */}
                <div className="flex flex-row justify-between items-center w-full">
                    <h4>Wit:</h4>
                    <p className="character-text">{wit}</p>
                </div>
            </div>
            {/* special abilities */}
            <div className="flex flex-col w-full">
                {/* ability name */}
                <h4>{specialAbility}</h4>
                {/* ability description */}
                <p>{abilityDesc}</p>
            </div>
        </div>
    )
}