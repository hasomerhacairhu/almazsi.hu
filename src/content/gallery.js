// Centralized Facebook image links as associative arrays with clear keys.
// Replace with selected public images from:
// https://www.facebook.com/hasomerhacair/photos_albums



export const GALLERY = {
  // 4 placeholder images for the About section

  hero: { key: 'hero-1', url: "img/somer/2.jpg", alt: 'Fejléc' },
  about: [
    { key: 'about-1', url: "img/somer/1.jpg", alt: 'Közösségi pillanat 1' },
    { key: 'about-2', url: "img/somer/18.jpg", alt: 'Közösségi pillanat 2' },
    { key: 'about-3', url: "img/somer/3.jpg", alt: 'Közösségi pillanat 3' },
    { key: 'about-4', url: "img/somer/4.jpg", alt: 'Közösségi pillanat 4' },
  ],
  // Placeholder images for the Activities gallery grid
  activities: [
    { key: 'act-1', url: "img/somer/5.jpg", alt: 'Program 1' },
    { key: 'act-2', url: "img/somer/16.jpg", alt: 'Program 2' },
    { key: 'act-3', url: "img/somer/7.jpg", alt: 'Program 3' },
    { key: 'act-4', url: "img/somer/8.jpg", alt: 'Program 4' },
    { key: 'act-5', url: "img/somer/9.jpg", alt: 'Program 5' },
    { key: 'act-6', url: "img/somer/10.jpg", alt: 'Program 6' },
  ],
  // History key members referenced inside the HTML content (modal)
  // Use direct links (key -> url) instead of objects
  history: {
    'bettelheim': 'img/Bettelheim-Samu-az-első-országos-cionista-értekezlet-szervezője.jpg',
    'az-ifju-herzl': 'img/Az-ifjú-Herzl.jpg',
    'max-nordau': 'img/Max-Nordau11.jpg',
    'theodor-herzl': 'img/theodor-herzl-a-cionizmus-atyja1.jpg',
  },
}

// Tip: Cseréhez elég a fenti objektum megfelelő elemének URL-jét módosítani.
