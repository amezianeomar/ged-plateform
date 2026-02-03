# GED Pro - Civil Engineering Visa Matrix Platform

![Version](https://img.shields.io/badge/version-1.0.0--beta-blue.svg)
![Status](https://img.shields.io/badge/status-development-orange)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20Supabase%20%7C%20Tailwind-0f172a)

## 🏗 Project Overview

**GED Pro** is a specialized SaaS platform designed for high-stakes Civil Engineering projects. Unlike standard document storage, GED Pro implements a **Multi-Stakeholder Approval Matrix**, allowing distinct entities (Control Office, Architects, Client) to review the same document simultaneously with independent status tracking.

**Client:** Project Management Office (Civil Engineering)
**Lead Architect:** Omar Ameziane

---

## 🚀 Key Features

* **The Visa Matrix:** A pivot-table interface where rows represent documents and columns represent dynamic stakeholders (OJ Control, LAK, Carbo3S, etc.).
* **Conflict Detection:** Instantly visualizes if one stakeholder has Approved (`VSO`) a document while another has Rejected (`REF`) it.
* **Strict Versioning:** Enforces `Index 0` $\to$ `Index A` workflow logic.
* **RBAC Security:** A Contractor can see their row, but cannot modify the "OJ Control" cell.

---

## 🛠 Architecture & Logic

### The "Matrix" Data Problem
Standard databases cannot easily store "Columns" that change per project. We solved this using a **Normalized Relational Schema** transformed via a **Frontend Pivot Algorithm**.

1.  **Database (Normalized):**
    * `Documents` table (1 row per file).
    * `Stakeholders` table (Definitions of OJ Control, LAK...).
    * `Reviews` table (Junction: Document ID + Stakeholder ID + Status).

2.  **Frontend (React/Vite):**
    * Fetches linear data.
    * Transforms it into a Matrix object: `{ doc_id: 1, visas: { oj: 'VSO', lak: 'REF' } }`.
    * Renders dynamically using Tailwind Grid.

---

## ⚡️ Quick Start

1.  **Clone & Install**
    ```bash
    git clone [https://github.com/your-repo/ged-pro.git](https://github.com/your-repo/ged-pro.git)
    npm install
    ```

2.  **Setup Environment**
    Create `.env.local` with your Supabase credentials.

3.  **Run Development**
    ```bash
    npm run dev
    ```

---

*© 2026 Omar Ameziane. Built for Precision.*