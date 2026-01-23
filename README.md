# TP-Node : API de Gestion de Cours

[![Node.js](https://img.shields.io/badge/Node.js-v18-green.svg)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.x-orange.svg)](https://sequelize.org)

API backend Node.js/Express pour gérer des **cours en ligne**, **catégories** et **utilisateurs** avec authentification JWT. Projet de formation Diginamic utilisant Sequelize/SQLite.

## 🎯 Fonctionnalités Principales

- 📂 **Gestion des catégories** : CRUD complet (public GET, privé POST/PUT/DELETE)
- 📚 **Gestion des cours** : Liste filtrée (include catégorie), détails, filtre niveau, CRUD privé
- 🔐 **Authentification** : Register/Login JWT + bcrypt, rôles instructor/admin
- ✅ **Validation** : express-validator + customs (unique/exists)
- 🔗 **Associations Sequelize** : Course↔Category↔User
- ⏰ **Publication** : `published: true` pour prod

## 🛠️ Stack Technique

| Technologie          | Version | Rôle                     |
|----------------------|---------|--------------------------|
| Node.js             | 18+     | Runtime                  |
| Express.js          | 4.x     | Framework API REST       |
| Sequelize           | 6.x     | ORM SQLite               |
| jsonwebtoken        | latest  | JWT Auth                 |
| bcryptjs            | latest  | Hash passwords           |
| express-validator   | latest  | Validation inputs        |
| dotenv              | latest  | Variables d'environnement|
| nodemon             | latest  | Hot reload dev           |

## 🚀 Installation & Démarrage

### 1. Clone & Install

```bash
git clone https://github.com/contant30/TP-Node.git
cd TP-Node
npm install
````
### 2. .env
```bash
JWT_SECRET=super_secret_key_changez_moi
```

### 3. Lancement
```bash
npm run dev
```
✅ Serveur live : http://localhost:3000

## 📋 Documentation API Complete

### Authentification
| Méthode | Endpoint           | Auth | Body Exemple                                                     |
| ------- | ------------------ | ---- | ---------------------------------------------------------------- |
| POST    | /api/auth/register | ❌    | {"username":"user1","email":"user@test.com","password":"pwd123"} |
| POST    | /api/auth/login    | ❌    | {"email":"user@test.com","password":"pwd123"} → Token            |

### Catégories (CRUD)
| Méthode | Endpoint            | Auth | Exemple Body                                  |
| ------- | ------------------- | ---- | --------------------------------------------- |
| GET     | /api/categories     | ❌    | -                                             |
| POST    | /api/categories     | ✅    | {"name":"Web Dev","description":"React/Node"} |
| PUT     | /api/categories/:id | ✅    | {"name":"Web Dev 2.0"}                        |
| DELETE  | /api/categories/:id | ✅    | -                                             |

### Cours (CRUD + Filtre)
| Méthode | Endpoint                | Auth | Exemple Body               |
| ------- | ----------------------- | ---- | -------------------------- |
| GET     | /api/cours              | ❌    | Liste publiés (+ category) |
| GET     | /api/cours/:id          | ❌    | Détails complet            |
| GET     | /api/cours/level/avance | ❌    | Filtre niveau              |
| POST    | /api/cours              | ✅    | Voir exemple ci-dessous    |
| PUT     | /api/cours/:id          | ✅    | {"published":true}         |
| DELETE  | /api/cours/:id          | ✅    | -                          |

### Headers obligatoires (CRUD) :
```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Content-Type: application/json
```


## 📁 Architecture du Projet
```bash
TP-Node/
├── 📁 models/              # Modèles Sequelize
│   ├── User.js
│   ├── Course.js
│   ├── Category.js
│   └── associations.js     # belongsTo/hasMany
├── 📁 controllers/         # Logique routes
│   ├── authController.js
│   ├── courseController.js
│   └── categoryController.js
├── 📁 services/            # Business logic
│   ├── authService.js
│   ├── courseService.js    # findAll({include: Category})
│   └── categoryService.js
├── 📁 validators/          # express-validator
│   ├── authValidator.js
│   └── courseValidator.js  # custom: category exists
├── 📁 middleware/          # Middlewares
│   ├── authMiddleware.js   # verifyToken
│   └── validate.js         # validationResult
├── 📁 routes/              # Routers Express
│   ├── authRouter.js
│   ├── courseRouter.js
│   └── categoryRouter.js
├── 📁 db/                  # Base de données
│   └── db.js               # sequelize.sync({alter:true})
├── .env                    # Config sensible
├── index.js                # App + connectDB()
└── package.json
```

##💾 Données de Test (Import Direct)

###  Catégories prêtes :
```bash
[
  {"name":"Développement Web","description":"React/Node.js"},
  {"name":"DevOps","description":"Docker/K8s/CI-CD"},
  {"name":"Data Science","description":"Python/ML/SQL"},
  {"name":"Mobile","description":"React Native/Flutter"},
  {"name":"Cybersécurité","description":"Pentest/OWASP"}
]
```
###  Cours exemples :
```bash
[
  {"title":"React Avancé","categoryId":1,"level":"avance","price":149.99,"duration":720},
  {"title":"Node.js API","categoryId":1,"level":"intermediaire","price":99.99,"duration":480},
  {"title":"Docker Prod","categoryId":2,"level":"avance","price":199.99,"duration":900},
  {"title":"Python ML","categoryId":3,"level":"avance","price":249.99,"duration":1080}
]

```


