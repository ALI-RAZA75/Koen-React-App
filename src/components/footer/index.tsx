import React from 'react';
import FooterImage from '@assets/images/footer-img.png';
import FooterLogo from '@assets/images/footer-logo.png';
import Facebook from '@assets/images/Facebook.png';
import Instagram from '@assets/images/Instagram.png';
import Pinterest from '@assets/images/Pinterest.png';
import Tiktok from '@assets/images/Tiktok.png';
import Youtube from '@assets/images/Youtube.png';
import ArrowLeft from '@assets/images/chevron-left.png';
import ArrowRight from '@assets/images/chevron-right.png';
import '@src/global.scss';
import './style.scss';

const Footer = () => {
  return (
    <div className='mt-80px'>
      <div className='container d-flex flex-column flex-lg-row justify-content-center text-18px text-400 leading-28px'>
        <div className='section-container mr-4'>
          <p className='section-title'>Buyer</p>
          <p>Property Listings</p>
          <p>Interactive Map</p>
          <p>Monmouth Ocean MLS</p>
          <p>Garden State MLS</p>
          <p>Bright MLS</p>
          <p>Forms</p>
        </div>
        <div className='section-container mr-4'>
          <p className='section-title'>Seller</p>
          <p>Forms</p>
          <p>Checklists</p>
          <p>Selling Resources</p>
          <p>Listing Photography</p>
          <p>Sellers Disclosure Form</p>
        </div>
        <div className='section-container mr-4'>
          <p className='section-title'>Investor</p>
          <p>Investor Resources</p>
          <p>501c3 Information</p>
          <p>Donating a Property</p>
          <p>Property Management</p>
          <p>Tax Attorney</p>
          <p>Blog Articles</p>
        </div>
        <div className='section-container mr-4'>
          <p className='section-title'>Information</p>
          <p>Testimonials</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Agents</p>
          <p>About Us</p>
          <p>Search</p>
        </div>
      </div>
      <div className='post-container d-flex flex-column flex-lg-row justify-content-center align-items-center mt-60px'>
        <div className='d-flex ml-50px mr-50px'>
          <button className='border-0 ml-30px bg-transparent align-self-center'>
            <img src={ArrowLeft} />
          </button>
          <div className='review-container ml-30px'>
            <p className='text-[16px] text-dark-grey leading-[24px]'>
              June 11, 2023
            </p>
            <p className='text-[18px] leading-[28px]'>
              “We are so happy with quick example text to build on the card
              title and make up the bulk of the card&apos;s content.”
            </p>
            <p className='text-[18px] text-dark-red leading-[28px] text-right'>
              Jesse A.
            </p>
          </div>
          <button className='border-0 bg-transparent align-self-center'>
            <img src={ArrowRight} />
          </button>
        </div>
        <div className='d-flex flex-column ml-50px mr-50px'>
          <textarea
            className='review-input mb-15px'
            placeholder='Leave a review...'
          />
          <button className='post-button justify-content-end align-self-end '>
            Post
          </button>
        </div>
      </div>
      <div className='container d-flex flex-column justify-content-center mt-80px'>
        <img src={FooterImage} className='align-self-md-center mb-80px' />
        <img src={FooterLogo} className='align-self-md-center mb-80px' />
        <div className='d-flex flex-column flex-md-row justify-content-center mb-80px'>
          <div className='text-center ml-50px mr-50px mb-20px'>
            <p className='text-24px text-300 leading-36px m-0'>
              Sales & Support
            </p>
            <p className='text-40px text-600 text-dark-red leading-60px m-0'>
              732.475.7705
            </p>
          </div>
          <div className='ml-50px mr-50px'>
            <div className='d-flex justify-content-center mb-30px'>
              <a
                href=''
                className='text-20px text-400 text-center leading-24px'
              >
                contact@MikeKoenRealtyNJ.com
              </a>
            </div>
            <div className='d-flex justify-content-between '>
              <a href=''>
                <img src={Facebook} />
              </a>
              <a href=''>
                <img src={Instagram} />
              </a>
              <a href=''>
                <img src={Pinterest} />
              </a>
              <a href=''>
                <img src={Tiktok} />
              </a>
              <a href=''>
                <img src={Youtube} />
              </a>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center text-13px text-400 leading-19px'>
          <div className='mb-20px'>
            <a href='' className='ml-30px mr-15px'>
              Privacy Policy
            </a>
            <a href='' className='mr-15px'>
              Terms of Use
            </a>
            <a href='' className='mr-15px'>
              Site Map
            </a>
            <a href='' className='mr-30px'>
              Home
            </a>
          </div>
          <p className='text-center ml-30px mr-30px'>
            © 2023 Mike Koen Realty LLC, All rights reserved. | ShoreSite Web
            Designs LLC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
