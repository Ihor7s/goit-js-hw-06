const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryImg = document.querySelector(".gallery");

const makeGallery= (image) => {
  const { url, alt } = image;
  return `<li class = "gallery-list"><img class = "gallery-list__ithem" src ="${url}" alt = "${alt}"></li>`;
};

const makeGalImg = images.map(makeGallery).join(" ");

galleryImg.insertAdjacentHTML("beforeend", makeGalImg);



// const liRef = document.createElement('li');
// const imgRef = document.createElement('img');
// imgRef.classList.add = ('ithem__img');
// imgRef.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imgRef.alt = 'White and Black Long Fur Cat';

// liRef.append(imgRef);
// console.log(liRef);
