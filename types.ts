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
  url: string;
}
export interface FbPost {
  post: {
    created_time: string;
    updated_time: string;
    message: string;
    permalink_url: string;
    id: string;
    full_picture: string;
  };
}
export interface ArchivedPost {
  post: {
    createdTime: string;
    updatedTime: string;
    message: string;
    permalinkUrl: string;
    id: string;
    fullPicture: string;
  };
}

export interface Person {
  person: {
    id: string;
    created_at: string;
    name: string;
    age: string;
    lastSeen: string;
    description: string;
    photoUrl: string;
    status: string;
  };
}

export enum Status {
  Missing = "Missng",
  Found = "Found",
  Unknown = "Unknown",
}

export interface Codes {
  id: string;
  name: string;
  desc: string;
}
