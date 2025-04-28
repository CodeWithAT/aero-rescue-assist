
// Type declarations for Google Maps API
declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element, options?: MapOptions);
      setCenter(latLng: LatLng): void;
      setZoom(zoom: number): void;
      panTo(latLng: LatLng): void;
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      setPosition(latLng: LatLng): void;
      setMap(map: Map | null): void;
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      mapTypeId?: string;
      disableDefaultUI?: boolean;
      styles?: any[];
      [key: string]: any;
    }

    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map | null;
      title?: string;
      icon?: string | Icon;
      [key: string]: any;
    }

    interface LatLng {
      lat(): number;
      lng(): number;
      toJSON(): LatLngLiteral;
      toString(): string;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    interface Icon {
      url: string;
      size?: Size;
      scaledSize?: Size;
      origin?: Point;
      anchor?: Point;
    }

    class Size {
      constructor(width: number, height: number, widthUnit?: string, heightUnit?: string);
      width: number;
      height: number;
      equals(other: Size): boolean;
      toString(): string;
    }

    class Point {
      constructor(x: number, y: number);
      x: number;
      y: number;
      equals(other: Point): boolean;
      toString(): string;
    }
  }
}
