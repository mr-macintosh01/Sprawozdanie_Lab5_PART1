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
