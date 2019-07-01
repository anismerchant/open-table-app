import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export default (props) => (     
  <Card 
    hoverable
    style={{ width: 240, margin: 15 }}
    cover={<img alt="restaurant" src={props.image_url}  />}
  >
    <Meta title={props.name} description={props.address} />
    <p>{props.city}, {props.state} {props.postal_code}</p>
    <p>${props.price}</p>
  </Card>
);

