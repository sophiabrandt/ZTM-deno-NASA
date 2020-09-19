# base image
FROM hayd/deno:alpine-1.4.0

# working directory
RUN mkdir -p /opt/deno_app && chown deno:deno /opt/deno_app
WORKDIR /opt/deno_app

# change to non-priviliged user
USER deno

# copy dependencies
COPY src/deps.ts src/deps.ts
RUN deno cache src/deps.ts

# copy code & compile main app
COPY . .
RUN deno cache src/mod.ts

# set shell
ENV SHELL /bin/sh

# Run app
ENTRYPOINT ["deno", "run", "--allow-all", "Drakefile.ts"]
CMD ["start"]
