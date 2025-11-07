# Find Nearby Ambulances and Doctors - JOIN Coding Challenge - Frontend (React) Backend (Node JS)
<img src="illustration.jpeg" width="100%" alt="Find Near By Ambulances or Doctors">

## Context

Accident cases are increasing more nowadays. So this app needs to display the list of all nearby ambulance services and doctors based on location with one click.


## Product Requirements

- [ ] I want to add, edit, update and delete the ambulances and doctors .
- [ ] I want to see a list of ambulances and doctors.
- [ ] I want to see the first 10 records by default, with the ability to paginate (10 records per page).
- [ ] I want to see a total ambulances and doctors in the app.
- [ ] For each record I want to see:
  - [ ] Title
  - [ ] Description
  - [ ] Location
  - [ ] Image of the ambulance or doctor, if available
- [ ] I want to see a loading state until the list is available.
- [ ] I want to see an error state if the list is unavailable.
- [ ] I want to see an empty state if there are no results.

## Your Mission

Create a React application that satisfies all must-have requirements above, plus any nice-to-have requirements you wish to include. Please keep your creative juices flowing for designs.

For that, you’ll need to make requests to your nodeJS API to get JSON content and print it on view.

You can use a in-memory JSON file for your CRUD operations or use SQLite to make the CRUD operations simple to match the use case.

You can use any boilerplate/approach you prefer (nextjs, create react app, ...), but try to keep it simple. We encourage you to use your favorite tools and packages to build a solid React application.

You can assume that you do not have to support legacy browsers. Feel free to use modern features such as fetch or flexbox.

Once you are done with the above requirements, please share your source code via github for review with a proper README. Perhaps also mention if there is some seed data involved to get started. We don't expect you to deploy your application but it in case you do you will receive extra brownie points.

## Tech Requirements
Front End 
- React
- Tests: Jest + React Testing Library
- Code Linter
- Use of functional components
- **Typescript is a must**
- CSSinJS is a plus: styled-components, styled-system, ...

Back End
- Node Js
- Code Linter
- Tests: Jest
- Typescript is a plus


## 🛠 Tech Stack Used

### Frontend (sos-frontend)
- **React** with TypeScript
- **ShadCN** for UI components
- **axios**: Fetch API
- **Linting**: ESLint + Prettier
- **Code Linter** : ESLint + Prettier
- **Functional components**: All components are built as functional components using React Hooks.
- **Code structured in a way that is scalable and easy to maintain like creating reusable components and services.**

### Backend (sos-server)
- **Node.js** with TypeScript
- **Framework**: Express.js
- **Database**: SQLite (or in-memory JSON)
- **Testing**: Jest
- **Linting**: ESLint + Prettier
- **API**: RESTful endpoints

## 📁 Project Structure

```
fullstack-coding-challenge/
├── sos-frontend/           # React TypeScript frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service functions
│   │   ├── types/          # TypeScript type definitions
│   │   └── lib/            # Utility functions
│   ├── public/
│   └── package.json
├── sos-server/             # Node.js TypeScript backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Data models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Express middleware
|   |   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   ├── tests/
│   └── package.json
├── illustration.jpeg
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- pnpm (for frontend) or npm
- Git

### 1. Clone the repository
```bash
git clone https://github.com/kumarmanishc/fullstack-coding-challenge.git
cd fullstack-coding-challenge
```

### 2. Setup Frontend
```bash
cd sos-frontend
pnpm i
npm run dev
```
The frontend will be available at `http://localhost:5173`

### 3. Setup Backend
```bash
cd sos-server
npm install
npm run dev
```
The backend will be available at `http://localhost:3000`

## Areas of Improvement
### 2. Setup Frontend
- Creating a shared component for forms to reduce redundancy, like TableMaster component common api error and loaded handling.
- Implement user authentication and authorization.
- Add search and filter functionality for ambulances and doctors.
- Logging and monitoring for better error tracking.
- Using state for management libraries like Redux or Zustand for larger applications for locations

### 2. Setup Backend
- Database is not persistent it's via state so every time server starts it will reset to default value.
- Implement user authentication and authorization.
- Add search and filter functionality for ambulances and doctors.
- Update APIs are not working properly for PUT method.
  