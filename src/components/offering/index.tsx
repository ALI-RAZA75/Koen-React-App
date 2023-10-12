import React from 'react'
import Offering from '@assets/images/offering.png'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const StyledRow = styled.div`
    dispalay: flex;
    justify-content: center;
    align-items: center;
`
const StyledText = styled.p`
    text-align: center;
`

const OfferingComponent = () => {
    return (
        <StyledContainer>
            <StyledRow className='col-sm-12 col-md-3'>
                <h3>Bare Land Development</h3>
                <StyledText>As a Licensed NJ Builder, Mike has years of experiencing developing land for residential and commercial structures. </StyledText>
                <img src={Offering} className='image-fluid' style={{ width: '100%', margin: 'auto' }} />
            </StyledRow>
            <StyledRow className='col-sm-12 col-md-3'>
                <img src={Offering} className='image-fluid' style={{ width: '100%', margin: 'auto' }} />
                <h3>Bare Land Development</h3>
                <StyledText>As a Licensed NJ Builder, Mike has years of experiencing developing land for residential and commercial structures. </StyledText>
            </StyledRow>
            <StyledRow className='col-sm-12 col-md-3'>
                <h3>Bare Land Development</h3>
                <p style={{ textAlign: 'center' }}>As a Licensed NJ Builder, Mike has years of experiencing developing land for residential and commercial structures. </p>
                <img src={Offering} className='image-fluid' style={{ width: '100%', margin: 'auto' }} />
            </StyledRow>
        </StyledContainer>
    )
}

export default OfferingComponent