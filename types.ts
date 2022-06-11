import React from "react";

export interface Props {
  children?: React.ReactNode;
}

export interface Post {
  createdTime: string;
  updatedTime: string;
  message: string;
  permalinkURL: string;
  id: string;
  fullPicture: string;
}

export interface Person {
  id: number;
  name: string;
  status: Status;
  age: string;
  description: string;
  lastSeen: Location;
}

export enum Status {
  Missing = "Missng",
  Found = "Found",
  Unknown = "Unknown",
}

export interface Location {
  name: string;
}
