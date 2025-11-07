import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Save, X, UserRound, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { doctorApi, locationApi } from "@/services/api";
import type { Doctor, Location } from "@/types";
import { LocationSelect } from "@/components/ui/LocationSelect";
const doctorSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be less than 500 characters"),
  locationId: z.string().min(1, "Location is required"),
  image: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

type DoctorFormData = z.infer<typeof doctorSchema>;

interface DoctorFormProps {
  doctor?: Doctor;
  onSave?: (doctor: Doctor) => void;
  onCancel?: () => void;
}

export default function DoctorForm({
  doctor,
  onSave,
  onCancel,
}: DoctorFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [locationsLoading, setLocationsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const isEdit = !!doctor;

  const form = useForm<DoctorFormData>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      title: doctor?.title || "",
      description: doctor?.description || "",
      locationId: doctor?.locationId?.toString() || "",
      image: doctor?.image || "",
    },
  });

  // Fetch locations on component mount
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLocationsLoading(true);
        const locationResp = await locationApi.getAll();
        setLocations(locationResp);
      } catch (err) {
        setError("Failed to load locations");
      } finally {
        setLocationsLoading(false);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    if (doctor) {
      form.reset({
        title: doctor.title,
        description: doctor.description,
        locationId: doctor.locationId?.toString() || "",
        image: doctor.image || "",
      });
    }
  }, [doctor, form]);

  const onSubmit = async (data: DoctorFormData) => {
    try {
      setLoading(true);
      setError(null);

      const doctorData = {
        ...data,
        locationId: parseInt(data.locationId),
        image: data.image || undefined,
      };

      let savedDoctor: Doctor;

      if (isEdit && doctor) {
        savedDoctor = await doctorApi.update(doctor.id, doctorData);
      } else {
        savedDoctor = await doctorApi.create(doctorData);
      }

      if (onSave) {
        onSave(savedDoctor);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save doctor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserRound className="h-6 w-6" />
          {isEdit ? "Edit Doctor" : "Add New Doctor"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Doctor Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Dr. John Smith - Cardiologist"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialization *</FormLabel>
                  <FormControl>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Provide details about the doctor's specialization, experience, and services..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="locationId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location *</FormLabel>
                  <FormControl>
                    <LocationSelect
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select location..."
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/doctor-photo.jpg"
                      type="url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Preview */}
            {form.watch("image") && (
              <div className="space-y-2">
                <Label>Image Preview</Label>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <img
                    src={form.watch("image")}
                    alt="Preview"
                    className="max-h-32 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="w-full sm:w-auto"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading || locationsLoading}
                className="w-full sm:w-auto"
              >
                <Save className="h-4 w-4 mr-2" />
                {loading
                  ? "Saving..."
                  : isEdit
                  ? "Update Doctor"
                  : "Add Doctor"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
