"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormSchema = z.object({
  type: z.enum(["black", "blue", "orange"], {
    required_error: "You need to select a notification type.",
  }),
});

function SizePicker() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("111");
    console.log("data", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-light ">Size</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-1"
                >
                  <FormItem className="flex items-center gap-[16px] space-y-0 ">
                    <FormControl>
                      <RadioGroupItem value="L" className="hidden" />
                    </FormControl>
                    <FormLabel className="w-7 h-7 flex justify-center items-center active:bg-orange">
                      L
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-y-0 active:bg-orange">
                    <FormControl>
                      <RadioGroupItem value="XL" className="hidden" />
                    </FormControl>
                    <FormLabel className="w-7 h-7 flex justify-center items-center">
                      XL
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-y-0 active:bg-orange">
                    <FormControl>
                      <RadioGroupItem value="XS" className="hidden" />
                    </FormControl>
                    <FormLabel className="w-7 h-7 flex justify-center items-center ">
                      XS
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default SizePicker;
