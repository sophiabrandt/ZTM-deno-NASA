# base image
FROM hayd/deno:alpine-1.2.0

# working directory
RUN mkdir /opt/deno_app && chown deno:deno /opt/deno_app
WORKDIR /opt/deno_app

# change to non-priviliged user
USER deno

# copy dependencies
COPY src/deps.ts src/
RUN deno cache src/deps.ts

# copy source code
COPY . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache src/mod.ts

# set shell
ENV SHELL /bin/sh

# Run app
CMD ["run", "--allow-all", "Drakefile.ts", "start"]
