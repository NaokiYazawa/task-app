"use client";
import React from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { SelectTasksByUserIdQuery } from "@/graphql/generated/gql.types";
import { TableRowActions } from "./TableRowActions";
import { priorities, statuses } from "../data/data";

interface TaskProps {
  task: SelectTasksByUserIdQuery["tasks"][number];
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const status = statuses.find((status) => status.value === task.status);
  const priority = priorities.find(
    (priority) => priority.value === task.priority
  );

  if (!status || !priority) {
    return null;
  }

  return (
    <TableRow key={task.id}>
      <TableCell>{task.id}</TableCell>
      <TableCell className="whitespace-nowrap">{task.title}</TableCell>
      <TableCell className="whitespace-nowrap">
        <div className="flex w-[100px] items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      </TableCell>
      <TableCell className="whitespace-nowrap">
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      </TableCell>
      <TableCell>
        <TableRowActions task={task} />
      </TableCell>
    </TableRow>
  );
};

export default Task;
