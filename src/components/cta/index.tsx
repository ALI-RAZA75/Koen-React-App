import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
`

const StyledContainer = styled.div`
    background-image: linear-gradient(to right, #7A0025 , #AE002A);
    // width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
`
const StyledBlackContainer = styled.div`
    background: linear-gradient(97deg, #231F20 0%, #3C3C3C 100%);   
    // width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
`

const StyledHead = styled.h3`
    color: var(--global-07-light, #F8F9FA);
    text-align: center;

    /* Display/Display 4 */
    font-family: Poppins;
    font-size: 56px;
    font-style: normal;
    font-weight: 300;
    line-height: 67.2px; /* 120% */
`

const StyledText = styled.p`
color: var(--global-07-light, #F8F9FA);
text-align: center;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 38.4px; /* 192% */
`

const StyledSubHead = styled.h3`
color: var(--global-07-light, #F8F9FA);
text-align: center;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 28px; /* 140% */
`

const StyledButton = styled.button`
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 50px;
    padding: .5rem 1rem;
    color: #fff;
`

const CTAComponent = () => {
    return (
        <Container className='row'>
            <StyledContainer className='col-sm-12 col-md-6'>
                <StyledText>Our <b>Lorem</b> Ipsum</StyledText>
                <StyledHead>Find The Best Rate</StyledHead>
                <StyledSubHead>Explore NJ Mortage Rates</StyledSubHead>
                <StyledButton>Learn More</StyledButton>
            </StyledContainer>
            <StyledBlackContainer className='col-sm-12 col-md-6'>
                <StyledText>Our <b>Lorem</b> Ipsum</StyledText>
                <StyledHead>Donate a Home</StyledHead>
                <StyledSubHead>Explore NJ Mortage Rates</StyledSubHead>
                <StyledButton>Learn More</StyledButton>
            </StyledBlackContainer>
        </Container>
    )
}

export default CTAComponent