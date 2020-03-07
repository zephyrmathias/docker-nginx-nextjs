![Codecov Status](https://codecov.io/gh/zephyrmathias/docker-nginx-nextjs/branch/master/graph/badge.svg)[https://codecov.io/gh/zephyrmathias/docker-nginx-nextjs/branch/master]

# Docker, Nginx, Next.js

This is example project (boilerplate) of how to create a simple Next.js project with Docker and Nginx

# Tech Stacks!

  - Docker :whale:
  - Nginx
  - Next.js
  - Styled-Components
  - React Hooks
  - GitHub Actions
  - Storybook
  - Husky + Commitlint

# Getting Started
You can run this project via Node.js or Docker

### Docker :whale:
Prerequisites
#### Development Mode
```sh
// to enable Docker BuildKit for docker-compose
$ export COMPOSE_DOCKER_CLI_BUILD=1
$ docker-compose -f docker-compose.dev.yml up --build
```

#### Production Mode
```sh
// to enable Docker BuildKit for docker-compose
$ export COMPOSE_DOCKER_CLI_BUILD=1
$ docker-compose up --build
```

### Node.js

#### Development Mode
```sh
$ npm run dev
```

#### Production Mode
```sh
$ npm run build
$ npm start
```

# Hooks
Add more React Hooks and Custom Hooks with Testing


# Github Actions Workflow
##### On Pull Request
Exampel of basic workflow with github actions
When create Pull Requests to `master` branch it needs to run following:
1. At least one approval
2. Branch needs to be updated
3. Required status checks (tests need to be passed)
