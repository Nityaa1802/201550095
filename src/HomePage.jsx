import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'



function HomePage() {
  return (
    //   <div>
    //       <NavBar />
    //       <HeaderSection />
    //       <AboutUs />
    //       <Footer/>
    // </div>
    <div>
       <h1 className='m-5'>Find Train For Yourself</h1>
      <section className='container d-inline-flex'>
       
      <Card className='p-3 m-5'
  style={{
    width: '18rem',
    backgroundColor:'yellowgreen'
  
  }}
>
  
  <CardBody   >
    <CardTitle tag="h5">
    somthing exp
    </CardTitle>
    <CardSubtitle
      className="m-2 text-muted"
      tag="h6"
    >
      2136
    </CardSubtitle>
    <CardText>
              <h5 className='m-2 '>departure time:</h5>
              <span className='text-success bg-white rounded-pill fs-4 fw-bold p-2'>21 hr 35 min </span>
            </CardText>
            <h4>Available seats</h4>
            <p><span className='fs-5' style={{color:"gray"}} >Sleeper: </span><span className='fs-3'>5  </span>
              <span className='fs-5'  style={{color:"gray"}}>AC: </span><span className='fs-3'> 5 </span>
            </p>
    <Button>
      Book Now
    </Button>
  </CardBody>
        </Card>
        <Card className='p-3 m-5'
  style={{
    width: '18rem',
    backgroundColor:'lightblue'
  
  }}
>
  
  <CardBody   >
    <CardTitle tag="h5">
    somthing exp
    </CardTitle>
    <CardSubtitle
      className="m-2 text-muted"
      tag="h6"
    >
      2136
    </CardSubtitle>
    <CardText>
    <h5 className='m-2 '>departure time:</h5>
              <span className='text-success bg-white rounded-pill fs-4 fw-bold p-2'>21 hr 35 min </span>       </CardText>
            <h4>Available seats</h4>
            <p><span className='fs-5' style={{color:"gray"}} >Sleeper: </span><span className='fs-3'>5  </span>
              <span className='fs-5'  style={{color:"gray"}}>AC: </span><span className='fs-3'> 5 </span>
            </p>
    <Button>
      Book Now
    </Button>
  </CardBody>
        </Card>
        <Card className='p-3 m-5 '
  style={{
    width: '18rem',
    backgroundColor: "lightpink"
    
  
  }}
>
  
  <CardBody   >
    <CardTitle tag="h5">
    somthing exp
    </CardTitle>
    <CardSubtitle
      className="m-2 text-muted"
      tag="h6"
    >
      2136
    </CardSubtitle>
    <CardText>
    <h5 className='m-2 '>departure time:</h5>
              <span className='text-success bg-white rounded-pill fs-4 fw-bold p-2'>21 hr 35 min </span>
            </CardText>
            <h4>Available seats</h4>
            <p><span className='fs-5' style={{color:"gray"}} >Sleeper: </span><span className='fs-3'>5  </span>
              <span className='fs-5'  style={{color:"gray"}}>AC: </span><span className='fs-3'> 5 </span>
            </p>
    <Button>
      Book Now
    </Button>
  </CardBody>
        </Card>
      </section>
    </div>
  )
}

export default HomePage