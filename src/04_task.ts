import { IData } from "./index";

export const getData = async (url: string): Promise<IData[]> => {
  // Your code here...

  let comments;
  try {
    const response = await fetch(url);
    comments = await response.json();
  } catch (err) {
    throw new Error("error connecting...");
  }

  return comments; 
};

let fn: (url: string) => Promise<IData[]>;
fn = getData;
