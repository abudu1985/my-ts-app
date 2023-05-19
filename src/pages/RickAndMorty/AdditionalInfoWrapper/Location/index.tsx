import * as React from "react";
import { useLocationQuery } from "@/generated/graphql";
import LocationComponent from "./LocationComponent";
import Spinner from "../../../../components/Spinner";
interface OwnProps {
  id: string;
}

const Location: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useLocationQuery({
    variables: { id: String(id) },
  });

  React.useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);

  if (!id) {
    return <div>Location unknown</div>;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a location</div>;
  }

  return <LocationComponent data={data} />;
};

export default Location;
