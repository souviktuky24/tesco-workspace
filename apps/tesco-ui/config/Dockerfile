# base image

FROM node:10.16.0 as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

# copy project dependency
COPY packages/tesco-base packages/tesco-base
COPY packages/tesco-components packages/tesco-components
COPY packages/tesco-core packages/tesco-core
COPY packages/tesco-util packages/tesco-util

# following is target ui project
# DO NOT BUILD multiple ui projects here use from packages folder
COPY apps/tesco-ui apps/tesco-ui

RUN yarn install --pure-lockfile --non-interactive

# building all dependency
WORKDIR /usr/src/app/packages/tesco-base
RUN yarn build

WORKDIR /usr/src/app/packages/tesco-components
RUN yarn build

WORKDIR /usr/src/app/packages/tesco-core
RUN yarn build

WORKDIR /usr/src/app/packages/tesco-util
RUN yarn build


# building target UI project
# WORKDIR /usr/src/app/apps/tesco-ui
# RUN yarn build
# building the dependency done here

FROM node:10.16.0

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

# copying builded resource to flat level
COPY --from=build /usr/src/app/packages/tesco-base/package.json /usr/src/app/packages/tesco-base/package.json
COPY --from=build /usr/src/app/packages/tesco-base/build /usr/src/app/packages/tesco-base/build

COPY --from=build /usr/src/app/packages/tesco-components/package.json /usr/src/app/packages/tesco-components/package.json
COPY --from=build /usr/src/app/packages/tesco-components/build /usr/src/app/packages/tesco-components/build

COPY --from=build /usr/src/app/packages/tesco-core/package.json /usr/src/app/packages/tesco-core/package.json
COPY --from=build /usr/src/app/packages/tesco-core/build /usr/src/app/packages/tesco-core/build

COPY --from=build /usr/src/app/packages/tesco-util/package.json /usr/src/app/packages/tesco-util/package.json
COPY --from=build /usr/src/app/packages/tesco-util/build /usr/src/app/packages/tesco-util/build

# end flat dependency

ENV NODE_ENV production

RUN yarn install --pure-lockfile --non-interactive --production

WORKDIR /usr/src/app/apps/tesco-ui

RUN yarn

CMD ["yarn", "start"]