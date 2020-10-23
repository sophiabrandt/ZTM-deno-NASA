# ZTM-deno-NASA

**ZTM-deno-NASA** is the project from the [Zero to Mastery Deno course][ztmdeno].

## Installation

Install [Deno](https://deno.land/#installation).

Load dependencies:

```bash
$ deno cache --reload --lock=lock.json src/deps.ts
# or
$ deno run -A Drakefile.ts reload
```

## Usage

### Development

```bash
$ deno run --allow-net --allow-read --lock=lock.json src/mod.ts
# or
$ deno run -A Drakefile.ts start
```

The API is available under `http://localhost:8501`.

**Example Usage**:  
Query for launches:

```bash
$ curl http://localhost:8501/launches
```

The front-end application is available under `http://localhost:8501/index.html`.

## Tests

```bash
$ deno test --allow-read src/models/planets.spec.ts
```

## Upgrading Dependencies

Change the dependency version manually in `src/deps.ts` and `src/test_deps.ts`.

Reload dependencies from `lock.json`:

```bash
$ deno cache --lock=lock.json --lock-write src/deps.ts 
# or
$ deno run -A Drakefile.ts cache
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  
Please note that this is a learning repository.

## License

All code is &copy;  2020 Adam Odziemkowski, with minor changes by Sophia Brandt. Please refer to the [original repository][original] for details.

[ztmdeno]: https://academy.zerotomastery.io/p/deno-the-complete-guide-zero-to-mastery
[original]: https://github.com/odziem/nasa-deno
