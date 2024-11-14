import { DragEvent, ElementType } from "react";

export type Tab = {
  id: number;
  name: string;
  order: number;
  pin: boolean;
  icon: ElementType;
};

export type DragEventType = DragEvent<HTMLDivElement>;
