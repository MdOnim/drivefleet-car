# DriveFleet Car Rental Platform

Live Site: https://drivefleet-car.vercel.app

## Project Overview

DriveFleet is a full-stack car rental platform where users can explore available cars, view detailed information, book vehicles, manage bookings, and add their own car listings. The platform includes secure JWT authentication, protected private routes, booking management, and a fully responsive modern UI.

---

## Features

* User authentication with Email/Password and Google Login
* Secure JWT authentication using HTTPOnly cookies
* Add, update, and delete car listings
* Explore all available cars with search and filter functionality
* Book cars and manage bookings from a private dashboard
* Responsive design for mobile, tablet, and desktop devices
* Dynamic car details page with booking modal
* Booking count increment using MongoDB `$inc`
* Protected private routes and APIs
* Custom loading spinner and 404 page

---

## Technologies Used

### Frontend

* Next.js / React
* Tailwind CSS
* Hero UI
* Framer Motion
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Cookie Parser
* CORS

---

## Pages Included

### Public Pages

* Home
* Explore Cars
* Car Details
* Login
* Register

### Private Pages

* Add Car
* My Added Cars
* My Bookings

---

## Authentication Features

* Email & Password Login/Register
* Google Authentication
* JWT Token Generation
* HTTPOnly Cookie Storage
* Protected Routes
* Persistent Login on Reload

---

## CRUD Functionalities

### Add Car

Users can add new car listings with:

* Car Name
* Daily Rent Price
* Car Type
* Image URL
* Seat Capacity
* Pickup Location
* Description
* Availability Status

### Update Car

Owners can update:

* Price
* Description
* Availability
* Image
* Type
* Location

### Delete Car

Owners can delete their car listings with confirmation.

---

## Booking System

Users can:

* Book available cars
* Add special notes
* Choose driver requirement
* View all bookings
* Track booking dates and total price

---

## Search & Filter

* Search cars by car name using MongoDB `$regex`
* Filter cars by category/type

---

## Deployment

### Client

Hosted on Vercel

### Server

Hosted on Render

---

## Installation & Setup

### Clone the repositories

### Install dependencies

```bash
npm install
```

### Run Client

```bash
npm run dev
```

### Run Server

```bash
nodemon index.js
```

---

## Future Improvements

* Payment Integration
* Wishlist Feature
* Admin Dashboard
* Real-time Notifications
* Advanced Booking Analytics

---

## Author

Developed by Md Onim
