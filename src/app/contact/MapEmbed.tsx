'use client';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useRef } from 'react';

type MapEmbedProps = {
  address: string;
  lat: number;
  lng: number;
};

const resolveAssetUrl = (asset: string | { src: string }) =>
  typeof asset === 'string' ? asset : asset.src;

export default function MapEmbed({ address, lat, lng }: MapEmbedProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: resolveAssetUrl(markerIcon2x),
      iconUrl: resolveAssetUrl(markerIcon),
      shadowUrl: resolveAssetUrl(markerShadow),
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const container = containerRef.current as HTMLDivElement & {
      _leaflet_id?: number;
    };
    if (container._leaflet_id) {
      delete container._leaflet_id;
    }

    const map = L.map(container, { scrollWheelZoom: false }).setView(
      [lat, lng],
      15,
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lng]).addTo(map).bindPopup(address);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      if (container._leaflet_id) {
        delete container._leaflet_id;
      }
    };
  }, [address, lat, lng]);

  return (
    <div className="h-96 w-full overflow-hidden rounded-2xl border border-primary-beige/25">
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}
