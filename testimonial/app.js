const testimonials = [
  {
    name: 'Chris B',
    photo: './images/user-1.jpeg',
    desc: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolore at laborum eos iure dolorem voluptatibus repudiandae distinctio perferendis cumque."',
  },
  {
    name: 'Jhon D',
    photo: './images/user-2.jpeg',
    desc: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolore at laborum eos iure dolorem voluptatibus repudiandae distinctio perferendis cumque."',
  },
  {
    name: 'Steve Alin',
    photo: './images/user-3.jpeg',
    desc: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolore at laborum eos iure dolorem voluptatibus repudiandae distinctio perferendis cumque."',
  },
  {
    name: 'Hassn H',
    photo: './images/user-4.jpeg',
    desc: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolore at laborum eos iure dolorem voluptatibus repudiandae distinctio perferendis cumque."',
  },
  {
    name: 'Lokman Sinar',
    photo: './images/user-5.jpeg',
    desc: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolore at laborum eos iure dolorem voluptatibus repudiandae distinctio perferendis cumque."',
  },
];

const imgEl = document.querySelector('img'),
  descEl = document.querySelector('.description'),
  nameEl = document.querySelector('.name');

let idx = 0;

function nextTestimonial() {
  const { name, photo, desc } = testimonials[idx];
  imgEl.src = photo;
  descEl.innerText = desc;
  nameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    nextTestimonial();
  }, 4000);
}

nextTestimonial();
