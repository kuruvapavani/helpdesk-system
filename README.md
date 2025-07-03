---

# We Analyse – Helpdesk System

A full-stack ticketing and helpdesk system built as part of the **We Analyse internship task**. The application includes separate dashboards and controls for different user roles (Admin, Technical, Operation, and User). Admins can manage users and teams, view logs, and oversee the overall performance, while users can create and track support tickets.

## 🔗 Live Demo

[Visit Live Site](https://we-analyze-helpdesk.netlify.app/)

## 📁 GitHub Repository

[GitHub Repo](https://github.com/kuruvapavani/helpdesk-system)

## ✨ Features

* Role-based dashboards for Admin, Technical, Operation, and User
* Ticket creation and approval flows
* Team assignment for resolving tickets
* User activity logs and login history
* Pagination, search, and filter for all data views
* Dynamic rendering based on role stored in localStorage
* Fully responsive with clean UI using Tailwind CSS

## 🛠️ Tech Stack

### Frontend

* React.js (CRA)
* Tailwind CSS
* React Router DOM
* Icons from `react-icons`

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose

## 🚀 Deployment

### Frontend: Netlify

### Backend: Render


## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kuruvapavani/helpdesk-system.git
cd helpdesk-system
```

### 2. Backend Setup

```bash
cd backend
npm install
node index.js
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Ensure that the backend is running before launching the frontend.

## 📄 Directory Structure

```
helpdesk-system/
├── backend/           # Node + Express API
│   └── routes/, models/, controllers/
├── frontend/          # React UI
│   └── components/, pages/, assets/
└── .env               # For both frontend and backend
```

## 🧪 Roles & Features Overview

| Role          | Access & Actions                               |
| ------------- | ---------------------------------------------- |
| **Admin**     | View all users, teams, tickets, settings, logs |
| **User**      | Create tickets, view personal ticket status    |
| **Technical** | View assigned tickets, update status           |
| **Operation** | Approve tickets, assign team                   |

## 📄 License

This project is created as part of an internship at **We Analyse** and is intended for educational and evaluation purposes only.

---
