# base image
FROM hayd/deno:alpine-1.2.2

# working directory
RUN mkdir -p /opt/deno_app && chown deno:deno /opt/deno_app
WORKDIR /opt/deno_app

# change to non-priviliged user
USER deno

# install Denon for development
RUN deno install -Af --unstable https://deno.land/x/denon@2.3.1/denon.ts
ENV PATH /home/deno/.deno/bin:$PATH

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
