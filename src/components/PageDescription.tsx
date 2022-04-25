import axios from "axios";

interface PageDescriptionProps {
  description: string;
}
export const PageDescription: React.FC<PageDescriptionProps> = ({
  description,
}) => {
  let date = new Date();
  const pageDescription = {
    dateAdded: date.toUTCString(),
    description: { description },
  };

  const response = axios.get(
    `https://csci4350-001-pet-store.herokuapp.com/api/Monitoring/pages?date=${pageDescription.dateAdded}&description=${description}`
  );
  return null;
};
