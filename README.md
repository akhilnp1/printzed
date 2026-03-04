# Printing & Branding Agency Website
React JS + Django | Full Stack Project

---

## HOW TO RUN (Step by Step)

### BACKEND (Django)

1. Open terminal, go into backend folder:
   cd backend

2. Install Python packages:
   pip install -r requirements.txt

3. Set up the database:
   python manage.py makemigrations
   python manage.py migrate

4. Create admin login:
   python manage.py createsuperuser
   (enter username, email, password when asked)

5. Start Django server:
   python manage.py runserver

   → Django is now running at: http://localhost:8000
   → Admin panel at: http://localhost:8000/admin

---

### FRONTEND (React)

1. Open a NEW terminal, go into frontend folder:
   cd frontend

2. Install packages:
   npm install

3. Start React:
   npm start

   → Website opens at: http://localhost:3000

---

## PAGES
- Home       → http://localhost:3000/
- Services   → http://localhost:3000/services
- Team       → http://localhost:3000/team
- Dashboard  → http://localhost:3000/dashboard

## API ENDPOINTS
- GET/POST   http://localhost:8000/api/services/
- GET/POST   http://localhost:8000/api/portfolio/
- GET/POST   http://localhost:8000/api/team/
- GET/POST   http://localhost:8000/api/reviews/
