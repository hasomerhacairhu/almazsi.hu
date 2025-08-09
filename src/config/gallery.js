// Centralized Facebook image links as associative arrays with clear keys.
// Replace with selected public images from:
// https://www.facebook.com/hasomerhacair/photos_albums

const FB_PLACEHOLDER = 'https://scontent.fbud7-4.fna.fbcdn.net/v/t39.30808-6/495378608_1105052988333489_1186364256956068405_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=1OlbzZQR9EYQ7kNvwEkeoAF&_nc_oc=Adk1IIyQOU412xx2p96w7l5l7rmFYpBIIwUCDav6rl_FI0MuPoN2j68ITV-NgwojL40&_nc_zt=23&_nc_ht=scontent.fbud7-4.fna&_nc_gid=aAN1LitoRHsytKYEAbB0FA&oh=00_AfWLpSBqf2UuArTprYfV6DJJ8YSYPGJZhF-yDv5wIv4bmQ&oe=689CE1E8';


export const GALLERY = {
  // 4 placeholder images for the About section

  hero: { key: 'hero-1', url: "src/img/somer/2.jpg", alt: 'Fejléc' },
  about: [
    { key: 'about-1', url: "src/img/somer/1.jpg", alt: 'Közösségi pillanat 1' },
    { key: 'about-2', url: "src/img/somer/18.jpg", alt: 'Közösségi pillanat 2' },
    { key: 'about-3', url: "src/img/somer/3.jpg", alt: 'Közösségi pillanat 3' },
    { key: 'about-4', url: "src/img/somer/4.jpg", alt: 'Közösségi pillanat 4' },
  ],
  // Placeholder images for the Activities gallery grid
  activities: [
    { key: 'act-1', url: "src/img/somer/5.jpg", alt: 'Program 1' },
    { key: 'act-2', url: "src/img/somer/16.jpg", alt: 'Program 2' },
    { key: 'act-3', url: "src/img/somer/7.jpg", alt: 'Program 3' },
    { key: 'act-4', url: "src/img/somer/8.jpg", alt: 'Program 4' },
    { key: 'act-5', url: "src/img/somer/9.jpg", alt: 'Program 5' },
    { key: 'act-6', url: "src/img/somer/10.jpg", alt: 'Program 6' },
  ],
  // History key members referenced inside the HTML content (modal)
  // Use direct links (key -> url) instead of objects
  history: {
    'bettelheim': 'src/img/Bettelheim-Samu-az-első-országos-cionista-értekezlet-szervezője.jpg',
    'az-ifju-herzl': 'src/img/Az-ifjú-Herzl.jpg',
    'max-nordau': 'src/img/Max-Nordau11.jpg',
    'theodor-herzl': 'src/img/theodor-herzl-a-cionizmus-atyja1.jpg',
  },
}

// Tip: Cseréhez elég a fenti objektum megfelelő elemének URL-jét módosítani.
