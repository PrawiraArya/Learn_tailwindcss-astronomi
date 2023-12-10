const images = [
  {
    src: "./assets/Markurius.png",
    title: "Markurius",
    detail:
      "Merkurius merupakan planet terkecil di Tata Surya sekaligus yang terdekat dari Matahari. Periode revolusi planet ini merupakan yang terpendek dari semua planet di Tata Surya,",
  },
  {
    src: "./assets/Venus.png",
    title: "venus",
    detail:
      "Venus memiliki tekanan atmosfer lebih besar dari bumi yaitu 92 kali lipat. Planet Venus memiliki orbit mengelilingi matahari selama 224,7 hari (satuan pada planet Bumi).",
  },
  {
    src: "./assets/Bumi.png",
    title: "Bumi",
    detail:
      "Sebagai manusia yang menghabiskan waktunya di permukaan Bumi, kita tidak pernah melihat planet ini secara keseluruhan. Pandangan mata manusia memiliki batasnya sendiri yang sering disebut sebagai horizon.",
  },
  {
    src: "./assets/MArs.png",
    title: "Mars",
    detail:
      "Mars adalah planet terdekat keempat dari Matahari. Namanya diambil dari dewa perang Romawi, Mars. Planet ini sering dijuluki sebagai  karena tampak dari jauh berwarna kemerah-kemerahan. Ini disebabkan oleh keberadaan besi(III) oksida di permukaan planet Mars.",
  },
  {
    src: "./assets/Yupiter.png",
    title: "yupiter",
    detail:
      "Jupiter merupakan planet paling terang setelah Matahari, Satelit alam, dan Venus. Keberadaan Jupiter telah diketahui sejak zaman prasejarah sebagai ”bintang pengembara”.",
  },
  {
    src: "./assets/Saturnus.png",
    title: "saturnus",
    detail:
      "Saturnus atau zohal adalah planet keenam dari Matahari dan merupakan planet terbesar kedua di Tata Surya setelah Jupiter. Saturnus juga merupakan sebuah raksasa gas yang memiliki perak rata-rata sekitar 9 kali radius rata-rata Bumi.",
  },
  {
    src: "./assets/Uranus.png",
    title: "uranus",
    detail:
      "Uranus merupakan planet yang memiliki jari-jari terbesar ketiga sekaligus massa terbesar keempat di Tata Surya. Uranus juga merupakan satu-satunya planet yang namanya berasal dari tokoh dalam mitologi Yunani, dari versi Latinisasi nama dewa langit Yunani Ouranos",
  },
  {
    src: "./assets/Neptunus.png",
    title: "neptunus",
    detail:
      "Planet ini dinamai dari dewa lautan Romawi. Neptunus merupakan planet terbesar keempat berdasarkan diameter dan terbesar ketiga berdasarkan massa. Massa Neptunus tercatat 17 kali lebih besar daripada Bumi, dan sedikit lebih kecil daripada Uranus",
  },
  // Add more image data as needed
];

const imageContainer = document.getElementById("imageContainer");
const currentImage = document.getElementById("currentImage");
const nextButton = document.getElementById("nextButton");
const imageTitle = document.getElementById("imageTitle");
const imageDetail = document.getElementById("imageDetail");

let currentIndex = 0;

function updateImage() {
  const currentImageData = images[currentIndex];
  currentImage.src = currentImageData.src;
  imageTitle.textContent = currentImageData.title;
  imageDetail.textContent = currentImageData.detail;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Initial image update
updateImage();
