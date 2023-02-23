export const idlFactory = ({ IDL }) => {
  const Task = IDL.Record({ 'task' : IDL.Text });
  return IDL.Service({
    'addTask' : IDL.Func([IDL.Text], [IDL.Text], []),
    'deleteTask' : IDL.Func([IDL.Text], [IDL.Text], []),
    'getAllTask' : IDL.Func([], [IDL.Vec(Task)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
