export interface Task {
  description: string;
  state: number;
  category: string;
  priority: Priority;
}

export interface Priority {
  description: string;
  color: string;
}
