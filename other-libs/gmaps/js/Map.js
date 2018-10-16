class Map extends React.Component {
  constructor(props) {
    super(props)
    this.markers = []
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.node, {
      center: {lat: 59.9884404, lng: 30.1954313},
      zoom: 1
    })
  }

  addMarker = (location) => {
    const marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
    this.markers.push(marker);
  }

  componentWillReceiveProps(nextProps) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
    if (this.props !== nextProps) {
      nextProps.points.forEach(el => {
        const coord = {
          lat: el.lat,
          lng: el.lon
        }
        this.addMarker(coord)
      })
    }
  }
  
  render() {
    return (
      <div className="gMaps" ref={node => this.node = node}></div>
    )
  }
}
