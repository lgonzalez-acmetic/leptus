import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { ErtCurrentDataModel } from 'src/app/core/models/ert-current-data.model';
import { ErtModel } from 'src/app/core/models/ert.model';

export interface ErtMap {
  ert: ErtModel;
  marker: L.Marker;
  polyline: L.Polyline;
  polylineLatLngs: L.LatLng[];
}

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor() {}

  createMap() {
    const map = L.map('map').fitWorld();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
      minZoom: 3,
    }).addTo(map);

    map.locate({ setView: true, maxZoom: 16 });

    map.on('locationerror', function () {
      map.setView(new L.LatLng(-11.927552, -77.0572288), 11, { animate: true });
    });

    return map;
  }

  createErtMapList(map: L.Map, ertList: ErtModel[]): ErtMap[] {
    const icon = new L.Icon({
      iconUrl: 'assets/img/m_99.png',
      iconSize: [44, 51],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });
    return ertList.map((ert) => {
      const marker = L.marker([-11.927552, -77.0572288], {
        icon,
      }).addTo(map);

      const polyline = new L.Polyline([], {
        color: 'red',
        weight: 3,
        opacity: 1,
        smoothFactor: 1,
      }).addTo(map);

      return {
        ert,
        marker,
        polyline,
        polylineLatLngs: [],
      };
    });
  }

  updateErtMap(
    map: L.Map,
    ertMap: ErtMap,
    ertCurrentData: ErtCurrentDataModel
  ) {
    const latLng: L.LatLng = new L.LatLng(
      ertCurrentData.latitude,
      ertCurrentData.longitude
    );
    ertMap.marker.setLatLng(latLng);
    ertMap.marker.setIcon(
      new L.Icon({
        iconUrl: 'assets/img/m_' + ertCurrentData.state + '.png',
        iconSize: [44, 51],
        iconAnchor: [22, 51],
        popupAnchor: [-3, -76],
      })
    );

    ertMap.polylineLatLngs.push(latLng);
    if (ertMap.polylineLatLngs.length > 6) {
      ertMap.polylineLatLngs.shift();
    }

    ertMap.polyline.setLatLngs(ertMap.polylineLatLngs);
  }
}
