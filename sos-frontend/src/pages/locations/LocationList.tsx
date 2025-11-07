import React, { useMemo } from "react";
import { MapPin, Building2 } from "lucide-react";
import { locationApi } from "@/services/api";
import type { Location } from "@/services/api";
import TableMaster, {
  type TableConfig,
  type TableColumn,
} from "../../components/TableMaster";

interface LocationListProps {
  locationId?: string;
  onAdd?: () => void;
  onEdit?: (location: Location) => void;
  onDelete?: (id: string) => void;
}

export default function LocationList({
  locationId,
  onAdd,
  onEdit,
  onDelete,
}: LocationListProps) {
  const columns: TableColumn[] = [
    {
      key: "image",
      label: "Place Image",
      render: (value, item) =>
        value ? (
          <img
            src={value}
            alt={item.title}
            className="h-12 w-12 rounded-lg object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
            <Building2 className="h-6 w-6 text-muted-foreground" />
          </div>
        ),
    },
    {
      key: "location",
      label: "Location",
      render: (value) => (
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="truncate">{value}</span>
        </div>
      ),
    },
  ];

  const apiConfig = useMemo(() => {
    // Temporarily disable filtering to test
    return locationApi;

    // Original filtering logic (commented out for testing)
    // if (!locationId) {
    //   return locationApi;
    // }
    // return {
    //   ...locationApi,
    //   getAll: () =>
    //     locationApi
    //       .getAll()
    //       .then((locations) =>
    //         locations.filter((location) => location.id === locationId)
    //       ),
    // };
  }, [locationId]);

  const config: TableConfig<Location> = {
    title: "Locations",
    icon: Building2,
    columns,
    api: apiConfig,
    actions: {
      onAdd,
      onEdit,
      onDelete,
    },
    emptyMessage: "Get started by adding your first location.",
    addButtonText: "Add Location",
  };

  return <TableMaster config={config} />;
}
