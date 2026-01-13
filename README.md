# Curio.today (Frontend)

![Next.js](https://img.shields.io/badge/Next.js-16%20App%20Router-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![pnpm](https://img.shields.io/badge/pnpm-Package%20Manager-orange)
![Jest](https://img.shields.io/badge/Jest-Unit%20Tests-red)
![Playwright](https://img.shields.io/badge/Playwright-E2E%20Tests-green)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## Overview

**Curio.today (Frontend)** is a public, production-grade web application built with **Next.js 16 App Router** and **React**, written entirely in **TypeScript**.

The application supports multiple languages via **next-intl**, follows modern frontend best practices, and includes a strong testing and CI/CD setup using **Jest**, **Playwright**, and **GitHub Actions**.

## Tech Stack

### Core Technologies

- [**Next.js 16**](https://nextjs.org/docs/app) (App Router)
- [**React 19**](https://react.dev/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**pnpm**](https://pnpm.io/) as the package manager
- [**next-intl**](https://next-intl-docs.vercel.app/) for internationalization
- [**shadcn/ui**](https://ui.shadcn.com/) component library

### UI Components

Reusable UI components based on **[shadcn](https://ui.shadcn.com/)** are stored in [`@/components/core/*`](/src/components/core)

### Code Quality
ESLint for static code analysis and consistency

### Testing


- [**Jest**](https://jestjs.io/) – *unit and component testing*
- [**Playwright**](https://playwright.dev/) – *end-to-end (E2E) testing*


## Internationalization (i18n)


The project uses [**next-intl**](https://next-intl-docs.vercel.app/) to provide *localized content* and *locale-based routing*.


### Supported Languages


- **Latvian**
- **Russian**
- **English**


## Environment Variables


The following environment variables are required to run the project:


```env
NEXT_PUBLIC_API_URL=<api-url>
NEXT_PUBLIC_PAYLOAD_URL=<admin-panel-url>
```


For local development, create a **`.env.local`** file and define the variables there.


## Installation
### Environment Variables

The following environment variables are required to run the project:


```env
# This variable is used to fetch API
NEXT_PUBLIC_API_URL=<api-url>


# This variable is used to fetch admin panel without any endpoint
NEXT_PUBLIC_PAYLOAD_URL=<admin-panel-url>
```

### 1. Local Installation (Development)


#### Prerequisites


- **Node.js v22**
- **pnpm**


#### Steps


1. Clone the repository
2. Install dependencies using `pnpm`
3. Start the development server using `pnpm dev`
4. Open **http://localhost:3000**


### 2. Docker Installation


The frontend runs as part of a **Docker Compose** setup alongside other services.


#### Prerequisites


- **Docker**
- **Docker Compose**


#### Steps


1. Build and start all services using `docker compose up --build`
2. Access the application at **http://localhost:3000**


## Testing


### Unit Tests (Jest)


Run unit tests using:


```bash
pnpm test
```


### End-to-End Tests (Playwright)
If you don't have installed Playwright, install it first:
```bash
pnpm exec playwright install
```

Run E2E tests using:
```bash
pnpm test:e2e
```


## CI/CD


The project uses [**GitHub Actions**](https://github.com/features/actions) for *continuous integration* and *deployment*.


### Workflows


- **tests.yml** – runs *linting*, *unit tests*, and *E2E tests*
- **deploy.yml** – handles *deployment* after successful checks


## Scripts


- `pnpm dev` – start development server
- `pnpm build` – build for production
- `pnpm start` – start production server
- `pnpm lint` – run **ESLint**
- `pnpm test` – run all (unit and e2e) tests
- `pnpm test:unit` - run unit tests
- `pnpm test:e2e` – run Playwright tests


## Contributing


This is a **public repository**. Contributions, issues, and feature requests are welcome.


Please ensure that:
- Code passes **ESLint** checks
- Tests are added or updated when relevant


## License


**MIT License**
