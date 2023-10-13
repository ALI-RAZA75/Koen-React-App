import React from 'react'

import Featured1 from '@assets/images/appartments.png'
import { featuredData } from './FeaturedData'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
`
const StyledFeatured = styled.h3`
    color: var(--theme-logo-red, #98002E);
    font-family: Poppins;
    text-align: center;
    margin: 2rem 0;
    font-size: 51px;
    font-style: normal;
    font-weight: 300;
    line-height: 67.2px; /* 131.765% */
`

const StyledHead = styled.h3`
    color: var(--theme-logo-red, #98002E);
    text-align: center;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 160% */
`
const StyledSmText = styled.p`
    color: var(--global-02-secondary, #6C757D);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
`

const StyledText = styled.p`
    color: var(--text-01-body, #454545);
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`

const Featured = () => {
    return (
        <div>
            <StyledFeatured>Featured Articles</StyledFeatured>
            <StyledContainer className='row'>
                {
                    featuredData.map((item, index) => {
                        return (
                            <StyledRow key={index} className='col-sm-12 col-md-3'>
                                <img src={item.imageUrl} />
                                <StyledHead>{item.title}</StyledHead>
                                <StyledSmText>{item.date}</StyledSmText>
                                <StyledText>{item.description}</StyledText>
                            </StyledRow>
                        )
                    })
                }
            </StyledContainer>

        </div>
    )
}

export default Featured