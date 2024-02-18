"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SelectTasksByUserIdQuery } from "@/graphql/generated/gql.types";
import Task from "./Task";

interface TodoListProps {
  tasks: SelectTasksByUserIdQuery["tasks"];
}

const TaskList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <>
      <Table className="border-slate-500">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        {tasks.length > 0 && (
          <TableBody>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </TableBody>
        )}
      </Table>
      {tasks.length === 0 && (
        <div className="p-10">
          <p className="leading-10 text-center">No Tasks</p>
        </div>
      )}
    </>
  );
};

export default TaskList;
