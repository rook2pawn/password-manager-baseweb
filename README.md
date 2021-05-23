# install

this installs via yarn

    yarn install

if you don't have yarn

    npm install -g yarn

if you have build issues,

    rm -rf node_modules
    yarn cache clean
    rm yarn.lock

# run

    yarn dev // start service
    npm run proxy // start https proxy

# https

This runs only in http. requires https proxy. Create self sign using openssl

    openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj '/CN=localhost'

or generate your own keys.

For
  
 npm run proxy
  
You will need to create your own self signed keys for localhost testing or get a real key and cert
requires key.pem (usually privkey.pem) and cert.pem (usually fullchain.pem) to be placed in the root of the project.

# issues

This is built on FusionJS and it doesn't play nicely with Opera Browser. Will be looking into that.
Also doesn't support mobile layout proper.

# storybook

    yarn storybook

# license

MIT/ISC

(C) 2021 David Wee

# contact

david wee rook2pawn@gmail.com
