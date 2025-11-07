// Hook to get location name by ID
import { locationApi } from "@/services/api";
import type { Location } from "@/types";
import { useEffect, useState } from "react";

export function useLocationName(locationId?: string | number) {
  const [locationName, setLocationName] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!locationId) {
      setLocationName("");
      return;
    }

    const fetchLocationName = async () => {
      try {
        setLoading(true);
        const response = await locationApi.getAll();
        const location = response.data.data.find(
          (loc: Location) => loc.id.toString() === locationId.toString()
        );
        setLocationName(location ? `${location.location}` : "");
      } catch (error) {
        console.error("Error fetching location name:", error);
        setLocationName("");
      } finally {
        setLoading(false);
      }
    };

    fetchLocationName();
  }, [locationId]);

  return { locationName, loading };
}
