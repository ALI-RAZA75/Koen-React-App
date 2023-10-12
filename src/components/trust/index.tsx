import React from 'react'
import Tick from '@assets/images/tick.png'
import Shield from '@assets/images/shield.png'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 2rem 1rem;
`
const StyledRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const StyledHead = styled.h3`
    color: #98002E;
`

const TrustComponent = () => {
    return (
        <StyledRow>
            <StyledContainer>
                <img src={Tick} />
                <StyledHead>Licensed Builder</StyledHead>
                <p>25+ Years Experience</p>
                <p>As a New Jersey Licensed & Insured Builder, Mike has experience developing from the ground up. Whether you are interested in residential or commercial property, Mike can help guide you through the entire process.</p>
            </StyledContainer>
            <StyledContainer>
                <img src={Shield} />
                <StyledHead>Federal Building Inspector</StyledHead>
                <p>10+ Years Experience</p>
                <p>Mike spent 10+ years as a State Certified NJ Inspector. When it comes to permits, variances, and approvals, he has seen it all. He uses his expertise to help families when navigating home inspections.</p>
            </StyledContainer>
        </StyledRow>
    )
}

export default TrustComponent