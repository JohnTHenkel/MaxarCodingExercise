import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "http://localhost:8080/data"
      })
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
