import React from "react";
import Searchapp from "./Searchapp";
import ClippedDrawer from "./Draw";
import Card from 'react-bootstrap/Card';
import "./side.css"
import Grid from '@mui/material/Grid';
import Button from 'react-bootstrap/Button';

function Projectboard() {
  return (
    <>
      <Searchapp />
      <ClippedDrawer />

      {/* <Card className = "side" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card> */}

<Grid container spacing={1}>
  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        ID:HU2284 &nbsp;
        Priority:&nbsp;&nbsp; 
        <Button variant="outline-dark">High</Button>{' '}
      </Card.Body>
    </Card>
  </Grid>
  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Priority:&nbsp;&nbsp;&nbsp; 
        <Button variant="outline-dark">Low</Button>{' '}
      </Card.Body>
    </Card>
  </Grid>
  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Priority:&nbsp;&nbsp;&nbsp; 
        <Button variant="outline-dark">    High</Button>{' '}
      </Card.Body>
    </Card>
  </Grid>
  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Priority:&nbsp;&nbsp;&nbsp; 
        <Button variant="outline-dark">Low</Button>{' '}
      </Card.Body>
    </Card>
  </Grid>
  
  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Priority:&nbsp;&nbsp;&nbsp; 
        <Button variant="outline-dark">High</Button>{' '}
      </Card.Body>
    </Card>
  </Grid>
  
  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Priority:&nbsp;&nbsp;&nbsp; 
        <Button variant="outline-dark">    High</Button>{' '}
      </Card.Body>
    </Card>
  </Grid>

  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Priority:&nbsp;&nbsp;&nbsp; 
        <Button variant="outline-dark">    High</Button>{' '}

      </Card.Body>
    </Card>
  </Grid>
  
  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Priority:&nbsp;&nbsp;&nbsp; 
        <Button variant="outline-dark">    High</Button>{' '}

      </Card.Body>
    </Card>
  </Grid>
  
  <Grid item xs={2.4}>
  <Card className = "side" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        Priority:&nbsp;&nbsp;&nbsp; 
        <Button variant="outline-dark">    High</Button>{' '}

      </Card.Body>
    </Card>
  </Grid>
  

</Grid>
    </>
  );
}

export default Projectboard;
