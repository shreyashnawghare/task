import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MovingComponent from 'react-moving-text'
import './Api.css';
import MyModal from './MyModal.js'

export const Api = () => {

  const [data, setData] = useState([]);
  const [jokes, setJokes] = useState([])
  const [name , setName] = useState("")
  const [openModal , setOpenModal] = useState(false);


const handleClick = (name) => {
setName(name)
setOpenModal(!openModal)
console.log(jokes)
}


// Fetching the First Api
  const fetchData = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/categories");
    const response = await res.json();
    console.log(response);
    setData(response);
  };


// getting name from first api using the handleClick to fetch the categories of second api
  const fetchJokes = async () => {
    const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${name}`);
    const response = await res.json();
    
    setJokes([response]);
  };

  useEffect(() => {
    fetchData();
    fetchJokes();
  }, [name]);

  

  return (
    <>
 <MovingComponent
  type="slideInFromBottom"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="infinite"
  fillMode="none">
 <h1>Chuck Norris</h1>
</MovingComponent>
  
    <Container className='home'>
      <Row>
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <div className="card" onClick={()=>handleClick(item)}>
           
                <div className="card-content">{item}</div>
          {`Unlimited Jokes on ${item}`}
            </div> 
          </Col>
        ))}
      </Row> 
      {/* passing data as props for the modal component */}
      <Row> <MyModal jokes={jokes} openModal={openModal} setOpenModal={setOpenModal} fetchJokes={fetchJokes}/></Row>
    </Container>
    
    </>
  );
};
