import React from 'react'
import styled from 'styled-components'
import Video2 from '@assets/images/video.png'
import Video3 from '@assets/images/video2.png'

const StyledRow = styled.div`
  justifyContent: center; 
  align-items: center; 
  display: flex
`

const StyledContainer = styled.div`
    position: relative; 
    display: flex; 
    margin:10px 0; 
    justify-content: center;
`

const VideoComponent = () => {
    return (
        <div>
            <StyledRow>
                <StyledContainer className="col-sm-12">
                    <img src={Video3} alt="" className="img-fluid" />
                </StyledContainer>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <StyledContainer>
                        <img src={Video2} alt="" className="img-fluid" />
                    </StyledContainer>
                    <StyledContainer>
                        <img src={Video2} alt="" className="img-fluid" />
                    </StyledContainer>
                </div>
            </StyledRow>
        </div>
    )
}

export default VideoComponent