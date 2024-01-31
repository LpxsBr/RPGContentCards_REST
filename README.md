# RPGContentCards REST API

## BASICS AND CONFIG

### BASE URL (TEMPORARY)

```json
https://rpg-content-cards-rest.vercel.app/api
```

### HEADER

```json
"header": {
    "content-type": "application/json",
    "x-http-custom-key": "SECRET hahahah"
    "ngrok-skip-browser-warning": "asdasd asd asda"
}
```

## OS ENDPOINTS

### TO PUBLISH A SPELL

```markdown
POST : /api/spell
```

body example

```json
{
	"name": "Bola de Fogo",
	"level": 3,
	"school": "Evocação",
	"description": "Cria uma esfera de fogo que explode em um ponto escolhido.",
	"castingTime": "1 ação",
	"range": "120 pés",
	"components": ["V", "S", "M (um grão de pimenta)"],
	"duration": "Instantânea"
}
```

### TO GET THE COLLECTION WITH ALL SPELLS

```markdown
GET : /api/spell
```

---
### TO PUBLISH A ITEM

```markdown
POST : /api/item
```

body example

```json

{
	"name": "Lingua de Dragão",
	"attunement": true,
	"type": "Pergaminho",
	"rarity": "Comum",
	"description": ["Um pergaminho que quando lido garante um bônus de +1 em testes de Intimidação."]
}
```

### TO GET THE COLLECTION WITH ALL ITENS

```markdown
GET : /api/item
```
---