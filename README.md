# skymp-web

## Before run
Without `sudo` on Windows
 - create `config.js` file (example in config.default.js)
 - ~~`sudo npm i -g webpack` (install once)~~
 - ~~`sudo npm i -g webpack-dev-server` (install once if you want to develope)~~
 - `sudo npm i` (each time after pull)

## Dev run
`sudo? npm run dev`
If browser didn't open automatically, console will show you address to open

## Production build
`sudo npm run build-prod` - only Unix!
`sudo npm run build-prod-win` - only Windows

## Dedicated run
`npm run build && npm run server` - run with simple http-server
