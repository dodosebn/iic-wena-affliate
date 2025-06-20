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
    title: 'POST 1',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
  {
    id: 2,
    title: 'POST 2',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: twoImg,
  },
  {
    id: 3,
    title: 'POST 3',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
  {
    id: 4,
    title: 'POST 4',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: twoImg,
  },
  {
    id: 5,
    title: 'POST 5',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
  {
    id: 6,
    title: 'POST 6',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: twoImg,
  },
  {
    id: 7,
    title: 'POST 7',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: oneImg,
  },
  {
    id: 8,
    title: 'POST 8',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
  {
    id: 9,
    title: 'POST 9',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: twoImg,
  },
  {
    id: 10,
    title: 'POST 10',
    decrib: 'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
    path: 'https://www.amazon.com/',
    img: threeImg,
  },
];

export default AFFLIATE_ITEMS;
