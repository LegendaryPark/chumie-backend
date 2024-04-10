# Chumie Backend!

Welcome to the Chumie Backend repository! This backend service, designed to complement the Chumie Frontend, provides a robust platform for a word memory game. Whether you're on Windows, macOS, or Linux, follow these steps to get your environment set up and dive into the game.

## Prerequisites

Before you begin, ensure MongoDB is installed and running on your system. This backend relies on MongoDB for storing word pairs data, crucial for the game's functionality.

### MongoDB Installation Guide

- **Windows**: Follow the [official MongoDB installation guide for Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).
- **macOS**: Follow the [official MongoDB installation guide for macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).
- **Linux**: MongoDB installation can vary between distributions. Follow the [official MongoDB installation guide for Linux](https://docs.mongodb.com/manual/administration/install-on-linux/), selecting your specific distribution for precise instructions.

### 1. Inserting Mock Data

Populate your MongoDB with initial mock data for word pairs by navigating to the `/src/mock` directory in your terminal or command prompt. Run the following command:

```bash
node insertMockData.js
```

This step initializes your MongoDB instance with mock data, ensuring the Chumie Backend has data to work with.

### 2. Running Chumie Frontend

For the full experience, we recommend running the Chumie Frontend alongside the backend. You can find the frontend repository and setup instructions here:

[Chumie Frontend GitHub Repository](https://github.com/LegendaryPark/chumie-frontend)

Running both the frontend and backend allows you to enjoy the complete UI and functionality of the Chumie word memory game.

## Installation

Install the necessary dependencies for the Chumie Backend by running the following command in the root directory of the project:

```bash
npm install
```

## Building the Project

Compile and build the project with:

```bash
npm run build
```

This command prepares the backend service for execution.

## Starting the Server

To start the Chumie Backend server, execute:

```bash
npm run start
```

This launches the backend service, ready to handle requests from the Chumie Frontend.

## Enjoy the Word Memory Game!

With the backend and frontend up and running, you're all set to dive into the Chumie word memory game. Explore, play, and enhance your word memory skills!
