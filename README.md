# \# Adaptive Payment Orchestration Platform (Sri Lanka)

# 

# \## 🚀 Day 2 Progress – Kubernetes Deployment

# 

# \### 📌 Overview

# This project simulates a real-world payment system where:

# \- A primary payment service may fail randomly

# \- A fallback service ensures reliability

# 

# Both services are deployed using Kubernetes (Minikube).

# 

# \---

# 

# \## 🏗 Architecture (Current)

# 

# Client → Kubernetes Service → Payment Service (may fail)

# &#x20;                                 ↓

# &#x20;                             Fallback Service

# 

# \---

# 

# \## ⚙️ Tech Stack

# \- Node.js (Microservices)

# \- Docker (Containerization)

# \- Kubernetes (Minikube)

# \- GitHub (Version Control)

# 

# \---

# 

# \## 📦 Services

# 

# \### 1. payment-service

# \- Endpoint: `/pay`

# \- Behavior: Random success/failure (simulates real payment API issues)

# 

# \### 2. fallback-service

# \- Endpoint: `/pay`

# \- Behavior: Always returns success

# 

# \---

# 

# \## ☸️ Kubernetes Setup

# 

# \### Deployments:

# \- payment-service

# \- fallback-service

# 

# \### Services:

# \- NodePort (via Minikube tunnel)

# 

# \---

# 

# \## 🧪 How to Run

# 

# \### Start Minikube

# ```bash

# minikube start

