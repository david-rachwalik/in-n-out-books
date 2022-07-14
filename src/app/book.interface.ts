/*
 * Title: book.interface.ts
 * Author: David Rachwalik
 * Date: 2022/06/26
 * Description: Book interface
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
