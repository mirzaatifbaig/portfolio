    import {Sun as ReactIcon} from "lucide-react";
    import ExpenseTracker from '@/assets/img/expense-tracker.webp'
    import Dashboard2 from '@/assets/img/dashboard2.webp'
    import RecipeApp from '@/assets/img/recipe-app.webp'
    import HabitTracker from '@/assets/img/habit tracker.webp'
    import JobTracker from '@/assets/img/job-tracker.webp'
    import CheatSheetHub from '@/assets/img/cheatsheet-hub.webp'
    import ProductCarousel from '@/assets/img/product-carousel.webp'
    import ProductivityDashboard from '@/assets/img/productivity-dashboard.webp'
    import InfiniteScrollingApp from  '@/assets/img/infinite-scroll-list.webp'
    import ReactQueryApp from '@/assets/img/react-query.webp'
    import TodoAppSimple from '@/assets/img/todo-app-simple.webp'
    import StylingApp from '@/assets/img/styling.webp'
    import PersistentLoginApp from '@/assets/img/reactjs-persist-login.webp'
    import JWTApp from '@/assets/img/authentication.webp'
    import Apis from '@/assets/img/apis.webp';
    import MazeGenerator from '@/assets/img/maze-generator.webp';
    import SkillSharing from '@/assets/img/skill-sharing.webp';
    import TicTacToe from '@/assets/img/tic-tac-toe.webp';
    import Zustand from '@/assets/img/zustand.webp';
    import JSGame from '@/assets/img/js-game.webp';

    import css3 from '@/assets/icons/css.svg?react'
    import nodedotjs from '@/assets/icons/nodedotjs.svg?react';
    import react from '@/assets/icons/react.svg?react';
    import framer from '@/assets/icons/framer.svg?react';
    import git from '@/assets/icons/git.svg?react';
    import reacthookform from '@/assets/icons/reacthookform.svg?react';
    import tailwindcss from '@/assets/icons/tailwindcss.svg?react';
    import html5 from '@/assets/icons/html5.svg?react';
    import reactquery from '@/assets/icons/reactquery.svg?react';
    import vite from '@/assets/icons/vite.svg?react';
    import javascript from '@/assets/icons/javascript.svg?react';
    import reactrouter from '@/assets/icons/reactrouter.svg?react';
    import zustand from '@/assets/icons/zustand.svg?react';

    export const projects = [
        {
            name: 'Expense Tracker',
            url: 'https://mirzaatifbaig.github.io/expense-tracker/',
            description: 'A ReactJS Expense Tracker app helps users manage and visualize their spending with a clean, interactive interface. It features real-time expense logging, category filtering, and dynamic charts for financial insights.',
            imageUrl: ExpenseTracker,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer ],
        },
        {
            name: 'Dashboard App',
            url: 'https://mirzaatifbaig.github.io/dashboard-app/',
            description: 'A ReactJS Expense Tracker app lets users add, edit, and delete daily expenses with ease. It includes category-based filtering, responsive charts, and a clean dashboard for financial overview.',
            imageUrl: Dashboard2,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer],
        },
        {
            name: 'Recipe App',
            url: 'https://mirzaatifbaig.github.io/recipe-app/',
            description: 'A ReactJS Recipe App allows users to browse, search, and save their favorite recipes with step-by-step instructions. It features ingredient filtering, image-rich cards, and a responsive, user-friendly interface.',
            imageUrl: RecipeApp,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer],
        },
        {
            name: 'Habit Tracker',
            url: 'https://mirzaatifbaig.github.io/habit-tracker/',
            description: 'A ReactJS Habit Tracker App helps users build and maintain daily routines by tracking habits over time. It includes progress visualization, streak counters, and a clean, calendar-based dashboard. Saving your time...',
            imageUrl: HabitTracker,
            svgs: [react, css3, reacthookform, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer],
        },
        {
            name: 'Job Tracker',
            url: 'https://mirzaatifbaig.github.io/job-tracker/',
            description: 'A ReactJS Job Tracker App helps users manage their job applications, interviews, and offers in one place. It features status filtering, notes, deadlines, and a clear dashboard to track progress and opportunities.',
            imageUrl: JobTracker,
            svgs: [react, reacthookform, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer],
        },
        {
            name: 'CheatSheet Hub',
            url: 'https://mirzaatifbaig.github.io/cheatsheet-hub/',
            description: 'A ReactJS Cheatsheet Hub App provides quick access to essential code snippets and commands across various technologies. It features categorized sheets, search functionality, and a clean, developer-friendly interface.',
            imageUrl: CheatSheetHub,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer],
        },
        {
            name: 'Product Carousel',
            url: 'https://mirzaatifbaig.github.io/product-carousel/',
            description: 'A ReactJS Product Carousel App displays a rotating selection of products in a visually engaging layout. It enhances product visibility and provides a smooth user experience for browsing items.',
            imageUrl: ProductCarousel,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer],
        },
        {
            name: 'Productivity Dashboard',
            url: 'https://mirzaatifbaig.github.io/productivity-dashboard/',
            description: 'A ReactJS Productivity Dashboard App centralizes key metrics and tasks to help users stay organized and focused. It offers a clear overview of daily activities and long-term goals in one place. For your...',
            imageUrl: ProductivityDashboard,
            svgs: [react, css3, reacthookform, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer],
        },
        {
            name: 'Infinite Scrolling',
            url: 'https://mirzaatifbaig.github.io/infinite-scrolling/',
            description: 'An Infinite Scrolling App using React Query dynamically loads more content as users scroll, eliminating the need for pagination. It enhances user experience by keeping data fetching smooth and  efficient.',
            imageUrl: InfiniteScrollingApp,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer, reactquery],
        },
        {
            name: 'React Query App ',
            url: 'https://mirzaatifbaig.github.io/react-query-app/',
            description: 'A React Query Job Posting App allows users to create and delete job listings with real-time updates.It communicates with a backend to persist data, ensuring all changes are reliably stored.React Query handles fetching, caching, and syncing the UI with server state efficiently.This app streamlines job management in a responsive, modern interface.',
            imageUrl: ReactQueryApp,
            svgs: [react, css3, reacthookform, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, framer, reactquery],
        },
        {
            name: 'Todo App Simple',
            url: 'https://mirzaatifbaig.github.io/todo-app-simple/',
            description: 'A Simple ReactJS Todo App helps users manage daily tasks with a minimal, intuitive interface.It allows adding, completing, and removing tasks to stay organized and focused. And has a button to switch themes. You can add todo items and checkboxes to organize, if you check an item it goes to the bottom so you know it has been completed',
            imageUrl: TodoAppSimple,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, javascript, framer],
        },
        {
            name: 'Styling App',
            url: 'https://mirzaatifbaig.github.io/styling-app/',
            description: "A Styling App built with ReactJS showcases the power of Tailwind CSS for rapid UI development. It features a variety of styled components and layouts to demonstrate utility-first design.The app serves as a visual reference for building clean, responsive interfaces. There's s a navbar a main section that has various listings and testimonials with an option to submit feedback.",
            imageUrl: StylingApp,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, javascript],
        },
        {
            name: 'Persistent Login App',
            url: 'https://mirzaatifbaig.github.io/persistent-login-app/',
            description: 'A Persistent Login App built with Zustand manages authentication state across sessions without external libraries.It stores user data in local storage and syncs it with the app state on loadThis approach ensures a lightweight, reactive login system with minimal boilerplate.',
            imageUrl: PersistentLoginApp,
            svgs: [react, css3, git, tailwindcss,  reacthookform,nodedotjs, vite, html5, reactrouter, javascript, framer, zustand],
        },
        {
            name: 'Persistent Login with JWT',
            url: 'https://mirzaatifbaig.github.io/persistent-login-with-jwt/',
            description: 'A JWT Persistent Login App uses access and refresh tokens to maintain secure user sessions.It communicates with a backend for authentication, token issuance, and protected route access.Refresh tokens are stored in HTTP-only cookies.',
            imageUrl: JWTApp,
            svgs: [react, css3, git, tailwindcss, reacthookform, nodedotjs, vite, html5, reactrouter, javascript, framer, reactquery, ],
        }, {
            name: 'Simple Newsfeed App',
            url: 'https://mirzaatifbaig.github.io/simple-newsfeed-app/',
            description: 'A ReactJS app that lets users search for news articles and displays them as clickable links using a public API. It demonstrates sending requests, handling responses, and rendering dynamic content. You can click on a news to open the source and read. ',
            imageUrl: Apis,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, reactquery, ],
        },
        {
            name: 'Complex Maze Generator',
            url: 'https://mirzaatifbaig.github.io/complex-maze-generator/',
            description: 'A JavaScript-based maze generator built using HTML and CSS, showcasing algorithmic pathfinding and maze construction in real time.',
            imageUrl: MazeGenerator,
            svgs: [ css3, git, nodedotjs, vite, html5, javascript, reactquery, ],
        },
        {
            name: 'Skill Sharing Platform',
            url: 'https://mirzaatifbaig.github.io/skill-sharing-platform/',
            description: 'A front-end app  that allows users to add, remove, and comment on shared skills using vanilla JavaScript, HTML, and CSS.',
            imageUrl: SkillSharing,
            svgs: [ css3, git,   nodedotjs,  html5,  javascript,   ],
        },
        {
            name: 'Tic Tac Toe Game',
            url: 'https://mirzaatifbaig.github.io/tic-tac-toe-game/',
            description: 'A classic Tic Tac Toe game built with ReactJS, demonstrating component structure, game state logic, and user interaction handling.',
            imageUrl: TicTacToe,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, javascript, ],
        },
        {
            name: 'Zustand State Showcase',
            url: 'https://mirzaatifbaig.github.io/zustand-state-showcase/',
            description: 'An experimental ReactJS app for testing and showcasing Zustand state management in various small interactive UI patterns.',
            imageUrl: Zustand,
            svgs: [react, css3, git, tailwindcss, nodedotjs, vite, html5, reactrouter, javascript, reactquery, ],
        },
        {
            name: 'JavaScript Platformer Game',
            url: 'https://mirzaatifbaig.github.io/javascript-platformer-game/',
            description: 'A 2D platformer game created with JavaScript, HTML, and CSS, featuring player movement, collisions, and interactive level elements.',
            imageUrl: JSGame,
            svgs: [ css3, git, nodedotjs, html5, javascript ],
        },
    ];