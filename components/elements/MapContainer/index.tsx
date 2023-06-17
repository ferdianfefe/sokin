import React, { useRef, useEffect, useState, use } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Image from "next/image";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmljaGFyZHVzZmVyZGlhbiIsImEiOiJjbGV5MnA4bDQwZnJjM3B2MnNmN2RtNDlpIn0.oW2ip7haPp80SzKKb1KY_A";

interface MapContainerProps {
  children?: React.ReactNode;
  keywordProp?: string;
  onSearch?: (keyword: string) => void;
  isMapToggled?: () => void;
  getCenterHandler?: (center: number[]) => void;
  setMapCoordinates?: (coordinates: string) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({
  children,
  keywordProp = "",
  isMapToggled = false,
  getCenterHandler = () => {},
  setMapCoordinates = () => {},
}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [keyword, setKeyword] = useState("Yogyakarta");

  /* Resize map on initialization */
  useEffect(() => {
    map.current?.resize();
  }, [isMapToggled]);

  useEffect(() => {
    const fetchAPI = async () => {
      setKeyword(keywordProp != "" ? keywordProp : "Yogyakarta");
      const result = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${keyword}.json?access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const data = await result.json();
      setLng(data.features[0].center[0]);
      setLat(data.features[0].center[1]);
      setMapCoordinates(`${lng},${lat}`);
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

    map.current?.on("moveend", () => {
      setLng(map.current?.getCenter().lng.toFixed(4));
      setLat(map.current?.getCenter().lat.toFixed(4));
    });
  }, [lng, lat, zoom]);

  return (
    <div className="relative">
      <div className="fixed left-[50%] top-[55%] -translate-x-[50%] -translate-y-[50%] z-10">
        <Image
          src="/images/icons/location.svg"
          height={41}
          width={27}
          alt={""}
        />
      </div>
      <div ref={mapContainer} className="h-[430px] w-full" />
    </div>
  );
};

export default MapContainer;
