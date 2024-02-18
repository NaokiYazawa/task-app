import { Metadata } from "next";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { getAuthSession } from "@/lib/auth";
import { getClient } from "@/lib/apollo-client";
import { SelectTasksByUserIdDocument } from "@/graphql/generated/gql.types";

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
      <div className="h-full flex-1 flex-col space-y-8 md:flex">
        <DataTable data={tasks} columns={columns} session={session} />
      </div>
    </>
  );
}
