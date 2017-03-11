var React = require('react')
var theatres = require('../data/theatres.json')
var ReactGMaps = require('react-gmaps')
var {Gmaps, Marker} = ReactGMaps

var TheatresMap = React.createClass({
  render: function() {
  return (
    <div className="col-sm-12">
      <Gmaps width={'100%'}
             height={'420px'}
             lat={'42.057442'}
             lng={'-87.67166'}
             zoom={11}
             loadingMessage={'Loading entertainment near you...'}
             params={{v: '3.exp', key: 'AIzaSyB3p_xQIXsFMDGLYNEiVkgW5fsVSUOd01c'}}>
        {theatres.map(function(place) {
          return <Marker lat={place.lat} lng={place.long} />
        })}
      </Gmaps>
    </div>
    )
  }
})

module.exports = TheatresMap
