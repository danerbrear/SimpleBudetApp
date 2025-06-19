# SimpleBudgetApp

A React Native budget management application built with MVVM (Model-View-ViewModel) and Clean Architecture principles.

## Architecture Overview

This project follows Clean Architecture principles with MVVM pattern to ensure separation of concerns, testability, and maintainability. The architecture is organized into distinct layers with clear dependencies flowing inward.

## Folder Structure

The main application code follows MVVM and Clean Architecture layers:

#### **`src/app/`** - Application Layer
- Application-wide configuration and setup
- Dependency injection container
- App-level services and providers
- Navigation configuration and routing

#### **`src/core/`** - Core/Shared Layer
- **`components/`** - Reusable UI components shared across features
  - Common buttons, inputs, modals, and layout components
  - Design system components and styled elements
- **`constants/`** - Application-wide constants
  - API endpoints, configuration values, theme constants
  - Enums and static data used throughout the app

#### **`src/domain/`** - Domain Layer (Business Logic)
- **Entities** - Core business objects and models
- **Use Cases** - Business logic and application rules
- **Repository Interfaces** - Contracts for data access
- **Services** - Domain services and business operations
- This layer is framework-agnostic and contains pure business logic

#### **`src/data/`** - Data Layer
- **Repository Implementations** - Concrete implementations of domain interfaces
- **Data Sources** - API clients, local storage, and external service integrations
- **DTOs** - Data Transfer Objects for API communication
- **Mappers** - Convert between domain entities and data models

#### **`src/features/`** - Feature Modules
Organized by business features using MVVM pattern:

- **`goals/`** - Budget goals feature module
  - **`view/`** - React components and UI logic (View layer)
    - Screen components, form components, and feature-specific UI
  - **`viewmodel/`** - State management and presentation logic (ViewModel layer)
    - React hooks, state management, and UI business logic
    - Connects View to Domain layer through use cases

Each feature module is self-contained and follows the same MVVM structure.

## Architecture Benefits

- **Separation of Concerns**: Each layer has a single responsibility
- **Testability**: Business logic is isolated and easily testable
- **Maintainability**: Clear structure makes code easy to understand and modify
- **Scalability**: New features can be added without affecting existing code
- **Platform Independence**: Core business logic is not tied to React Native

## Getting Started

```bash
# Install dependencies
npm install

# iOS setup
cd ios && pod install && cd ..

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run tests
npm test
```