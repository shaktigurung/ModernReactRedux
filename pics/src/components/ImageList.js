import React from 'react';

export default function ImageList(props) {
  const images = props.images.map(({id, description, urls}) => {
    return <img key= {id} src={urls.regular} alt={description} />
  })
 
  return (
    <div>{images}</div>
  );
}
