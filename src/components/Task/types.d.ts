export type TaskPropsType = {
  task: {
    id?: string;
    title?: string;
    state?: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";
    updatedAt?: Date;
  };
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
};
