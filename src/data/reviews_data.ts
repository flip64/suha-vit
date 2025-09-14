

interface DataType {
  id: number;
  img: string;
  title: string;
  date: string;
  images: {
    id: number;
    img: string;
}[];
} 

const reviews_data: DataType[] = [
  {
    id: 1,
    img: '/assets/img/bg-img/7.jpg',
    title: 'Very good product. It is just amazing!',
    date: 'Designing World 12 Dec 2024',
    images: [
      {id: 1, img: '/assets/img/product/3.png'}
    ]
  },
  {
    id: 2,
    img: '/assets/img/bg-img/8.jpg',
    title: 'Very excellent product. Love it.',
    date: 'Designing World 8 Dec 2024',
    images: [
      {id: 1, img: '/assets/img/product/4.png'},
      {id: 2, img: '/assets/img/product/6.png'},      
    ]
  },
  {
    id: 3,
    img: '/assets/img/bg-img/9.jpg',
    title: 'What a nice product it is. I am looking it is.',
    date: 'Designing World 28 Nov 2024',
    images: []
  },
]

export default reviews_data