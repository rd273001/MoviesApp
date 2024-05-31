# MoviesApp

MoviesApp is a web application built with React, Vite, Tailwind CSS, and Redux. This application allows users to browse a list of movies, view their details, and mark movies as favorites. The app fetches movie data from an API and displays it in a responsive grid layout.

## Features

- Browse a list of movies with their details.
- View movie details such as title, rating, and a link to IMDb.
- Mark movies as favorites and manage the list of favorite movies.
- Responsive design with a clean, modern UI.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Redux**: A predictable state container for JavaScript apps.
- **React Router**: Declarative routing for React.

## Live Demo

You can view the live demo of the MoviesApp [here](https://movies-app3.netlify.app/).

## Setup & Installation

To get started with the MoviesApp, follow the instructions below.

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

### Clone the Repository

```bash
git clone https://github.com/your-username/movies-app.git
cd movies-app
```

### Install Dependencies
- Using npm:
```npm install```

- Using yarn:
```yarn install```

### Environment Variables
- Create a .env file in the root directory of the project and add the following environment variable:
MOVIES_API_URL=https://dummyapi.online/api/movies

### Running the Application
#### To start the development server, run:

- Using npm:
```npm run dev```

- Using yarn:
```yarn dev```

- The application will be available at (http://localhost:3000)