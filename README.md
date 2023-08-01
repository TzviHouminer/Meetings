# Meeting Scheduler Web App

This is a React web application with Node.js as the backend service and MySQL as the database. The app allows employees to schedule and view meetings in the office.

## Technologies Used

- React v18.2
- Node.js v18.15.0
- MySQL v8.0.33

## Installation and Setup

1. Clone this repository.
2. Install the required dependencies using [npm/yarn/...] on the 'backend' and 'frontend' folders.
3. Import the sql file from the 'database' folder to a MySQL service (for example, MySQL workbench).
 
## Features

1. **Schedule a Meeting**: Employees can schedule a new meeting by providing details such as the meeting title, date, time, duration, and attendees.

2. **Meeting Details**: Clicking on a meeting on "Show Meeting" on the menu will display the meeting details, including attendees, date, time, and location according to the chosen team.

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone [repository_url]
```

2. Install dependencies for both the backend and frontend:

```bash
cd backend
npm install

cd ../frontend
npm install
```

3. Set up your MySQL server or provide the connection string in the backend configuration.

4. Run the backend server:

```bash
cd backend
npm start
```

5. Run the frontend development server:

```bash
cd frontend
npm start
```

6. Open your web browser and access the app at `http://localhost:3000`.

Now you have the Meeting Scheduler Web App up and running, allowing employees to easily schedule and manage meetings in the office. Enjoy the seamless meeting experience!
