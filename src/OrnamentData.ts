import LatLng from "./LatLng";

type OrnamentData = {
  id: string;
  position: LatLng;
  color: string;
  isFavorite: boolean;
  creatingUser: string;
  secondaryColor?: string;
};

export default OrnamentData;
