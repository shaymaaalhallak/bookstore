import book1 from '../assests/book1.webp';
import book2 from '../assests/book2.webp';
import book3 from '../assests/book3.webp';
import book4 from '../assests/book4.webp';
import book5 from '../assests/book5.webp';
import book6 from '../assests/book6.webp';
import book7 from '../assests/book7.webp';
import book8 from '../assests/book8.webp';
import book9 from '../assests/book9.webp';
import book10 from '../assests/book10.webp';
import book11 from '../assests/book11.webp';
import book12 from '../assests/book12.webp';
import book13 from '../assests/book13.webp';
import book14 from '../assests/book14.webp';
import book15 from '../assests/book15.webp';
import book16 from '../assests/book16.webp';
import book17 from '../assests/book17.webp';
import book18 from '../assests/book18.webp';
import book19 from '../assests/book19.webp';
import book20 from '../assests/book20.webp';


const books = [
  // Programming
  { id: '1', title: 'The Pragmatic Programmer', author: 'Andrew Hunt, David Thomas', price: 29.99, rating: 4.8,
     description: 'A seminal book on modern software engineering practices.',
      image: book1, category: 'Programming' },
  { id: '2', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', price: 24.5, rating: 4.6,
     description: 'A modern introduction to programming in JavaScript.',
      image: book2, category: 'Programming' },
  { id: '3', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', price: 34.0, rating: 4.7,
     description: 'Principles for reliable, scalable, maintainable systems.',
      image: book3, category: 'Programming' },
  { id: '4', title: 'Clean Code', author: 'Robert C. Martin', price: 32.99, rating: 4.9,
     description: 'A handbook of agile software craftsmanship.',
      image: book4, category: 'Programming' },

  // Self-Help
  { id: '5', title: 'Atomic Habits', author: 'James Clear', price: 18.0, rating: 4.8,
     description: 'Build good habits and break bad ones.',
      image: book5, category: 'Self-Help' },
  { id: '6', title: 'Deep Work', author: 'Cal Newport', price: 22.0, rating: 4.6,
     description: 'Rules for focused success in a distracted world.',
      image: book6, category: 'Self-Help' },
  { id: '7', title: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', price: 20.0, rating: 4.7,
     description: 'Timeless principles for personal and professional effectiveness.',
      image: book7, category: 'Self-Help' },

  // History
  { id: '8', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', price: 25.0, rating: 4.7,
     description: 'Exploring the history and impact of Homo sapiens.',
      image: book8, category: 'History' },
  { id: '9', title: 'Guns, Germs, and Steel', author: 'Jared Diamond', price: 26.0, rating: 4.6,
     description: 'The fates of human societies explained by environment and geography.', 
     image: book9, category: 'History' },

  // Business
  { id: '10', title: 'The Lean Startup', author: 'Eric Ries', price: 27.5, rating: 4.5,
     description: 'How today’s entrepreneurs use continuous innovation.',
      image: book10, category: 'Business' },
  { id: '11', title: 'Zero to One', author: 'Peter Thiel', price: 28.0, rating: 4.6,
     description: 'Notes on startups, innovation, and creating the future.', 
    image: book11, category: 'Business' },

  // Fiction
  { id: '12', title: '1984', author: 'George Orwell', price: 15.0, rating: 4.9,
     description: 'Dystopian classic about surveillance and totalitarianism.',
     image: book12, category: 'Fiction' },
  { id: '13', title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 18.5, rating: 4.8,
     description: 'A fantasy adventure in Middle-earth.',
      image: book13, category: 'Fiction' },
  { id: '14', title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 16.0, rating: 4.9,
     description: 'A story of racial injustice in the American South.', 
     image: book14, category: 'Fiction' },

  // Science
  { id: '15', title: 'A Brief History of Time', author: 'Stephen Hawking', price: 20.0, rating: 4.7,
     description: 'Explains cosmology and the universe for general readers.', 
     image: book15, category: 'Science' },
  { id: '16', title: 'The Selfish Gene', author: 'Richard Dawkins', price: 22.0, rating: 4.6,
     description: 'Exploring evolution and gene-centered view of life.',
      image: book16, category: 'Science' },

  // Philosophy
  { id: '17', title: 'Meditations', author: 'Marcus Aurelius', price: 14.0, rating: 4.8,
     description: 'Stoic philosophy and reflections on life.', 
     image: book17, category: 'Philosophy' },
  { id: '18', title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', price: 18.0, rating: 4.5,
     description: 'Foundational work of modern philosophy.', 
     image: book18, category: 'Philosophy' },

  // AI / Tech
  { id: '19', title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell, Peter Norvig',
     price: 45.0, rating: 4.7,
      description: 'Comprehensive textbook on AI concepts.',
       image: book19, category: 'AI' },
  { id: '20', title: 'Life 3.0', author: 'Max Tegmark', price: 24.0, rating: 4.6, 
    description: 'Exploring the future of artificial intelligence.',
     image: book20, category: 'AI' },
]

export default books;
