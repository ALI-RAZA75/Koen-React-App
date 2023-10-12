import React from 'react';
import BannerImage from '@assets/images/hero.png';
import './style.scss';
import styled from 'styled-components';

const StyledContainer = styled.div`
  top: 0;
`;

const StyledContent = styled.div`
  padding: 50px 30px;
  gap: 30px;
`;

const StyledTitle = styled.span`
  font-size: 75px;
  line-height: 48px;
  font-weight: 500;
`;

const StyledButton = styled.button`
  height: fit-content;
`;

const Banner = () => {
  return (
    <div className='banner-container position-relative '>
      <img src={BannerImage} className='banner-image' />
      <StyledContainer className='position-absolute w-100 h-100 d-flex justify-align-content-end align-items-end '>
        <StyledContent className='d-flex align-items-center justify-content-center '>
          <StyledTitle className='text-white'>About Us</StyledTitle>
          <StyledButton className='bg-transparent text-white border-white btn rounded-pill'>
            Get started
          </StyledButton>
        </StyledContent>
      </StyledContainer>
    </div>
  );
};

export default Banner;
