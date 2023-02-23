import type { Principal } from '@dfinity/principal';
export interface Task { 'task' : string }
export interface _SERVICE {
  'addTask' : (arg_0: string) => Promise<string>,
  'deleteTask' : (arg_0: string) => Promise<string>,
  'getAllTask' : () => Promise<Array<Task>>,
}
