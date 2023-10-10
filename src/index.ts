import { type } from "os";
import { getData } from "./04_task";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

export interface IData {
  postId?: number;
  id: number;
  name?: string;
  email: string;
  body?: string;
}

interface IComments extends IData {
  id: number;
  email: string;
}

getData(COMMENTS_URL).then((data) => {
  const allData: IData[] = data;

  let commentsItems: IComments[] = [];

  allData.map((item, index) => {
    const { id, email } = { ...item };
    const commentItem: IComments = {
      id,
      email,
    };
    commentsItems.push(commentItem);
    console.log(
      `ID: ${commentsItems[index].id},  Email: ${commentsItems[index].email}`
    );
  });
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
