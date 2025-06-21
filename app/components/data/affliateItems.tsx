import { StaticImageData } from 'next/image';
import threeImg from '@/public/images/threechairs.webp';
import twoImg from '@/public/images/twochairs.webp';
import oneImg from '@/public/images/one-lonely-chair.jpg';

interface AffiliateItem {
  id: number;
  title: string;
  decrib: string;
  path: string;
  img: StaticImageData;
}

const AFFLIATE_ITEMS: AffiliateItem[] = [
  {
    id: 1,
    title: 'Sixth Post title',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
  {
    id: 2,
    title: 'Fifth Post title',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: twoImg,
  },
  {
    id: 3,
    title: 'Fourth Title Post ',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
  {
    id: 4,
      title: 'Third Post title',

    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: twoImg,
  },
  {
    id: 5,
     title: 'Second Title Post ',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
  {
    id: 6,
     title: 'Post Title Here',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: twoImg,
  },
  {
    id: 7,
     title: 'Summer Collections',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: oneImg,
  },
  {
    id: 8,
    title: 'Best Gifts for Holidays',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
  {
    id: 9,
    title: 'Gigi Hadi Show',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: twoImg,
  },
  {
    id: 10,
    title: 'New Trending Post',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
];

export default AFFLIATE_ITEMS;
