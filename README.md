# Pendu

Le jeu du pendu avec des mots français classés par thème : devine le mot lettre par lettre avant que le dessin de la potence soit terminé. Les accents ne comptent pas.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- Clique sur les lettres du clavier à l'écran ou tape-les au clavier. Une lettre juste apparaît à toutes ses places dans le mot ; une lettre fausse fait avancer le dessin.
- Les accents ne comptent pas : **E** trouve aussi É, È, Ê et Ë, **C** trouve Ç. Les espaces, traits d'union et apostrophes sont déjà affichés.
- **Indice** : dévoile une lettre manquante, mais coûte une erreur (impossible quand il ne reste qu'une erreur).
- **Entrée** ou **Nouveau mot** : passer au mot suivant. Changer de thème ou de niveau en tire un nouveau.

Le thème du mot et le nombre d'erreurs sont affichés. Si tu perds, le mot est dévoilé avec son orthographe exacte.

## Niveaux

- **Facile** : 10 erreurs permises, des mots de 4 à 8 lettres, avec la première et la dernière lettre données.
- **Normal** : 8 erreurs, des mots d'au moins 4 lettres.
- **Difficile** : 6 erreurs, des mots d'au moins 7 lettres.
- **Expert** : 4 erreurs, des mots d'au moins 8 lettres.

Le dessin avance selon la part des erreurs utilisées : il est complet à la dernière erreur, quel que soit le niveau.

## Thèmes

Animaux, Pays, Villes, Métiers, Fruits et légumes, Cuisine, Sports, Maison, Nature, Corps humain, Vêtements, Transports, Musique, Sciences et espace, Jeux vidéo et informatique, Animes et mangas, Mots difficiles, ou **Tous les thèmes** mélangés.

## Statistiques

Mots gagnés, mots perdus, série de victoires en cours et meilleure série.

## Données et synchronisation

Tes statistiques sont enregistrées par NeoDex, sauvegardées et synchronisées entre tes PC si la synchro est activée. Au premier lancement, le plugin reprend ce que tu avais déjà dans NeoDex.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Pendu → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
