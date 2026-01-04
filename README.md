# 🌍 Local Guide Platform – Frontend

A modern **Next.js (App Router)** frontend for the **Local Guide Platform**, allowing tourists to book local guides, guides to manage tours, and admins to manage the entire system.

This frontend is fully integrated with the **Node.js + MongoDB + Stripe backend**.

---

## 🚀 Tech Stack

- **Next.js 14+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **React Query (@tanstack/react-query)**
- **Stripe (Client-side)**
- **JWT Authentication**
- **Axios**

---


---

## 🔐 Authentication & Roles

Authentication is handled using **JWT** stored in `localStorage`.

### User Roles:
- **Tourist** – Explore tours, book guides, pay, review
- **Guide** – Create/manage tours, accept bookings
- **Admin** – Manage users and tours

Role-based UI is enforced on:
- Dashboards
- Sidebars
- Protected pages

---

## 🏠 Pages Overview

### Public Pages
- `/` – Home page (featured tours, search, CTA)
- `/tours` – Explore all tours
- `/tours/[id]` – Tour details

### Auth Pages
- `/login`
- `/register`

### Dashboards
- `/dashboard` – Role-based dashboard
- `/dashboard/tourist/bookings`
- `/dashboard/guide/tours`
- `/dashboard/guide/bookings`
- `/dashboard/admin/users`
- `/dashboard/admin/tours`

---

## 🔌 API Integration

All API calls use **Axios** via a centralized client.

### `services/api.ts`

```ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;


