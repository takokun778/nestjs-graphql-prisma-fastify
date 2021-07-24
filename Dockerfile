FROM node:16.0.0-alpine

ARG UID=${UID}

ARG GID=${GID}

ARG UNAME=${UNAME}

RUN apk update && apk add git

RUN npm install -g @nestjs/cli

RUN deluser node && rm -rf /home/node 

RUN addgroup -g ${GID} -S ${UNAME} && adduser -u ${UID} -S ${UNAME} -G ${UNAME}

USER ${UID}

WORKDIR /home/${UNAME}/app/