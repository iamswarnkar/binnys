# React Native binnys Task

This is a simple React Native application built to demonstrate fundamental concepts including component structure, navigation, API integration, and state management with custom hooks. The app is built with TypeScript and follows a clean, modular architecture.

## Features

- **Login Screen:** A basic login form with email and password fields, including email format validation.
- **API Integration:** Fetches a list of posts from the JSONPlaceholder API.
- **Infinite Scroll:** Implements infinite scrolling with pagination to efficiently display a long list of posts.
- **Pull-to-Refresh:** Allows users to refresh the list of posts.
- **Navigation:** Uses React Navigation for navigating between different screens (Login, Post List, Post Details, and Counter).
- **Details Screen:** Displays the full details of a selected post.
- **Counter App:** A simple counter screen to demonstrate `useState`.
- **Reusable Components:** Includes reusable components for inputs and buttons to maintain a consistent UI.
- **Custom Hooks:** Utilizes a generic custom hook (`useFetch`) for handling paginated API calls, making the data fetching logic clean and reusable.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm/yarn
- React Native CLI
- Android Studio or Xcode for running on an emulator/simulator or a physical device.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/iamswarnkar/binnys.git
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the application:**

    - **For Android:**
      ```bash
      npx react-native run-android
      ```
    - **For iOS:**
      ```bash
      npx react-native run-ios
      ```

## Project Structure

The project is organized into the following directories:

```
src
├── components # Reusable UI components (Input, Button, PostItem)
├── hooks # Custom hooks for business logic (usePaginatedFetch)
├── navigation # Navigation setup (AppNavigator)
├── screens # Application screens (LoginScreen, PostListScreen, etc.)
├── services # API service for data fetching (apiService)
├── types # Global TypeScript type definitions
└── App.tsx # Main application component
```

## Technologies Used

- **React Native:** The core framework for building the application.
- **TypeScript:** For static typing and improved developer experience.
- **React Navigation:** For handling routing and navigation between screens.
- **Flexbox:** For creating responsive layouts.

This structure promotes a clean separation of concerns and makes the codebase easier to navigate and maintain.
