import LatLng from "./LatLng";

enum OrnamentStyle {
  solid = "solid",
  striped = "striped",
  zigzag = "zigzag",
  custom = "custom",
}

type OrnamentData = {
  id: string;
  position: LatLng;
  color: string;
  isFavorite: boolean;
  creatingUser: string;
  secondaryColor?: string;
  style: OrnamentStyle;
  bitmap?: number[];
};

export default OrnamentData;
