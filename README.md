# Deadline Guardian

> **Don't Just Manage Deadlines. Change Your Future.**

Deadline Guardian is an AI-powered productivity assistant that helps users make better decisions before a deadline by simulating multiple possible futures.

Instead of generating a simple to-do list, Guardian predicts three realistic execution paths using Google's Gemini model, allowing users to understand the consequences of their choices before committing to a plan.

---

## Demo

Frontend:
https://deadline-guardian-4ij7.vercel.app/

Backend:
https://deadline-guardian-api-482683129737.asia-south1.run.app

---

# Inspiration

Most productivity tools answer one question:

> *"What should I do next?"*

Deadline Guardian answers a much more important one:

> **"What happens if I don't?"**

Humans are naturally motivated by consequences. By visualizing multiple possible futures, users can make informed decisions before it is too late.

---

# What it does

Users enter:

- A task
- Preferred work style
- Leadership personality

Guardian then uses Google's Gemini model to simulate three realistic futures:

### Comfortable Path

Continue existing habits.

Moderate success.

Moderate stress.

---

### Guardian Path

Follow AI recommendations.

Highest probability of success.

Lowest stress.

---

### Last-Minute Rescue

Maximum effort.

High stress.

Emergency recovery strategy.

---

Each future includes:

- AI-generated title
- Success probability
- Stress level
- Personalized recommendation
- Leadership-aware motivational quote
- Four-stage execution timeline

After selecting a future, users transition directly into **Guardian Focus**, an integrated Pomodoro workspace designed for deep work.

---

# Key Features

## AI Future Simulation

Unlike traditional planners, Guardian predicts multiple realistic outcomes instead of producing a single schedule.

---

## Leadership-Aware AI

Guardian changes its communication style based on the user's preferred leadership personality.

Supported personalities:

- Commander
- Coach
- Roaster
- Indian Mom
- Zen

Recommendations and motivational quotes are dynamically generated for every interaction.

---

## Personalized Decision Support

Each future is evaluated using:

- User task
- Work style
- Leadership personality
- Expected execution quality
- Estimated stress level
- Predicted success probability

---

## Dynamic Timeline Generation

Every simulated future contains a structured execution timeline that users can immediately follow.

---

## Guardian Focus

A built-in execution workspace featuring:

- Pomodoro timer
- Focus sessions
- Break reminders
- Motivational messages

This bridges the gap between planning and execution.

---

## Modern Interactive UI

Built with:

- Smooth animations
- Progressive AI thinking states
- Dynamic future comparison
- Interactive planning cards
- Responsive design

---

# Google Cloud Technologies Used

## Vertex AI (Gemini 2.5 Flash)

Used for:

- Future simulation
- Personalized recommendations
- Leadership-aware responses
- Motivational quote generation
- Timeline generation

---

## Cloud Run

Hosts the FastAPI backend.

Provides scalable serverless deployment.

---

## Cloud Build

Automatically builds deployment containers.

---

## Artifact Registry

Stores Docker container images.

---

## IAM

Secure service-to-service authentication between Cloud Run and Vertex AI.

---

## Cloud Logging

Centralized backend monitoring and debugging.

---

# Architecture

```
                    User
                      │
                      ▼
        Next.js + React Frontend
                      │
                      ▼
        FastAPI Backend (Cloud Run)
                      │
                      ▼
      Vertex AI Gemini 2.5 Flash
                      │
                      ▼
      Structured Future Simulation
                      │
                      ▼
      Interactive Future Comparison
                      │
                      ▼
      Guardian Focus Workspace
```

---

# Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- TailwindCSS
- Framer Motion

### Backend

- FastAPI
- Python
- Pydantic

### AI

- Vertex AI
- Gemini 2.5 Flash

### Cloud

- Cloud Run
- Cloud Build
- Artifact Registry
- IAM
- Cloud Logging

---

# Future Scope

- Google Calendar integration
- Gmail deadline extraction
- AI schedule optimization
- Firebase Authentication
- Firestore synchronization
- Adaptive planning using productivity history
- Multi-agent collaboration
- Team planning

---

# Tagline

> **Predict the Future. Beat Every Deadline.**
