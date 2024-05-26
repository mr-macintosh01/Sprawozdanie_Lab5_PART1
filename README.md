# Sprawozdanie_Lab5_PART1

# 1. Treść utworzonego pliku Dockerfile
```
# Etap pierwszy: Budowanie aplikacji
FROM node:14-alpine AS builder

#Ustawienie katalogu roboczego
WORKDIR /app

#Kopiowanie pliku package.json i instalacja zależności
COPY package.json .
RUN npm install

#Kopiowanie kodu aplikacji
COPY . .

#Definiowanie zmiennej ARG dla wersji aplikacji
ARG VERSION
ENV VERSION=${VERSION}

#Budowanie aplikacji
RUN npm run build

#Uruchomienie aplikacji
CMD ["node", "index.js"]
```
# 2. Użyte polecenie do budowy obrazu i wynik jego działania

```
docker build -t my-simple-web-app --build-arg VERSION=1.0.0 .

Wynik działania:
[+] Building 9.4s (12/12) FINISHED                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                               0.1s
 => => transferring dockerfile: 485B                                                                               0.0s
 => [internal] load metadata for docker.io/library/node:14-alpine                                                  1.2s
 => [auth] library/node:pull token for registry-1.docker.io                                                        0.0s
 => [internal] load .dockerignore                                                                                  0.1s
 => => transferring context: 2B                                                                                    0.0s
 => [1/6] FROM docker.io/library/node:14-alpine@sha256:434215b487a329c9e867202ff89e704d3a75e554822e07f3e0c0f9e606  0.0s
 => [internal] load build context                                                                                  0.1s
 => => transferring context: 849B                                                                                  0.0s
 => CACHED [2/6] WORKDIR /app                                                                                      0.0s
 => [3/6] COPY package.json .                                                                                      0.1s
 => [4/6] RUN npm install                                                                                          5.7s
 => [5/6] COPY . .                                                                                                 0.2s
 => [6/6] RUN npm run build                                                                                        0.9s
 => exporting to image                                                                                             0.5s
 => => exporting layers                                                                                            0.4s
 => => writing image sha256:dfec5368ca45e1ab91d4b3cdf1c838bff884d6053c69ead9bfc83245036dea95                       0.0s
 => => naming to docker.io/library/my-simple-web-app                                                               0.0s

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview
```
# 3. Polecenie uruchamiające serwer

```
docker run -d -p 8080:8080 my-simple-web-app
```
# 4. Polecenie potwierdzające działanie kontenera i poprawne funkcjonowanie opracowanej aplikacji

```
docker ps

CONTAINER ID   IMAGE               COMMAND                  CREATED          STATUS          PORTS                    NAMES
d138b0ad945d   my-simple-web-app   "docker-entrypoint.s…"   13 minutes ago   Up 13 minutes   0.0.0.0:8080->8080/tcp   peaceful_nash
```
