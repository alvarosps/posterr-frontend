# Base React Project

This is a base project template for a React application, with the latest versions of React, Webpack, Babel, ESLint, and Prettier. Created by @alvarosps

## Getting Started

### Important: For now the application does not support user authentication, but since the backend requires it, there is a

`const mockUserId = 1`

### variable in the NewPostForm component and in the usePosts hook, you can modify it if necessary to create/repost as different users.

#### You'll need to run the [Posterr Backend application](https://github.com/alvarosps/posterr-backend) to have this application properly working

To get started with the project, follow these steps:

1. Install the dependencies:
   `npm install`

2. Start the development server:
   `npm start`

### Testing

`npm run test`

### ESLint checks and ESLint Fixes

-   `npm run lint`
-   `npm run lint:fix`

### Prettier checks and Prettier Fixes

-   `npm run prettier`
-   `npm run prettier:fix`

## Deployment

-   This will be specific to the project and where it is being deployed.
-   For now, we have a build script, and a webpack suited for production.
-   Might need to add more scripts and files for deployment and hot-reloading in deployment (depends on the platform)
    `npm run build`
