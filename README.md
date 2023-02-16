# portfolio

Repositório do portfolio versão Vuejs

## Requisitos
![Maintainer](https://img.shields.io/badge/vue-^3.2.45-blue)
![Maintainer](https://img.shields.io/badge/vite-^4.0.0-blue)
![Maintainer](https://img.shields.io/badge/docker-^4.10.0-blue)
![Maintainer](https://img.shields.io/badge/node-^19.6.0-blue)
![Maintainer](https://img.shields.io/badge/npm-^9.4.0-blue)

## Instalação
Contrua a imagem [docker](https://www.docker.com/) com o comando
```bash
docker build -t portfolio .
```

## Usar
Crie um container docker
``` bash
docker run -it -d  -p 8000:5173 -v ${PWD}:/app --rm --name portfolio-container portfolio
```
```bash
docker exec portfolio-container sh -c "npm i ; npm run dev"
```
Acesse localhost:8000 no navegador
