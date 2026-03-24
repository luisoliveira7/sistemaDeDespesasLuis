## Sobre

Esse projeto é uma API simples que eu fiz em Node.js para controlar despesas.

dá pra:
- adicionar despesa
- listar
- buscar por id
- atualizar
- remover

Também fiz as duas partes extras que o sor pediu:
- total gasto
- total por categoria

## oq usei

- Node.js
- Express
- postman

## como rodar

No terminal:


npm install


Depois:


node src/app.js


Vai rodar em:

http://localhost:3000

## Rotas

GET /expenses  
Lista todas as despesas

GET /expenses/:id  
Busca uma despesa pelo id

POST /expenses  
Cria uma nova despesa

PUT /expenses/:id  
Atualiza uma despesa

DELETE /expenses/:id  
Remove uma despesa

## Exemplo

{
  "title": "Mercado",
  "amount": 100,
  "category": "Alimentacao",
  "date": "2026-03-10",
  "description": "Compra"
}