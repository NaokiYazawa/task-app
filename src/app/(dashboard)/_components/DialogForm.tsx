"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  ArrowRightIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

type DialogFormProps = {
  action: "create" | "edit";
  open: boolean;
  setOpen: (open: boolean) => void;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
};

export const DialogForm = ({
  action,
  open,
  setOpen,
  form,
  onSubmit,
}: DialogFormProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[450px] sm:rounded-sm rounded-none h-full overflow-auto p-10">
        <DialogHeader>
          <DialogTitle>
            {action === "create" ? "タスクを追加する" : "タスクを編集する"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => {
                onSubmit(data);
                setOpen(false);
              })}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>タイトル</FormLabel>
                    <FormControl>
                      <Input {...field} inputMode="text" autoCapitalize="off" />
                    </FormControl>{" "}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ステータス</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <div>
                          <RadioGroupItem
                            value="backlog"
                            id="Backlog"
                            className="peer sr-only"
                            defaultChecked={field.value === "backlog"}
                          />
                          <FormLabel
                            htmlFor="Backlog"
                            className="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <QuestionMarkCircledIcon className="w-4 h-4" />
                            <span className="ml-2">Backlog</span>
                          </FormLabel>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="todo"
                            id="Todo"
                            className="peer sr-only"
                            defaultChecked={field.value === "todo"}
                          />
                          <FormLabel
                            htmlFor="Todo"
                            className="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <CircleIcon className="w-4 h-4" />
                            <span className="ml-2">Todo</span>
                          </FormLabel>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="in progress"
                            id="In Progress"
                            className="peer sr-only"
                            defaultChecked={field.value === "in progress"}
                          />
                          <FormLabel
                            htmlFor="In Progress"
                            className="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <StopwatchIcon className="w-4 h-4" />
                            <span className="ml-2">In Progress</span>
                          </FormLabel>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="done"
                            id="Done"
                            className="peer sr-only"
                            defaultChecked={field.value === "done"}
                          />
                          <FormLabel
                            htmlFor="Done"
                            className="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <CheckCircledIcon className="w-4 h-4" />
                            <span className="ml-2">Done</span>
                          </FormLabel>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="canceled"
                            id="Canceled"
                            className="peer sr-only"
                            defaultChecked={field.value === "canceled"}
                          />
                          <FormLabel
                            htmlFor="Canceled"
                            className="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <CrossCircledIcon className="w-4 h-4" />
                            <span className="ml-2">Canceled</span>
                          </FormLabel>
                        </div>
                      </RadioGroup>
                    </FormControl>{" "}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>優先度</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <div>
                          <RadioGroupItem
                            value="low"
                            id="Low"
                            className="peer sr-only"
                            defaultChecked={field.value === "low"}
                          />
                          <FormLabel
                            htmlFor="Low"
                            className="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <ArrowDownIcon className="w-4 h-4" />
                            <span className="ml-2">Low</span>
                          </FormLabel>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="medium"
                            id="Medium"
                            className="peer sr-only"
                            defaultChecked={field.value === "medium"}
                          />
                          <FormLabel
                            htmlFor="Medium"
                            className="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <ArrowRightIcon className="w-4 h-4" />
                            <span className="ml-2">Medium</span>
                          </FormLabel>
                        </div>
                        <div>
                          <RadioGroupItem
                            value="high"
                            id="High"
                            className="peer sr-only"
                            defaultChecked={field.value === "high"}
                          />
                          <FormLabel
                            htmlFor="High"
                            className="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <ArrowUpIcon className="w-4 h-4" />
                            <span className="ml-2">High</span>
                          </FormLabel>
                        </div>
                      </RadioGroup>
                    </FormControl>{" "}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                {action === "create" ? "追加" : "更新"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
