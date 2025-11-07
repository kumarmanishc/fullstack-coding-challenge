import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { locationApi } from "@/services/api";
import type { Location } from "@/services/api";

interface LocationSelectProps {
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function LocationSelect({
  value,
  onValueChange,
  placeholder = "Select location...",
  disabled = false,
  className,
}: LocationSelectProps) {
  const [open, setOpen] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await locationApi.getAll();
      console.log(response);

      setLocations(response.data);
    } catch (err) {
      setError("Failed to load locations");
      setLocations([]); // Ensure locations is always an array
      console.error("Error fetching locations:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const selectedLocation = locations?.find(
    (location) => location.id.toString() === value
  );

  const displayText = loading
    ? "Loading locations..."
    : error
    ? "Error loading locations"
    : selectedLocation
    ? `${selectedLocation.location}`
    : placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between",
            !value && "text-muted-foreground",
            className
          )}
          disabled={disabled || loading || !!error}
        >
          {displayText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder="Search locations..." />
          <CommandEmpty>
            {error ? "Failed to load locations" : "No location found."}
          </CommandEmpty>
          {locations?.length > 0 && (
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.id}
                  value={`${location.id}`}
                  onSelect={() => {
                    onValueChange(location.id.toString());
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      location.id.toString() === value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {location.location}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
