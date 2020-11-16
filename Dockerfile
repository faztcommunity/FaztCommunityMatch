FROM node:14
WORKDIR /usr/src/fazt_community_match
RUN yarn &&\
  yarn run build
CMD [ "yarn", "run", "start" ]