FROM mhart/alpine-node:10

COPY ./ ./

RUN npm install --production

CMD [ "npm", "start" ]
