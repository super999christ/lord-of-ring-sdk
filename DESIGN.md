# About SDK

`The Lord of the Rings` SDK is built based on Node.js and TypeScript.

The One API (Version 2) <https://the-one-api.dev/documentation> is used for fetching the data.

# Core Services

Core service classes are defined under `lib/core` directory.

## Base

The modules under `base/` are modules that handle basic getter APIs and settling a returned `Promise` once a response is received.

Main modules (Movie, Book, ...) can be defined by extending Base class.

## Movie

The modules under `movie/` are modules that handle movie APIs and settling a returned `Promise` once a response is received.

You can define custom API functions for extending the functionality.

# Environment Variables

Environment variables (API URL, API version, etc) are defined under `lib/env` directory.

# Helper Functions

Utilization functions are defined under `lib/helpers` directory.

## Network Helper

This module includes custom wrapper functions of `Axios` designed for basic API calls and scalability.