# base image
FROM hayd/deno:alpine-1.1.1

# working directory
RUN mkdir /opt/deno_app && chown deno:deno /opt/deno_app
WORKDIR /opt/deno_app

# copy source code
COPY . .

# change to non-priviliged user
USER deno

# Run app
CMD ["run", "--allow-net", "--allow-read", "src/mod.ts"]
