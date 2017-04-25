import React from 'react';

export default class MapApp extends React.Component {
  mapClickEvent(e){
    let img = e.target,
      point = {x: e.offsetX, y: e.offsetY},
      latSize = img.height/180,
      lonSize = img.width/360,
      lat, lon;

    if(!point.x){
      point = { x: e.pageX - e.target.offsetLeft,
                y: e.pageY - e.target.offsetTop};
    }
    lat = (point.y - (img.height/2)) / -latSize;
    lon = (point.x - (img.width/2)) / -lonSize;

    console.log("lat: "+lat+" | lon : "+lon);
  }
  render(){
    return <img onClick={this.mapClickEvent} src="https://cdn.pixabay.com/photo/2011/12/13/17/07/earth-11048_960_720.jpg" />;
  }
}
