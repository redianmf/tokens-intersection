# tokens-intersection

Utils to get intersected tokens between Odos router and bridge providers

### Init project

`npm install`

### Get tokens data

Edit `utils/fetcher`.ts and run `npm run fetcher`

### Check data compatibility

Check tokens data structure, if not supported add token interface in `types/index.ts` and add normalizer function in `utils/tokenListNormalizer.ts`

### Set tokens you want to compare

Open `index.ts`, normalize tokens list, instantiate TokenIntersectionBuilder, add tokens to compare, then `npm run find`
