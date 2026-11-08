# Pendu (Hangman)

Hangman with French words sorted by theme: guess the word letter by letter before the gallows drawing is complete. Accents do not count.

*Version française : [README.md](README.md)*

## How to play

- Click the letters on the on-screen keyboard or type them. A right letter appears at every position in the word; a wrong letter moves the drawing on.
- Accents do not count: **E** also finds É, È, Ê and Ë, **C** finds Ç. Spaces, hyphens and apostrophes are already shown.
- **Hint**: reveals a missing letter, but costs one mistake (not available when only one mistake is left).
- **Enter** or **New word**: move on to the next word. Changing theme or level draws a new one.

The word's theme and the number of mistakes are shown. If you lose, the word is revealed with its exact spelling.

## Levels

- **Easy**: 10 mistakes allowed, words of 4 to 8 letters, with the first and last letters given.
- **Normal**: 8 mistakes, words of at least 4 letters.
- **Hard**: 6 mistakes, words of at least 7 letters.
- **Expert**: 4 mistakes, words of at least 8 letters.

The drawing moves on according to the share of mistakes used: it is complete at the last mistake, whatever the level.

## Themes

Animals, Countries, Cities, Jobs, Fruit and vegetables, Cooking, Sports, Home, Nature, Human body, Clothes, Transport, Music, Science and space, Video games and computing, Anime and manga, Difficult words, or **All themes** mixed.

## Statistics

Words won, words lost, current winning streak and best streak.

## Data and sync

Your statistics are stored by NeoDex, backed up and synced between your PCs when sync is on. On first launch, the plugin picks up what you already had in NeoDex.

## Install

In NeoDex: **NeoStore → Discover → Pendu → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
