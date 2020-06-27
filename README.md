# ZTM-deno-NASA

**ZTM-deno-NASA** is the project from the [Zero to Mastery Deno course][ztmdeno].

## Installation

Install [Deno](https://deno.land/#installation).

Load dependencies:

```bash
deno cache --reload --lock=lock.json deps.ts
```

## Usage

```bash
deno run --allow-net --allow-read src/mod.ts
```

The API is available under `http://localhost:8000`.

**Example Usage**:  
Query for launches:

```bash
curl http://localhost:8000/launches
```

The front-end application is available under `http://localhost:8000/index.html`.

## Tests

```bash
deno test --allow-read src/models/planets.spec.ts
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  
Please note that this is a learning repository.

## License

All code is (c) 2020 Adam Odziemkowski. Please refer to the [original repository][original] for details.

[ztmdeno]: https://academy.zerotomastery.io/p/deno-the-complete-guide-zero-to-mastery
[original]: https://github.com/odziem/nasa-deno
