export interface Board {
  id?: number;
  title?: string;
  description?: string;
  isDone?: boolean;

  createdAt?: Date;
}

export interface List {
  id?: number;
  title?: string;
  description?: string;
  position?: number;
  boardId?: number;
}

export interface Card {
  id?: number;
  title?: string;
  description?: string;
  createdAt?: Date;
  boardId?: number;
}
