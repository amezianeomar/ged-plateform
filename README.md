# GED Pro - Engineering Document Control Platform

![Version](https://img.shields.io/badge/version-1.0.0--beta-blue.svg)
![Status](https://img.shields.io/badge/status-development-orange)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20Supabase%20%7C%20Tailwind-0f172a)

## 🏗 Project Overview

**GED Pro** is a specialized SaaS platform designed for Civil Engineering project management. It streamlines the lifecycle of technical documents, from submission to approval ("Visa" workflow), ensuring strict version control and role-based access security.

**Client:** Project Management Office (Civil Engineering)
**Lead Architect:** Omar Ameziane

---

## 🚀 Key Features

* **Centralized Dashboard:** Real-time analytics of project advancement and visa status distribution.
* **Visa Workflow Engine:** State-machine logic handling `PENDING` $\to$ `VSO` (Validé) / `VAO` (Validé avec réserves) / `REF` (Refusé).
* **Revision Control:** Automatic management of document indices (0, A, B) with superseded version locking.
* **Role-Based Access (RBAC):** Strict separation of concerns between Admin, Control Office, and Contractors via Row Level Security (RLS).

---

## 🛠 Tech Stack

### Frontend
* **Framework:** React 18 (Vite)
* **Styling:** Tailwind CSS v3 + Shadcn/UI (Radix Primitives)
* **Animations:** Framer Motion (Orchestrated entrance/exit animations)
* **Icons:** Lucide React

### Backend & Infrastructure
* **Database:** PostgreSQL (via Supabase)
* **Auth:** Supabase Auth (JWT)
* **Storage:** S3-compatible Blob Storage (for PDF/DWG files)
* **Security:** Database-level RLS policies.

---

## ⚡️ Getting Started

### Prerequisites
* Node.js 18+
* npm or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/ged-platform.git](https://github.com/your-username/ged-platform.git)
    cd ged-platform
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env.local` file in the root:
    ```env
    VITE_SUPABASE_URL=your_project_url
    VITE_SUPABASE_ANON_KEY=your_anon_key
    ```

4.  **Run Locally**
    ```bash
    npm run dev
    ```

---

## 📅 Roadmap

- [x] **Phase 1: Architecture & UI Shell** (Completed)
    - Static implementation of Dashboard and Data Grids.
    - Responsive Design & Dark Mode.
- [ ] **Phase 2: Backend Integration** (Current)
    - Supabase Client connection.
    - Real-time data fetching.
- [ ] **Phase 3: Visa Logic Implementation**
    - State mutation (Approval/Rejection logic).
    - File Upload handling.
- [ ] **Phase 4: Production Deployment**

---

*© 2026 Omar Ameziane. All Rights Reserved.*