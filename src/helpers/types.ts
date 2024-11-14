import { DragEvent } from "react";

export type Tab = {
  id: number;
  name: string;
  order: number;
};

export type DragEventType = DragEvent<HTMLDivElement>;
