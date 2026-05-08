# Analytics Admission Dashboard

A full-stack analytics dashboard for managing and visualizing admission-related student data.

---

# Features

- Admission analytics dashboard
- Semester-wise readmitted student tracking
- Interactive charts and graphs
- FastAPI backend APIs
- React + Vite frontend
- SQLite database integration

---

# Tech Stack

## Backend
- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

## Frontend
- React
- Vite
- Tailwind CSS
- Recharts

---

# Project Structure

```bash
Admission2/
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── dashboard.db
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

---

# Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend URL:

```bash
http://127.0.0.1:8000
```

Swagger Docs:

```bash
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```bash
http://localhost:5173
```

---

# API Endpoint Example

```http
GET /api/admission/readmitted-students
```

---

# Dashboard Preview

- Admission Overview
- Semester-wise analytics
- Real-time chart visualization

---


