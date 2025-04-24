import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';

todoList=[
    {id:0, name: "Code", showInput:false}
  ]

  get items(){
    return this.todoList
    console.log(this.todoList);



  }//end of todolist
  addItem(name:string){
    this.todoList.push({
      id:this.todoList.length+1,
      name:name,
      showInput:false
    })

  }//end of addItem

  updateItem(event:any){
    //console.log(event);
    this.todoList[event.target.id].name=event.target.value;
    this.todoList[event.target.id].showInput=false;
  }

  inputFocus(event:any){
    let id=event.target.id;
    setTimeout(() => {
      document!.getElementById(`input${id}`)!.focus();
      }, 100);
  }

  removeItem(id:number){
    //console.log(id);
    //delete this.todoList[id];
    this.todoList.forEach( (value, index) => {
      if (value.id==id)  {
        this.todoList.splice(index,1);
      }
    })

  }


}//end AppComponent
