import { Metadata } from "next";
import { getAuthSession } from "@/lib/auth";
import { getClient } from "@/lib/apollo-client";
import { SelectTasksByUserIdDocument } from "@/graphql/generated/gql.types";
import { AddTask } from "./_components/AddTask";
import TaskList from "./_components/TaskList";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export default async function TaskPage() {
  const session = await getAuthSession();
  if (!session) return;

  const {
    data: { tasks },
  } = await getClient().query({
    query: SelectTasksByUserIdDocument,
    variables: {
      user_id: session.user.id,
    },
  });

  return (
    <>
      <div className="h-full">
        <AddTask session={session} />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}
