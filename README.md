# GED Pro - Civil Engineering Visa Matrix Platform

![Version](https://img.shields.io/badge/version-1.0.0--beta-blue.svg)
![Status](https://img.shields.io/badge/status-live-success)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20Supabase%20%7C%20Tailwind%20%7C%20Vercel-0f172a)
[![Visit Demo](https://img.shields.io/badge/Visit-Live%20Demo-blue?style=for-the-badge&logo=vercel)](https://ged-plateform.vercel.app/)

## 🏗 Project Overview

**GED Pro** is a specialized SaaS platform designed for high-stakes Civil Engineering projects. Unlike standard document storage, GED Pro implements a **Multi-Stakeholder Approval Matrix**, allowing distinct entities (Control Office, Architects, Client) to review the same document simultaneously with independent status tracking.

**Client:** Project Management Office (Civil Engineering)
**Lead Architect:** Omar Ameziane
**Live Demo:** [ged-plateform.vercel.app](https://ged-plateform.vercel.app/)

---

## 🚀 Key Features

* **The Visa Matrix:** A pivot-table interface where rows represent documents and columns represent dynamic stakeholders (OJ Control, LAK, Carbo3S, Joule).
* **Conflict Detection:** Instantly visualizes if one stakeholder has Approved (`VSO`) a document while another has Rejected (`REF`) it.
* **Status Management:**
  * `VSO` (Validé Sans Observation) - Green
  * `VAO` (Validé Avec Observation) - Orange
  * `REF` (Refusé) - Red
  * `VPI` (Validation Partielle / Info) - Blue
  * **New:** `NC` (Non Concerné) - Grey (for stakeholders not involved in a specific lot)
* **Strict Versioning:** Enforces `Index 0` $\to$ `Index A` workflow logic.
* **RBAC Security:** Role-based views (Admin, Manager, Contractor).

---

## 🛠 Architecture & Logic

### The "Matrix" Data Problem

Standard databases cannot easily store "Columns" that change per project. We solved this using a **Normalized Relational Schema** transformed via a **Frontend Pivot Algorithm**.

1. **Database (Normalized):**
    * `Documents` table (1 row per file).
    * `Stakeholders` table (Definitions of OJ Control, LAK...).
    * `Reviews` table (Junction: Document ID + Stakeholder ID + Status).

2. **Frontend (React/Vite):**
    * Fetches linear data.
    * Transforms it into a Matrix object: `{ doc_id: 1, visas: { oj: 'VSO', lak: 'REF' } }`.
    * Renders dynamically using Tailwind Grid.

---

## ⚡️ Quick Start

1. **Clone & Install**

    ```bash
    git clone https://github.com/amezianeomar/ged-plateform.git
    cd ged-plateform
    npm install
    ```

2. **Setup Environment**
    Create `.env.local` if connecting to Supabase (Optional for Mock Mode).

3. **Run Development**

    ```bash
    npm run dev
    ```

4. **Build for Production**

    ```bash
    npm run build
    ```

    See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for full Vercel instructions.

---

*© 2026 Omar Ameziane. Built for Precision.*
