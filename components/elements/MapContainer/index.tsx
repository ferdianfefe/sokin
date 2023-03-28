import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoicmljaGFyZHVzZmVyZGlhbiIsImEiOiJjbGV5MnA4bDQwZnJjM3B2MnNmN2RtNDlpIn0.oW2ip7haPp80SzKKb1KY_A";

interface MapContainerProps {
  children?: React.ReactNode;
  keywordProp?: string;
  getCenterHandler?: (center: number[]) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({
  children,
  keywordProp = "",
  getCenterHandler = () => {},
}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [keyword, setKeyword] = useState("Yogyakarta");

  useEffect(() => {
    const fetchAPI = async () => {
      setKeyword(keywordProp != "" ? keywordProp : "Yogyakarta");
      const result = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${keyword}.json?access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const data = await result.json();
      console.log(data);
      setLng(data.features[0].center[0]);
      setLat(data.features[0].center[1]);
      map.current?.jumpTo({
        center: [data.features[0].center[0], data.features[0].center[1]],
        zoom: 15,
      });
      getCenterHandler([
        data.features[0].center[0],
        data.features[0].center[1],
      ]);
    };
    fetchAPI();
  }, [keywordProp]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat, zoom]);

  return (
    <div className="relative">
      <div ref={mapContainer} className="h-[400px] w-[400px]" />
    </div>
  );
};

export default MapContainer;
