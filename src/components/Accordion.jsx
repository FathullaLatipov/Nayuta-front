import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
 
const AccordionSection = styled.div`
width: 100%;
height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  font-size19px;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 220px; 

`;

const Wrap = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(51, 96, 231, 0.38);
    border-radius: 15px;
    width: 964px;
    height: 80px;

  h1 {

font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 23px;

  }
  span {
    margin-left: 30px;
    font-size: 2.5rem;
  }
`;

const Dropdown = styled.div`
padding: 0 20px;
margin-bottom: 20px;
cursor: pointer;
  box-shadow: 0px 0px 20px rgba(51, 96, 231, 0.38);
  border-radius: 15px;
  height:100px;
  width:964px;;

  p {
    line-height: 23px;
    padding: 15px 20px;
    font-size: 15px;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <div className='container2'>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <i className='fas fa-angle-up'></i> : <i className='fas fa-angle-down'></i>}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </div>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;