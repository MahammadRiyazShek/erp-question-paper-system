# 📘 University ERP — Question Paper Access System

A full-fledged ERP web application enabling students to access university question papers, with a complete admin panel implementing all **four CRUD operations** (Create, Read, Update, Delete).

![AngularJS](https://img.shields.io/badge/AngularJS-1.8-red) ![Oracle SQL](https://img.shields.io/badge/Oracle-SQL-orange) ![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Live Demo
Deploy on **GitHub Pages** → enable Pages in repo Settings → Source: `main` branch → root.
Live URL pattern: `https://<your-username>.github.io/<repo-name>/`

## 🛠️ Tech Stack
- **Frontend:** AngularJS 1.8 (two-way binding, directives, controllers, services)
- **Backend:** Oracle SQL (PL/SQL stored procedures, sequences, triggers)
- **Storage:** Oracle DB (in production) / localStorage (in demo)

## ✨ Features
- 📊 **Dashboard** — real-time stats on total papers, courses, semesters
- 🔎 **Browse & Search** — filter papers by semester, year, code
- 🛠️ **Admin CRUD Panel** — Create / Read / Update / Delete question papers
- 🎯 **Role-based UI** — Student, Faculty, Admin views
- 📥 **PDF Download** simulation (BLOB ready)
- 💾 **Persistent state** via localStorage (drop-in Oracle REST connector)

## 📦 Files
- `index.html` — main AngularJS SPA
- `app.js` — AngularJS controller, CRUD logic
- `styles.css` — responsive styling
- `schema.sql` — Oracle DB schema + stored procedures
- `README.md` — this file

## ⚙️ Local Run
1. Clone repo
2. Open `index.html` in any browser (no build step required)

## 🌐 Deployment
**Option 1 — GitHub Pages (recommended, free):**
1. Push files to a new GitHub repo
2. Settings → Pages → Source: `main` / root → Save
3. App goes live in ~30s

**Option 2 — Netlify / Vercel:** drag-drop the folder → instant URL.

**Backend (Oracle):** run `schema.sql` in Oracle SQL Developer. Connect via Oracle REST Data Services (ORDS) or Node.js `oracledb` driver — replace `localStorage` calls in `app.js` with `$http.get('/api/papers')`.

## 📋 Database Schema
```sql
QUESTION_PAPERS(id PK, course, code, semester, year, description, file_url, created_at)
```
Stored procs: `sp_insert_paper`, `sp_update_paper`, `sp_delete_paper`

## 👤 Author
Developed as part of FullStack Development coursework demonstrating AngularJS + Oracle SQL integration.

## 📜 License
MIT
