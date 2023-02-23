import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor Todo{
  public type Task = {
    task: Text;
  };
  stable var task: List.List<Task> = List.nil<Task>();
  public func addTask(userTask : Text): async Text{
    if(userTask == ""){
      return ("Failed");
    }
    else{
      let newTask : Task = {
      task= userTask;
    };
    task := List.push(newTask, task);
    return ("Added");
    };
  };
  public query func getAllTask() :async [Task]{
    Debug.print(debug_show(task));
    return List.toArray(task);
  };
  public func deleteTask(delTask: Text) :async Text{
    task := List.filter<Task>(task, func(i) {i.task != delTask});
    Debug.print(debug_show(task));
    return ("Deleted");
  };
}