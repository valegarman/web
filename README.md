# web

## Dependencies

It is recommended to install [volta](https://volta.sh/) to manage `node` and `npm` versions.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## FAQS

### I have added a new profile page but when I try to access it, it redirects me to the 404 Not Found page.

Remember that pages that are generated from `.md` files must be included in the file `nuxt.config.js` under `generate.routes` and that you should also add the route to the translations (`\en\` is the default).

```javascript
export default {
  generate: {
    fallback: true,
    routes: [
      '/es/pages/resources',
      '/pages/resources',
      '/es/people/join-us',
      '/people/join-us',
      '/people/manuel-valero',
      '/es/people/manuel-valero',
      ... // Your new pages goes here
    ],
  },
```
