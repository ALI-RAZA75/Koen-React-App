import React from 'react'
import styled from 'styled-components'
import Buyers from '@assets/images/buyers.png'
import Sellers from '@assets/images/sellers.png'

const StyledRow = styled.div`
  justifyContent: center; 
  align-items: center; 
  display: flex;
  flex-wrap: wrap;
`

const StyledText = styled.span`
color: #FFF;
text-align: center;

/* Text Shadow */
text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 275;
line-height: 86.4px; /* 120% */
`

const StyledContainer = styled.div`
    position: relative; 
    display: flex; 
    margin:10px; 
    justify-content: center;
`
const StyledButton = styled.button`
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background-color: #fff;
  color: #98002E;
`

const CategoryComponent = () => {
    return (
        <div>
            <StyledRow>
                <div className='col' />
                <StyledContainer className="col-sm-12 col-md-4">
                    <img src={Buyers} alt="" className="img-fluid" />
                    <div style={{ position: 'absolute', bottom: '2rem' }}>
                        <StyledText>Buyers</StyledText>
                        <StyledButton>Buyer's Guide</StyledButton>
                    </div>
                </StyledContainer>
                <StyledContainer className="col-sm-12 col-md-4">
                    <img src={Sellers} alt="" className="img-fluid" />
                    <div style={{ position: 'absolute', bottom: '2rem' }}>
                        <StyledText>Sellers</StyledText>
                        <StyledButton>Seller's Guide</StyledButton>
                    </div>
                </StyledContainer>
                <div className='col' />
            </StyledRow>
        </div>
    )
}

export default CategoryComponent