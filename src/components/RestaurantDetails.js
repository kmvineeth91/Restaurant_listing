import React, { useState, useEffect } from 'react'
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Rating from './Rating'

function RestaurantDetails() {
  const [details, setDetails] = useState([])
   const { id } = useParams()
  const dispatch = useDispatch()
  const restaurantReducer = useSelector(state => state.restaurantReducer)
  const { restaurants } = restaurantReducer

   
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch('/restaurants.json')
  //       .then(data => data.json())
  //       .then(data => setDetails(data.restaurants))
  //   }
  //   fetchData();
  // }, [])

  const restaurantData = restaurants.find((item) => item.id == id)
  console.log('data', restaurantData);
  return (
    <>
      <Link className='btn btn-outline-dark my-2 mx-3 rounded btn-sm' to={'/'}>Back</Link>
      {restaurantData ? (
        <Row className='my-3 mx-2'>
          <Col md={3}>
            <Image src={restaurantData.photograph} alt={restaurantData.name} fluid />
          </Col>
          <Col>
            <ListGroup.Item>
              <h2>{restaurantData.name}</h2>
              <p>{restaurantData.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Cuisine:{restaurantData.cuisine_type}</h5>
            </ListGroup.Item>
          </Col>
          <Col md={4}>
            <ListGroup.Item>
              <h4>Operating Hours</h4>
              <p>Monday: {restaurantData.operating_hours.Monday}</p>
              <p>Tuesday: {restaurantData.operating_hours.Tuesday}</p>
              <p>Wednesday: {restaurantData.operating_hours.Wednesday}</p>
              <p>Thursday: {restaurantData.operating_hours.Thursday}</p>
              <p>Friday: {restaurantData.operating_hours.Friday}</p>
              <p>Saturday: {restaurantData.operating_hours.Saturday}</p>
              <p>Sunday: {restaurantData.operating_hours.Sunday}</p>
            </ListGroup.Item>
          </Col>
          <Row>
            <Card className='my-3 mx-3 p-3 rounded card'>
              <Rating data={restaurantData.reviews} />
            </Card>
          </Row>
        </Row>
      ) : null}
    </>
  )
}

export default RestaurantDetails