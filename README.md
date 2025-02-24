﻿# reservation-system-task
# Task Details

## Doctors Page
- Shows a listing of all available doctors and a way to edit and delete them.
- Has an Add button that redirects to the "Add A Doctor Page".
- The options to **Delete** and **Add** a doctor are **Mandatory** for the task.
- Editing is a **bonus**.

---

## Add A Doctor Page
- Enter all doctor info:
  - Doctor Image (Bonus)
  - Doctor Name - Email - Password - Phone Number (Mandatory)
  - Doctor working times: (Mandatory)
  - Doctor Branch - Starting Time - Ending time - Working Weekdays

  A doctor can work in more than one branch, and by clicking "Add Another Branch" another section with "Doctor Branch - Starting Time - Ending time - Working Weekdays" pops up to be filled out.

  In the case of entering incorrect info, the user can press "Clear Branch" on the bottom right corner, which will clear the previous Branch working details.

---

## Reservation Page
The way customer reservations work is hierarchical, meaning one choice from the top changes other choices at the bottom. Steps the customer takes:
1. **Select Session Type**.
2. **Select Date**:
   - If no branch or doctor is working on the selected date, it shows "No sessions available on that date".
3. **Select Branch**:
   - After selecting the date, the system only shows branches working on the chosen date.
4. **Select Time**:
   - The customer is only shown times where a doctor(s) is available at that specific branch and date.
5. **Select Doctor**:
   - The customer is only shown doctors available at the chosen date, branch, and time.

### Side Note:
- The price of the session on the top right corner changes after the customer chooses a "Session Type".

---

## Today's Sessions
- Displays every single reservation made.
- Must include data such as:
  - **Session Type**.
  - **Doctor Name**.
  - **Session Price**.
  - **Session Time**.
  - **Session Branch**.

### Bonus:
- Create a different page with the same layout called "All Sessions", which shows the exact same list of data but for **all sessions**, not just "Today's Sessions".

---

## General Info
### Nav-Bar:
- The nav-bar helps navigate between pages and demonstrate functionalities.
- No roles, logins, or signups exist on any page.

### Timing:
- Time works in **30-minute intervals** for both "Doctors Starting/Ending Time" and Reservation time.
  - A doctor can start working at 8:00, 8:30, 9:00, etc.
  - A patient can reserve a session at 8:00, 8:30, 9:00, etc.

### Branches:
There are three static branches (hard-coded into the website):
1. **Sheraton Branch**.
2. **New Cairo Branch**.
3. **Alexandria Branch**.
- These branches are the clinics a doctor could be assigned to.
- No doctor can be assigned to two or more branches on the same day.

---

## Sessions
There are three types of sessions available (hard-coded into the website):
1. **Recovery**: Costs 400 LE.
2. **Physiotherapy**: Costs 700 LE.
3. **Personal Trainer Session**: Costs 1000 LE.

### Notes:
- All doctors can be assigned to any session.
- Doctors cannot be assigned to two different sessions at the same time.
- Each session takes **30 minutes** to complete for simplicity.
