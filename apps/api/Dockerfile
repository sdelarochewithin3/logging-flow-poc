FROM node:16.18.1
WORKDIR /workspace
LABEL "com.datadoghq.ad.logs"='[{"source": "nodejs", "service": "api"}]'
COPY . .
RUN yarn set version berry
RUN yarn workspaces foreach install
CMD [ "yarn", "start:api" ]
