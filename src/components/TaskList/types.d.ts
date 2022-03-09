import { TaskPropsType } from "../Task/types";

export type TaskListProps = {
  loading?: boolean;
  tasks: TaskPropsType["task"][];
  onPinTask: TaskPropsType["onPinTask"];
  onArchiveTask: TaskPropsType["onArchiveTask"];
};
