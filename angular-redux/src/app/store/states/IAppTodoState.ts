export default interface IAppTodoState {
  title: string;
  list: ITodo[];
}

export interface ITodo {
  name: string;
  description: string;
  urgent: boolean;
}
