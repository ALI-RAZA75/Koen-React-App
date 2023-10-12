import React from 'react'
import './style.css'
import styled from 'styled-components'
import Residential from '@assets/images/residential.png'
import Commercial from '@assets/images/commercial.png'
import Appartment from '@assets/images/appartments.png'
import Beach from '@assets/images/beach.png'
import Investors from '@assets/images/investors.png'



const StyledRow = styled.div`
display: flex; 
justifyContent: center
`

const StyledContainer = styled.div`
    position: relative; 
    display: flex; 
    margin:10px; 
    justify-content: center;
`

const StyledText = styled.span`
    color: #FFF;
    text-align: center;
    position: absolute;
    bottom: 0;

    /* Text Shadow */
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 47px; /* 195.833% */
`

const StyledHead = styled.p`
    width: 100%;
    text-align: center;
`

const GalleryComponent = () => {
    return (
        <section className="main">
            <div className="container">
                <StyledRow className="row">
                    <div className="row col-sm-12 col-md-3 center-block">
                        <StyledContainer className="col-xs-6">
                            <img src={Residential} alt="" className="img-fluid" />
                            <StyledText>Residential</StyledText>
                        </StyledContainer>
                        <StyledContainer className="col-xs-6">
                            <img src={Appartment} alt="" className="img-fluid" />
                            <StyledText>Apartments</StyledText>
                        </StyledContainer>
                    </div>
                    <div className="row col-sm-12 col-md-3 center-block">
                        <StyledContainer className="col-xs-6">
                            <img src={Commercial} alt="" className="img-fluid" />
                            <StyledText style={{ position: 'absolute', bottom: 0 }}>Commercial</StyledText>
                        </StyledContainer>
                        <StyledContainer className="col-xs-6">
                            <img src={Beach} alt="" className="img-fluid" />
                            <StyledText style={{ position: 'absolute', bottom: 0 }}>Beach</StyledText>
                        </StyledContainer>
                    </div>
                    <StyledContainer className="col-sm-12 col-md-6">
                        <img src={Investors} alt="" className="img-fluid" />
                        <StyledText style={{ position: 'absolute', bottom: 0 }}>Investors</StyledText>
                    </StyledContainer>
                </StyledRow>
                <StyledHead>Specialty Realty Services For Buyers, Sellers, and Investors.</StyledHead>
                <StyledRow className="row">
                    <StyledContainer className="col-sm-12 col-md-6">
                        <img src={Investors} alt="" className="img-fluid" />
                        <StyledText style={{ position: 'absolute', bottom: 0 }}>Investors</StyledText>
                    </StyledContainer>
                    <div className="row col-sm-12 col-md-3 center-block">
                        <StyledContainer className="col-xs-6">
                            <img src={Residential} alt="" className="img-fluid" />
                            <StyledText>Residential</StyledText>
                        </StyledContainer>
                        <StyledContainer className="col-xs-6">
                            <img src={Appartment} alt="" className="img-fluid" />
                            <StyledText>Apartments</StyledText>
                        </StyledContainer>
                    </div>
                    <div className="row col-sm-12 col-md-3 center-block">
                        <StyledContainer className="col-xs-6">
                            <img src={Commercial} alt="" className="img-fluid" />
                            <StyledText style={{ position: 'absolute', bottom: 0 }}>Commercial</StyledText>
                        </StyledContainer>
                        <StyledContainer className="col-xs-6">
                            <img src={Beach} alt="" className="img-fluid" />
                            <StyledText style={{ position: 'absolute', bottom: 0 }}>Beach</StyledText>
                        </StyledContainer>
                    </div>
                </StyledRow>
            </div>
        </section>
    )
}

export default GalleryComponent