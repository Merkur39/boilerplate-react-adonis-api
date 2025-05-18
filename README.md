# Boilerplate React AdonisJS API

## Installation

**Requirements** :

- [Node.js](https://nodejs.org/) (v18 or later)
- [Bun](https://bun.sh/) (v1.0.0 or later)

```bash
bun install
```

Create a `.env` file in the _/api_ directory (follow the `.env.example` file).

## Usage

```bash
# Start all services
bun run dev
# Or start the client
bun run dev:client
# Or start the api
bun run dev:api
# Or start the shared (for types and utils)
bun run dev:shared
```

**_Tips VSCode_** : You can use the `Run Task` then `dev:all` to start all services at once in the integrated terminal (splitted).

And then open your browser to :

- `http://localhost:5173` to see the client running.
- `http://localhost:3333` to see the API running.

## License

This project is distributed under the **GNU General Public License v3.0**.

See the [LICENSE](./LICENSE) file for more information.

### Dependencies licenses

This project uses the following libraries, each under the MIT license:

- [AdonisJS v6](https://github.com/adonisjs/core) – Backend framework for Node.js.
- [React v19](https://react.dev/) – JavaScript library for building user interfaces.

Files originating from these libraries remain under their original MIT license.
You can review their respective licenses in their official repositories.
