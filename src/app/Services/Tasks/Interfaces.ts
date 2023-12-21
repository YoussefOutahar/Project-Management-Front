export class Task {
  // Gantt Required
  id?: number;
  start_date?: string;
  text?: string;
  progress?: number;
  duration?: number;
  parent?: number;
  //
  status?: string;
  description?: string;
  priority?: number;
  createdAt?: string;
  end_date?: string;
}

export class Link {
  i?: number;
  source?: number;
  target?: number;
  type?: string;
}

export interface Comment {
  id?: number;
  text?: string;
  createdAt?: string;
  username: string;
  commentatorId: number;
  commentatorRole: string;
  task: Task;
}
