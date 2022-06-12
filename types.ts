import React from "react";

export interface Props {
  children?: React.ReactNode;
}

export interface Post {
  createdTime: string;
  updatedTime: string;
  message: string;
  permalinkUrl: string;
  id: string;
  fullPicture: string;
}
export interface PostProps {
  createdTime: string;
  updatedTime: string;
  message: string;
  permalinkUrl: string;
  id: string;
  fullPicture: string;
}

export interface Person {
  id: string;
  created_at: string;
  name: string;
  age: string;
  lastSeen: string;
  description: string;
  photoUrl: string;
  status: string;
}

export enum Status {
  Missing = "Missng",
  Found = "Found",
  Unknown = "Unknown",
}
