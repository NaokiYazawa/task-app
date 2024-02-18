"use client";

import { Button } from "@/components/ui/button";
import { DialogForm } from "./DialogForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createTaskFormValidator } from "@/lib/validations/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertTasksOne } from "@/actions/task";
import { Session } from "next-auth";
import { toast } from "@/components/ui/use-toast";
import { revalidatePaths } from "@/lib/revalidate-paths";

export const AddTask = ({ session }: { session: Session }) => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof createTaskFormValidator>>({
    defaultValues: {
      user_id: session.user.id,
    },
    resolver: zodResolver(createTaskFormValidator),
  });

  async function onSubmit(data: z.infer<typeof createTaskFormValidator>) {
    const { data: newData, errors } = await insertTasksOne(data);
    if (newData?.insert_tasks_one?.id && !errors) {
      toast({
        title: "タスクを追加しました",
      });
      form.reset({
        title: "",
        status: "",
        priority: "",
      });
      revalidatePaths(["/"]);
      form.reset({
        user_id: session.user.id,
      });
    }
  }
  return (
    <>
      <Button className="mb-5" onClick={() => setOpen(true)}>
        New Task
      </Button>
      <DialogForm
        action="create"
        open={open}
        setOpen={setOpen}
        form={form}
        onSubmit={onSubmit}
      />
    </>
  );
};
