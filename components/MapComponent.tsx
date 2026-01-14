import React, { useEffect, useRef } from 'react';
import { Coordinates, Theme } from '../types';

interface MapComponentProps {
  markers: Array<{
    position: Coordinates;
    title: string;
    description?: string;
  }>;
  center?: Coordinates;
  zoom?: number;
  theme: Theme;
}

declare global {
  interface Window {
    L: any;
  }
}

const MapComponent: React.FC<MapComponentProps> = ({ markers, center, zoom = 13, theme }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);

  // Hakone-themed marker colors - Torii vermillion red for visibility
  const MARKER_COLOR = '#B54434'; // Hakone torii red 

  // Initialize Map
  useEffect(() => {
    if (!mapRef.current || !window.L) return;

    if (!mapInstanceRef.current) {
      const defaultCenter = center || (markers.length > 0 ? markers[0].position : { lat: 35.6762, lng: 139.6503 });
      
      mapInstanceRef.current = window.L.map(mapRef.current, {
        center: [defaultCenter.lat, defaultCenter.lng],
        zoom: zoom,
        zoomControl: false,
        attributionControl: false
      });

      window.L.control.zoom({
        position: 'bottomright'
      }).addTo(mapInstanceRef.current);
      
      markersLayerRef.current = window.L.layerGroup().addTo(mapInstanceRef.current);

      // Standard OpenStreetMap Tile Layer (Colorful for all themes as requested)
      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      tileLayerRef.current = window.L.tileLayer(tileUrl, {
        maxZoom: 19,
        subdomains: 'abc',
      }).addTo(mapInstanceRef.current);
    }

    // FIX: Invalidate size after modal animation finishes to ensure map renders correctly
    // The delay (350ms) is slightly longer than typical CSS transitions (300ms)
    const timer = setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
        
        // Force re-center after size calculation
        const targetPos = center || (markers.length > 0 ? markers[0].position : null);
        if (targetPos) {
           mapInstanceRef.current.setView([targetPos.lat, targetPos.lng], zoom, { animate: false });
        }
      }
    }, 350);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers and Center
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current || !window.L) return;

    // Clear existing markers
    markersLayerRef.current.clearLayers();

    // Create Custom Icon
    const createCustomIcon = () => {
        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${MARKER_COLOR}" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.3));">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" fill="white" />
        </svg>`;
        
        return window.L.divIcon({
            html: svg,
            className: 'custom-map-marker',
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
        });
    };

    markers.forEach(markerData => {
      const marker = window.L.marker(
        [markerData.position.lat, markerData.position.lng],
        { icon: createCustomIcon() }
      );

      const popupContent = `
        <div style="font-family: 'Noto Sans JP', sans-serif; padding: 6px;">
          <h3 style="font-weight: bold; margin-bottom: 4px; font-size: 14px;">${markerData.title}</h3>
          ${markerData.description ? `<p style="font-size: 12px; margin: 0; line-height: 1.4; opacity: 0.8;">${markerData.description}</p>` : ''}
        </div>
      `;

      marker.bindPopup(popupContent);
      markersLayerRef.current.addLayer(marker);
    });

    // Update view when props change
    // Using animate: false to prevent glitching during initial load/layout shifts
    if (center) {
        mapInstanceRef.current.setView([center.lat, center.lng], zoom, {
            animate: false
        });
    } else if (markers.length > 0) {
        mapInstanceRef.current.setView([markers[0].position.lat, markers[0].position.lng], zoom, { animate: false });
    }

  }, [markers, center, zoom]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%', zIndex: 0 }} />
  );
};

export default MapComponent;