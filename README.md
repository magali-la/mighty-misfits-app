# Mighty Misfits Game Concept

#### A character selection page for a conceptual adventure game called Mighty Misfits using React + TypeScript + TailwindCSS

<img src="./src/assets/misfitsdemo.gif" alt="preview video of the character selection screen with 4 characters: Brick, Valora, Munsch, & Cogsworth and powerup selection"/>


## Description
Mighty Misfits is a conceptual adventure game, where four unlikely friends tackle the apocalypse. It features character and powerup card components, with conditional image and persistent style rendering on click based off state and props

While this app currently offers tab navigation, future iterations will enhance accessibility by using more descriptive ARIA labels and sectioning to ensure information is understood by users using assistive technology. This project was completed as part of a lab assignment in Per Scholas Full Stack Engineering Bootcamp, to create basic components, manage state, and props.

Visit the live site: https://mightymisfits.netlify.app/ 

## Table of Contents
* [Tech Stack](#techstack)
* [Features](#features)
* [Design Process](#design)
* [Project Reflections](#reflections)
* [Deployment](#deployment)
* [About the Author](#author)

## <a name="techstack"></a>Tech Stack
### Languages
* TypeScript
* JavaScript
* CSS3
### Libraries
* React
* Tailwind CSS


## Features
1. Fully responsive character card grid layout across breakpoints 
2. Carousel of powerup choices with smooth scroll and snap behavior
3. Conditional styling based on props
4. Conditional alert box and styles based off alert type state for unfinished character/powerup selection
5. Character selection persistence with visual feedback based off state
6. Typescript interfaces for type-safe prop passing

## <a name="design"></a>Design Process
The design phase of the project included collecting assets for game characters, selecting colors, and choosing Google Fonts that aligned with the brand and product vision. These assets were plugged into my CSS as Tailwind theme directives and project for ease of use.

These game assets are from [Kenney](https://www.kenney.nl/), a Dutch website with free game assets:
* Kenney Toon Characters Pack
* Kenney Generic Items Pack

### Fonts used
* [Freckle Face](https://fonts.google.com/specimen/Freckle+Face) - Mighty Misfits Logotype
* [Kirang Haerang](https://fonts.google.com/specimen/Kirang+Haerang) - Headings
* [Bai Jamjuree](https://fonts.google.com/specimen/Bai+Jamjuree) - Body


## <a name="reflections"></a>Project Reflections
### Prop Handling
I handled props by defining interfaces for the shape of the data for each character or powerup, thinking of the props that would appear in the component. Then for optional props I used the `?` operator like for the `children` prop, which I hope to use in a future iteration to enhace the character card on select with an injected JSX element. I also added the ? operator during development for the callback function props and isSelected to avoid issues with noUnusedLocal typescript config settings and the netlify deploys.

### Component Considerations
When defining my component interfaces, I thought about the data that might be relevant for a game character selection page. I also thought about how I could integrate callback functions and props to get my cards to have conditional, persistent visual focus indicators like a different color when cards for selected or a different outline around the cards. This required defining custom styles to inject additional Tailwind styles in-line. I also had the idea to include  isSelected and onSelect props so that clicking would pass information up to the parent as an argument in the callback function. In keeping accessibility in mind, I adjusted the cards to include tab indices, with hopes to add more features.

### Ensuring Type Safety
By utilizing a `types.ts` file, I was able to create interfaces that defined the shape of data for a character or powerup object, as well as types for the Alert Box. This helped to ensure there were less mistakes when defining my characters and powerups, and while passing down props. Using a union type to define the alert type with two string options proved helpful for conditional styling at the component level. At some point in the development process, I accidentally lowercased these types and found myself with issues. This helps to make code more consistent.

### Challenges
One of the main challenges for the project was using an improper call for the the callback function. I was not calling it with an arrow function, so it was running the the callback function immediately instead of waiting for the click event for each character and powerup card. Another was trying to figure out how to destructure props in my function signatures while maintaining type safety and TypeScript best practices. The most rewarding part was being able to successfully implement persistent styling to make a dynamic and responsive UI based on user interactions.

## <a name="deployment"></a>Deployment
This app is hosted on Netlify
[Live Site](https://mightymisfits.netlify.app)

### Instructions to run the project locally:

1. Clone the repository
2. Run `npm install` to retrieve dev dependencies
3. Run `npm run dev` to open the server
4. Test the interactions, by using tab navigation on the characters and clicking to select a character. Watch as your chosen character's avatar updated with an action shot

## <a name="author"></a>About The Author
Hi, I'm Magali. I'm a design-minded engineer with strengths in front-end development, accessibility, and UX design. I enjoy building products with accessibility in mind so that everyone can have access to information. This project allowed me to reinforce skills with React, state management, and styling with Tailwind CSS.