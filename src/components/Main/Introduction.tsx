import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  height: 55vh;
  width: 100%;
  color: #ffffff;
  background-color: #433F49;
  //background-color: #433E49;
`
const Cocktail = styled.div`
  width: 35.2vh;
  height: 35.2vh;
  background-image: url('cocktail_ice_logo.webp');
  //background-image: url('cocktail_ice_low.png');
  background-size: contain;
  position: relative;
  z-index: 2;
`
const Wave = styled.div`

  width: 35vh;
  height: 35vh;
  z-index: 1;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-left:3vh;
  }

  .wave {
    position: absolute;
    background: #4ccd97;
    width: 35vh;
    height: 35vh;
    top: 250vh;
    left: -6vh;
    transform-origin: 50% 50%;
    border-radius: 40% 45% 40% 45% / 45% 40% 45% 40%;
    animation: 
    fix 6000ms 1 step-end forwards,
    up 4500ms 1 linear forwards, 
    rotate 2000ms 3 linear;
  }

  @keyframes fix {
    0% { 
      width: 35vh; 
      height: 35vh;
    }
    100% { 
      width: 25vh; 
      height: 25vh;
      left: 1vh;
    }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  }

  @keyframes up {
    0% { top: 35vh; }
    100% { top: 7vh; }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 60vh;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top:50px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-left: 0px;
  background-color:transparent;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 37px;
  font-weight: 700;
  margin-right: 10px;
  background-color:transparent;
  @media (max-width: 768px) {
    margin-bottom: 50px;
    font-size: 32px;
  }
`
const TitleColor = styled.div`
  margin-top: 5px;
  font-size: 45px;
  font-weight: 800;
  color: #4ccd97;
  background-color:transparent;
  display: inline-block;
  @media (max-width: 768px) {
    margin-bottom: 50px;
    font-size: 40px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
}) {
  return (
    <Background>
      <Wrapper>
        <Wave>
          <Cocktail>
          </Cocktail>
          <span className="wave"></span>
        </Wave>
        <div>
          <SubTitle>프로그래밍에서 컴퓨터 한잔,</SubTitle>
          <SubTitle>필요한 정보를 마음껏 주문하세요</SubTitle>
          <Title>Hyeondong
            <TitleColor>Yang</TitleColor>
          </Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction