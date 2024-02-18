import * as z from "zod";

export const createTaskFormValidator = z.object({
  title: z.string().min(1, { message: "タイトルを入力してください" }),
  status: z.string().min(1, { message: "ステータスを入力してください" }),
  priority: z.string().min(1, { message: "優先度を入力してください" }),
  user_id: z.string(),
});

export const updateTaskFormValidator = z.object({
  id: z.number(),
  title: z.string().min(1, { message: "タイトルを入力してください" }),
  status: z.string().min(1, { message: "ステータスを入力してください" }),
  priority: z.string().min(1, { message: "優先度を入力してください" }),
});

export const taskValidator = z.object({
  id: z.number(),
  title: z.string().min(1, { message: "タイトルを入力してください" }),
  status: z.string().min(1, { message: "ステータスを入力してください" }),
  priority: z.string().min(1, { message: "優先度を入力してください" }),
});
