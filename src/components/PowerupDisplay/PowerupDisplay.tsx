import type { PowerupDisplayProps } from "../../types";

export default function PowerupDisplay({powerup: { image, name, cost, desc }, onSelect}: PowerupDisplayProps) {
    return (
        <div className="w-[70vw] sm:w-[40vw] 2xl:w-[30vw] flex flex-col lg:flex-row shrink-0 items-center md:justify-between p-6 md:p-10 2xl:p-12 gap-14 border-3 text-xl bg-brick/30 border-spruce rounded-xl focus:outline-4 focus:outline-offset-4 focus:outline-brick/50 focus:bg-brick/50 cursor-pointer snap-center" tabIndex={0} onClick={() => onSelect(name)}>
            {/* powerup image */}
            <div className="shrink-0">
                <img className="lg:scale-110" src={image} alt="science beaker with green liquid"/>
            </div>
            {/* powerup info */}
            <section aria-label="powerup information" className="flex flex-col gap-4 items-between h-full">
                <h4>{name}</h4>
                <p className="text-xl"><span className="powerup-text">Cost:</span> {cost}XP</p>
                <p>{desc}</p>
            </section>
        </div>
    )
}