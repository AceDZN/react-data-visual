import React from 'react';
import Griddle, {RowDefinition,ColumnDefinition} from 'griddle-react';

export default class MapApp extends React.Component {
  constructor(props){
    super(props);
    this.mapClickEvent = this.mapClickEvent.bind(this);
    this.state = {
      cities : []
    };

  }
  mapClickEvent(e){
    let img = e.target,
      point = {x: e.offsetX, y: e.offsetY},
      latSize = img.height/180,
      lonSize = img.width/360,
      lat, lon,
      range = 1;

    if(!point.x){
      point = { x: e.pageX - e.target.offsetLeft,
                y: e.pageY - e.target.offsetTop};
    }
    lat = (point.y - (img.height/2)) / -latSize;
    lon = (point.x - (img.width/2)) / lonSize;

    console.log("lat: "+lat+" | lon : "+lon);

    let citiesUrl = `http://api.geonames.org/citiesJSON?formatted=true&north=${lat+range}&south=${lat-range}&east=${lon+range}&west=${lon-range}&lang=en&username=acedzn&style=full`;

    var xhr = new XMLHttpRequest();
       xhr.open('GET',citiesUrl);
       xhr.onload = ()=>{
         if(xhr.status === 200){
           this.setState({cities: JSON.parse(xhr.responseText).geonames});
           console.log(this.state.cities,"this.state");
         } else {
           console.log('Error');
         }
       };
       xhr.send();

  }
  render(){
    //const CustomColumn = ({value}) => <span style={{ color: '#0000AA' }}>{value}</span>;
    //const CustomHeading = ({title}) => <span style={{ color: '#AA0000' }}>{title}</span>;

    return <div>
      <img
        onClick={this.mapClickEvent}
        src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Earthmap1000x500compac.jpg" />
      <Griddle data={this.state.cities}>
        <RowDefinition>
          <ColumnDefinition id="name" />
          <ColumnDefinition id="lat" />
          <ColumnDefinition id="lng" />
          <ColumnDefinition id="countrycode" />
          <ColumnDefinition id="population" />
          <ColumnDefinition id="wikipedia" />
        </RowDefinition>
      </Griddle>
    </div>;
  }
}
