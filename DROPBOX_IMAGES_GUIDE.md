# Guide pour ajouter les images Dropbox

## Lien du dossier Dropbox
https://www.dropbox.com/scl/fo/lar92l05jxmzelx59u44y/AJtnVyS-NWEZQv3nFtbQ93I?rlkey=c2qqs6bpqyw690srcwcs0fapf&dl=0

## Comment obtenir les liens directs des images

1. **Ouvrez le dossier Dropbox** avec le lien ci-dessus
2. **Pour chaque image** que vous voulez utiliser :
   - Faites un **clic droit** sur l'image
   - Sélectionnez **"Partager"** ou **"Copy link"**
   - Un lien sera généré, par exemple : `https://www.dropbox.com/s/abc123xyz/image.jpg?dl=0`
   - **Remplacez `?dl=0` par `?raw=1`** pour obtenir le lien direct
   - Le lien final sera : `https://www.dropbox.com/s/abc123xyz/image.jpg?raw=1`

## Où ajouter les liens

Ouvrez le fichier : `lib/richard-orlinski-images.ts`

Ajoutez vos liens dans les sections appropriées :

```typescript
export const richardOrlinskiImages = {
  // Photo de portrait de Richard Orlinski (pour la section biographie)
  portrait: 'https://www.dropbox.com/s/...?raw=1',
  
  // Images pour les 4 cartes "The Orlinski Universe"
  sculpture: 'https://www.dropbox.com/s/...?raw=1',
  architecture: 'https://www.dropbox.com/s/...?raw=1',
  design: 'https://www.dropbox.com/s/...?raw=1',
  collectibles: 'https://www.dropbox.com/s/...?raw=1',
  
  // Galerie d'images (vous pouvez en ajouter plusieurs)
  gallery: [
    'https://www.dropbox.com/s/...?raw=1',
    'https://www.dropbox.com/s/...?raw=1',
    // Ajoutez autant d'images que vous voulez
  ],
  
  // Images d'expositions
  exhibitions: [
    'https://www.dropbox.com/s/...?raw=1',
  ],
  
  // Images d'œuvres d'art
  artworks: [
    'https://www.dropbox.com/s/...?raw=1',
  ],
}
```

## Images recommandées

- **portrait** : Une belle photo de Richard Orlinski (format portrait)
- **sculpture** : Photo d'une sculpture Orlinski
- **architecture** : Photo montrant l'intégration architecturale
- **design** : Photo d'objets de design Orlinski
- **collectibles** : Photo d'œuvres collectibles
- **gallery** : Plusieurs photos d'œuvres, sculptures, installations

Une fois les liens ajoutés, les images apparaîtront automatiquement sur la page `/brands` (Richard Orlinski).
