import Link from 'next/link';
import Container from '../Container';
import FooterList from './FooterList';
import { MdFacebook } from 'react-icons/md';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8 max-w-5xl mx-auto'>
          <FooterList>
            <h3 className='text-base font-semibold mb-2'>Categories</h3>
            <Link href='#'>Phones</Link>
            <Link href='#'>Laptops</Link>
            <Link href='#'>Desctops</Link>
            <Link href='#'>Watches</Link>
            <Link href='#'>Tv</Link>
            <Link href='#'>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-semibold mb-2'>Customer Service</h3>
            <Link href='#'>Contact us</Link>
            <Link href='#'>Shipping Policy</Link>
            <Link href='#'>Returns & Exchanges</Link>
            <Link href='#'>FAQs</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-semibold mb-2'>About Us</h3>
            <p className='mb-2'>
              Our store company is dedicated to provide you with the latest and
              greatest devices and accesories to our customers, where you can
              find the widest selection of digital Electronics.
            </p>
          </FooterList>
        </div>
        <div className='flex items-center max-w-3xl mx-auto justify-between whitespace-nowrap'>
          <div>
            <p className='text-sm mb-6'>
              {' '}
              &copy; {new Date().getFullYear()} Ecommerce-App. All rights
              reserved
            </p>
          </div>
          <FooterList>
            <div className='flex items-center justify-center gap-3'>
              <h3 className='text-base font-semibold '>Follow Us</h3>
              <div className='flex gap-3'>
                <Link href='#'>
                  <MdFacebook size={24} />
                </Link>
                <Link href='#'>
                  <AiFillTwitterCircle size={24} />
                </Link>
                <Link href='#'>
                  <AiFillInstagram size={24} />
                </Link>
                <Link href='#'>
                  <AiFillYoutube size={24} />
                </Link>
              </div>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
