import { NgStyle } from '@angular/common';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';


interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // add a title
  title: string = "TODO List"

  filter:string = "";

  // create an array of tasks
  list: Todo[]= [
    {task: "fold clothes", completed: false},
    {task: "put clothes in dresser", completed: true},
    {task: "relax", completed: true},
    {task: "try to pet cat", completed: false},
    {task: "pet dog", completed: false},
    {task: "be awesome", completed: true},
  ]

  // ** Clicking the "complete” button sets the task’s completed property to true.**
   completeTask = function(currenttodo:Todo): void {
     currenttodo.completed = true;
   }
  
   // ** FILTER FUNCTION **
   getFilteredResults():Todo[] {
       return this.list.filter((todo)=> {
          return todo.task.toLowerCase().includes(this.filter.toLowerCase());
        })
      }

  // ** ADD TO DO ITEM FUNCTION **
     newTodoTask: string;
     addTask = function(newTodoTask): void{
       this.newTodoTask =''; //clears out the input field after entering item
       newTodoTask = {
        task: newTodoTask,
        completed: false
      };
      this.list.push(newTodoTask);
    }

  // ** CLICKING X BUTTON TO DELETE TASK **    
     removeTask = function(task:string): void{
      let index = this.list.findIndex(function(todo){
         return todo.task ===task;     
      })
      this.list.splice(index,1);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
