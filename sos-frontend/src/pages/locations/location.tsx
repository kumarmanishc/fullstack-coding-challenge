import { useState } from "react";
import LocationList from "@/pages/locations/LocationList";
import LocationForm from "@/pages/locations/LocationForm";
import type { Location } from "@/services/api";

export const LocationPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >();
  const [showLocationForm, setShowLocationForm] = useState(false);

  if (showLocationForm) {
    return (
      <LocationForm
        location={selectedLocation}
        onSave={() => {
          setShowLocationForm(false);
          setSelectedLocation(undefined);
        }}
        onCancel={() => {
          setShowLocationForm(false);
          setSelectedLocation(undefined);
        }}
      />
    );
  }

  return (
    <LocationList
      onAdd={() => {
        setSelectedLocation(undefined);
        setShowLocationForm(true);
      }}
      onEdit={(location) => {
        setSelectedLocation(location);
        setShowLocationForm(true);
      }}
      onDelete={() => {
        // Refresh is handled within the component
      }}
    />
  );
};
