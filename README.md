# Install

```bash
npm i https://github.com/super999christ/randall_christ-SDK.git
```

# Usage

```js
import LordSDK from 'randall_christ-SDK';

const sdk = new LordSDK({ accessToken: 'Bearer your-api-key-123' });
const movie = sdk.getMovieInstance();

const response = await movie.getAll();
console.log(response);
```

## Core Services

### Movie

> List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies

- await movie.getAll();

> Request one specific movie

- await movie.getOne(id);

> Request all movie quotes for one specific movie (only working for the LotR trilogy)

- await movie.getQuotes(id);

# API

Api available here: <https://the-one-api.dev/documentation>
