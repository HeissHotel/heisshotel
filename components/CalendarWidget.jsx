import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
  arrival: z.date().optional(),
  departure: z.date().optional(),
});

export function CalendarWidget() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDepartureOpen, setIsDepartureOpen] = useState(false);
  const departureTriggerRef = useRef(null);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const defaultStartDate = new Date();
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  if (!form.getValues("arrival")) {
    const today = new Date();
    const defaultDate = today < defaultStartDate ? defaultStartDate : today;
    form.setValue("arrival", defaultDate);
  }

  const onSubmit = async (data) => {
    const { arrival, departure } = data;
    const arrivalDate = arrival ? format(arrival, "yyyy-MM-dd") : "";
    const departureDate = departure ? format(departure, "yyyy-MM-dd") : "";
    const cloudbedsUrl = `https://hotels.cloudbeds.com/es/reservation/lLxxdq?checkin=${arrivalDate}&checkout=${departureDate}`;

    window.open(cloudbedsUrl, "_blank");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 items-center md:flex-row md:justify-center"
      >
        <FormField
          control={form.control}
          name="arrival"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-[180px] px-4 text-muted-foreground text-md font-light",
                        !field.value
                      )}
                    >
                      {field.value
                        ? format(field.value, "dd/MM/yyyy")
                        : format(defaultStartDate, "dd/MM/yyyy")}
                      <CalendarIcon className="ml-auto h-5 w-5 opacity-80" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto" align="start">
                  <Calendar
                    ranges={[{ startDate, endDate, key: "selection" }]}
                    onChange={handleSelect}
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setIsDepartureOpen(true);
                      // Automatically set departure date to the next day
                      const nextDay = addDays(date, 1);
                      form.setValue("departure", nextDay);
                    }}
                    disabled={(date) => date < defaultStartDate}
                    fromYear={2023}
                    initialFocus
                    className={""}
                    style={{ width: "220px", height: "260px" }}
                    dayStyle={(date) => ({
                      ...(date && date.getDate() === new Date().getDate()),
                    })}
                    defaultMonth={defaultStartDate}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="departure"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover open={isDepartureOpen} onOpenChange={setIsDepartureOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      ref={departureTriggerRef}
                      variant="ghost"
                      className={cn(
                        "w-[180px] px-4 text-muted-foreground text-md font-light",
                        !field.value
                      )}
                    >
                      {field.value
                        ? format(field.value, "dd/MM/yyyy")
                        : format(
                            addDays(
                              form.watch("arrival") || defaultStartDate,
                              1
                            ),
                            "dd/MM/yyyy"
                          )}
                      <CalendarIcon className="ml-auto h-5 w-5 opacity-80" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setIsDepartureOpen(false);
                    }}
                    disabled={(date) =>
                      date < form.watch("arrival") || date < new Date()
                    }
                    initialFocus
                    className={"rounded-md border shadow"}
                    style={{ width: "220px", height: "260px" }}
                    dayStyle={(date) => ({
                      ...(date &&
                        date.getDate() === new Date().getDate() && {
                          backgroundColor: "lightblue",
                        }),
                    })}
                    dayHoverStyle={(date) => ({
                      backgroundColor: "lightblue",
                    })}
                    defaultMonth={defaultStartDate}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="secondary" type="submit">
          RESERVAR YA
        </Button>
      </form>
    </Form>
  );
}
