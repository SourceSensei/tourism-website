const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Kuznetsov Leonid",
    position: "Sintra and Cape Roca",
    photo:
      "https://img.tourister.ru/files/2/9/4/4/5/3/7/3/clones/45_45_fixed.jpg",
    text: "Dear Nina! Let me thank you for 2 wonderful excursions. Everyone really liked not only that you showed incredible erudition and knowledge of the history of Portugal. You also charmed us with your great sense of humor and tact. Thank you very much. future meetings Leonid Elena Alexander",
  },
  {
    name: "Maandi Ludmila",
    position: "Lisbon + Sintra + Cape Roca",
    photo: "https://img.tourister.ru/files/2/3/7/0/6/1/3/2/clones/70_70_back-ffffff.jpg",
    text: "On behalf of our entire group, I want to thank Nina for the tours. I really enjoyed talking to her. Everything was organized punctually, correctly and without unnecessary fuss. Everything you need for relaxation and educational excursions. If anyone needs a tour service, then I advise you, you will not be bored. A person who is passionate about his work will be able to convey to you his love for the country and the city. I highly recommend. Thanks Nina again.",
  },
  {
    name: "Anna Pavlova",
    position: "Lisbon + Sintra + Cape Roca",
    photo: "https://img.tourister.ru/files/1/4/2/4/3/6/4/5/clones/70_70_back-ffffff.jpg",
    text: "My husband and I travel a lot. I want to come back to Portugal again and again. Once again we turn to Nina. No one will tell you about all the subtleties and sights like that. Professional. Each excursion is the discovery of new horizons.",
  },
  {
    name: "Msk Anastasiia",
    position: "I want to go to Lisbon! Sightseeing around the city by car with pedestrian stops",
    photo: "https://img.tourister.ru/files/1/4/8/5/2/0/5/6/clones/70_70_back-ffffff.jpg",
    text: "I work as a manager in a luxury travel company. Booked Nina's services for our discerning VIP clients in Lisbon. The guests were delighted and expressed their deep gratitude to Nina. Nina worked directly with us promptly, clearly and clearly. Even from a telephone conversation, it was clear that this guide is a professional in his field.",
  },
  {
    name: "Kuz Inna",
    position: "Walking through the capital. Walking tour of the historical quarters of the city",
    photo: "https://img.tourister.ru/files/1/4/0/0/4/7/2/6/clones/70_70_back-ffffff.jpg",
    text: "The tour is great! Very clear, lively, sincere! Nina answered all our questions, rebuilt the tour in accordance with our desires. Very gentle and pleasant person to deal with!",
  },
  {
    name: "Kamushkina Elena",
    position: "Sintra and Cape Roca / visiting from one to three palaces",
    photo:
      "https://img.tourister.ru/files/2/2/7/3/3/2/0/0/clones/70_70_back-ffffff.jpg",
    text: "Nina conducted such interesting excursions that my husband, who is not interested in history and does not like any organized excursions, has already thanked me several times that I found such an interesting and pleasant guide and that he was very interested. I liked it: in what simple language she talked about difficult things and events, in what good condition her car was, how she responded to my calls in addition to the excursion. I would recommend her to anyone for tours.",
  },
  {
    name: "Perov Vladimir",
    position: "I want to go to Lisbon! Sightseeing around the city by car with pedestrian stops",
    photo: "https://img.tourister.ru/files/6/7/9/6/4/3/5/clones/70_70_back-ffffff.jpeg",
    text: "Rested with family at the end of August on the ocean. We decided to get to know the country more. To our great pleasure, we met Nina. She turned out to be a highly professional guide, as a person she is very nice, courteous and intelligent. After the first tour of Lisbon, we decided to make a second one as well. Will definitely recommend her to all my friends.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
