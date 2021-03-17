<p align="center">
  <img src="https://study-eu.s3.amazonaws.com/uploads/university/universit--paris-1-panth-on-sorbonne-479-logo.png">
</p>


# ModelingWebApp - Projet S2-PRO3

Projet réalisé dans le cadre du Master 1 Informatique MIAGE à l'Université Paris-1 Panthéon-Sorbonne. 

Lien vers la version website du repository : https://corentinleroux.github.io/ModelingWebApp/

Groupe constitué de : 

- MEURIC Camille
- DOGLOBE Gérard
- ABIZMIL Raphael
- BENOUZGHAR Mehdi
- PIOTROWSKI Paul
- LE ROUX Corentin

## Technologies

![Quasar](https://img.shields.io/badge/Quasar-2.1.15-brightgreen)   ![Typescript](https://img.shields.io/badge/Typescript-3.9.5-brightgreen)
 ![Vue](https://img.shields.io/badge/Vue-2.6.12-blue)   ![Vuex](https://img.shields.io/badge/Vuex-3.6.0-blue) ![VueRouter](https://img.shields.io/badge/VueRouter-3.1.3-blue)
 
![Firebase](https://img.shields.io/badge/Firebase-8.3.0-red) 
![ESLint](https://img.shields.io/badge/eslint-6.8.0-orange) ![Node](https://img.shields.io/badge/Node-10.18.1-orange) 

![JointJS](https://img.shields.io/badge/JointJS-3.3.1-yellow)  ![DiagramVue](https://img.shields.io/badge/DiagramVue-0.3.2-yellow) 
## Installation 

- Si vous ne possèdez pas Quasar CLI, faites :  `yarn global add @quasar/cli` ou  `npm install -g @quasar/cli`
- `gh repo clone corentinleroux/ModelingWebApp`
- `git checkout Quasar`
- Rendez vous au dossier et faites `cd ModelingWebAppQuasar` 
- `npm i` pour installer les modules dans `nodes_modules`
        
## Lancer le projet 

Lancez `quasar dev` pour exécuter le projet. 


## Ajouter des diagrammes au Stack 1 

Vous pouvez ajouter du SVG directement avec le bouton Import/Export en faisant un Copier/Coller dans la fenêtre qui s'ouvre (supprimer le contenu déjà existant) : 

```{"width":1440,"height":821,"background":"#f0f0f0","nodes":[{"id":"1784033378de6952","content":{"text":"Voiture","color":"white"},"width":200,"height":200,"stroke":"black","strokeWeight":"2","shape":null,"point":{"x":475,"y":146.84479306446727}},{"id":"17840338c5dcbfe0","content":{"text":"Roue","color":"grey"},"width":200,"height":200,"stroke":"black","strokeWeight":"2","shape":null,"point":{"x":10,"y":178.98595854289357}},{"id":"17840339def65187","content":{"text":"Moteur","color":"grey"},"width":200,"height":200,"stroke":"black","strokeWeight":"2","shape":null,"point":{"x":828,"y":238.0500754855987}}],"links":[{"id":"1784033aedde6686","source":"17840339def65187","destination":"1784033378de6952","point":{"x":727,"y":191.447434275033},"color":"black","shape":"straight","pattern":"solid","arrow":"dest"},{"id":"1784033e4ffc5448","source":"17840338c5dcbfe0","destination":"1784033378de6952","point":{"x":242.5,"y":162.91537580368043},"color":"black","shape":"straight","pattern":"dash","arrow":"src"}]}```

## Les différentes pages

Prenons le cas où votre préfixe est http://localhost:8080/#/, les pages seront : 

- http://localhost:8080/#/ (Accueil)
- http://localhost:8080/#/editor (Stack 1 : diagram-vue)
- http://localhost:8080/#/editor2 (Stack 2 : JointJS)
- http://localhost:8080/#/login (Connexion)
- http://localhost:8080/#/signup (Inscription)
- http://localhost:8080/#/account (Page du Compte)


## Demo



Une démonstration est disponible sur Youtube à l'adresse suivante :  [Youtube - Demonstration](https://youtu.be/Gebm9YGn4Lg)

[![Demonstration](https://res.cloudinary.com/marcomontalbano/image/upload/v1615936689/video_to_markdown/images/youtube--Gebm9YGn4Lg-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/Gebm9YGn4Lg "Presentation")

