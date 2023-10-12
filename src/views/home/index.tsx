import React from 'react';
import Banner from './banner';
import Logo from '@assets/svgs/SecondaryLogo'
import styled from 'styled-components';
import GalleryComponent from '@src/components/gallery';
import CategoryComponent from '@src/components/categories';
import VideoComponent from '@src/components/video';
import OfferingComponent from '@src/components/offering';
import TrustComponent from '@src/components/trust';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 80%;
  margin: auto;
  align-items: center;
  justify-content: center;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
`

const StyledTitle = styled.span`
  color: #454545;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 38.4px;
`
const StyledText = styled.p`
  color: #454545;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 138.889% */
`
const StyledButton = styled.button`
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  color: #fff;
  background-color: #98002E;
`
const StyledHead = styled.h3`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 62px;
  font-style: normal;
  font-weight: 250;
  line-height: 80px; /* 129.032% */
`
const StyledRedText = styled.h3`
  color: #98002E;
  text-align: center;
  font-family: Poppins;
  font-size: 62px;
  font-style: normal;
  font-weight: 250;
  line-height: 80px; /* 129.032% */
`

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Container className='my-5'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <Logo />
          </div>
          <div className='col-sm-12 col-md-6'>
            <TextContainer>
              <StyledTitle>Welcome to Mike Koen Realty</StyledTitle>
              <StyledText>With over 25+ Years of Experience as a Realtor and Licensed Builder, Mike offers a Wide Variety of Realty Services.</StyledText>
            </TextContainer>
          </div>
        </div>
      </Container>
      <GalleryComponent />
      <Container className='my-5'>
        <div className='col' />
        <TextContainer className='col-sm-12 col-md-8 my-5'>
          <StyledTitle>Financing & Mortgage Options. </StyledTitle>
          <StyledText>Every family is unique when it comes to financing. Let us help guide you through the lending process and find the best rate.</StyledText>
        </TextContainer>
        <div className='col-sm-12 col-md-3'>
          <StyledButton>Chat Now</StyledButton>
        </div>
      </Container>
      <CategoryComponent />
      <StyledHead>Explore The Beautiful Jersey Shore</StyledHead>
      <VideoComponent />
      <StyledRedText style={{}}>MIKE KOVEN</StyledRedText>
      <StyledText>New Jersey Licensed Builder.</StyledText>
      <OfferingComponent />
      <TrustComponent />
    </div>
  );
};

export default HomePage;
