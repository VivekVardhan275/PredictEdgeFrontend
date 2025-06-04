
# PredictEdge: Interactive Machine Learning Model Platform

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Available Models](#available-models)
  - [1. Mental Health in Tech Workers](#1-mental-health-in-tech-workers)
  - [2. Crop Grouping by Climate Requirements](#2-crop-grouping-by-climate-requirements)
  - [3. Fake vs. Real Account Classification](#3-fake-vs-real-account-classification)
- [Interacting with Models](#interacting-with-models)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Key Components](#key-components)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

## Introduction

PredictEdge is a web application designed to provide an interactive platform for users to engage with various machine learning models. Users can explore model specifics, input their own data in supported formats (CSV or JSON), and receive predictions or analyses. The application aims to make complex ML models accessible and understandable through a clean, user-friendly interface.

## Features

- **Multiple ML Model Showcase:** Access and interact with a diverse set of pre-configured machine learning models.
- **Interactive Model Engagement:** Input custom data (CSV or JSON) to get real-time predictions or analyses from the models.
- **Detailed Model Information:** Each model page provides comprehensive details about its goal, dataset, features, and techniques used.
- **Responsive Design:** Optimized for a seamless experience across various devices (desktop, tablet, mobile).
- **Theme Toggling:** Switch between Light, Dark, and System default themes for user preference.
- **Modern UI/UX:** Built with ShadCN UI components and Tailwind CSS for a sleek and contemporary look and feel.
- **Client-Side Interaction:** Leverages Next.js for server-side rendering and client-side interactivity.

## Technology Stack

- **Frontend Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language (Frontend):** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [React](https://reactjs.org/)
- **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client (Frontend):** [Axios](https://axios-http.com/) for API interactions.
- **Animations:** `tailwindcss-animate` for UI animations.
- **State Management (Frontend):** React Hooks (`useState`, `useEffect`).
- **Backend Framework:** [Spring Boot](https://spring.io/projects/spring-boot) (Java)
- **Machine Learning Models:** Developed in [Python](https://www.python.org/) using various ML libraries (e.g., Scikit-learn, TensorFlow, PyTorch), served via the Spring Boot backend.
- **AI Backend (Optional for future direct integrations):** [Genkit](https://firebase.google.com/docs/genkit) (Configured, can be extended for future model integrations directly within the Next.js app if needed, separate from the primary Spring Boot backend).

## Project Structure

The project follows a standard Next.js (App Router) structure for the frontend:

```
PredictEdgeFrontend/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── (model-routes)/ # Route groups for each model
│   │   │   ├── page.tsx            # Model detail page
│   │   │   └── interact/page.tsx   # Model interaction page
│   │   ├── globals.css     # Global styles and ShadCN theme
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable React components
│   │   ├── ui/             # ShadCN UI components
│   │   ├── model-interaction-card.tsx
│   │   ├── model-link-card.tsx
│   │   └── ...
│   ├── ai/                 # Genkit related files (flows, config for potential future direct AI features)
│   │   ├── genkit.ts
│   │   └── dev.ts
│   ├── hooks/              # Custom React hooks (e.g., useToast, useMobile)
│   ├── lib/                # Utility functions (e.g., cn for classnames)
├── .env                    # Environment variables (if any)
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```
The backend (Spring Boot) and Python ML model code would reside in separate project structures/repositories as per standard practices for those technologies.

## Available Models

PredictEdge currently features the following models, served by the Spring Boot backend:

### 1. Mental Health in Tech Workers

- **Description:** Predicts if a tech worker is at risk of mental health issues using data like work environment and mental health history.
- **Goal:** To proactively identify and predict the likelihood of mental health issues among individuals working in the technology sector.
- **Dataset:** "Mental Health in Tech Survey" (publicly available).
- **Features:** Work environment (company size, remote work, benefits), anonymity, personal mental health history, family history.
- **Techniques:** Hybrid approach using Naive Bayes and Logistic Regression (implemented in Python).

### 2. Crop Grouping by Climate Requirements

- **Description:** Clusters crops based on their optimal growing conditions (e.g., rainfall, temperature) to recommend suitable crops for specific regions or climates.
- **Goal:** To intelligently cluster crops based on optimal growing conditions for better agricultural planning.
- **Dataset:** Comprehensive data on crop characteristics and climate preferences.
- **Features:** Average rainfall, temperature ranges, humidity levels, sunlight exposure.
- **Method:** Unsupervised learning algorithms like K-Means or DBSCAN (implemented in Python).
- **Use Case:** Recommending suitable crops for specific geographic regions or climate scenarios.

### 3. Fake vs. Real Account Classification

- **Description:** Predicts if a social media profile is fake or real using features like friend count, post activity, and likes.
- **Goal:** Predict whether a social media profile is fake or real.
- **Dataset:** "Fake Profile Detection Dataset" from Kaggle.
- **Features:** Number of friends/followers, post count, likes/reactions, activity rate, profile completion, account age.
- **Techniques:** Classification algorithms such as Logistic Regression, Random Forest, and XGBoost (implemented in Python).
- **Use Case:** Social media platform moderation, enhancing user safety.

## Interacting with Models

Each model has an "Interact" page where users can:
1.  Select an input format (CSV or JSON).
2.  Provide their data according to the example format shown.
3.  Submit the data to the model via the Next.js frontend, which then communicates with the Spring Boot backend.
4.  View the model's output/prediction returned from the backend.

The interactions are handled by making HTTP requests to external API endpoints hosted on the Spring Boot backend:
- **Input (POST):** `https://predictedge.vivek275.rocks/api/{model-id}/{format}/input`
- **Output (GET):** `https://predictedge.vivek275.rocks/api/{model-id}/output`

Where `{model-id}` can be `model-alpha`, `model-beta`, or `model-gamma`, and `{format}` is `csv` or `json`.

## Getting Started

To run the PredictEdge frontend locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running instance of the PredictEdge Spring Boot backend application, accessible at `https://predictedge.vivek275.rocks` (or configured appropriately if running locally).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url> # Replace with your actual repository URL
    cd PredictEdgeFrontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

Once the dependencies are installed, you can start the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at `http://localhost:9002` (as per your `package.json` dev script). Ensure the backend is running and accessible.

## Key Components

- **`ModelLinkCard (src/components/model-link-card.tsx)`:** Displays a summary of each model on the homepage and links to its detailed page.
- **`ModelInteractionCard (src/components/model-interaction-card.tsx)`:** The core UI component for selecting input format, entering data, submitting to the model, and displaying results.
- **`ThemeToggle (src/components/theme-toggle.tsx)`:** Allows users to switch between light, dark, and system themes.
- **`CopyrightYear (src/components/copyright-year.tsx)`:** Dynamically displays the current year in the footer.
- **ShadCN UI Components (`src/components/ui/`)**: A collection of pre-built, customizable UI components like Buttons, Cards, Dialogs, etc.

## Future Enhancements

- Integration of more diverse machine learning models.
- Direct model inference using Genkit flows hosted within the Next.js application for specific, lightweight AI tasks (complementary to the main Python models on Spring Boot).
- User authentication and personalized dashboards.
- Enhanced data visualization for model outputs.
- More sophisticated input validation and error handling on both frontend and backend.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes tests where appropriate.

---

*This README was generated to provide a comprehensive overview of the PredictEdge application.*
