import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit = "?_limit=5";

  constructor(private http: HttpClient) { }

  //Get Todos  
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
  //Delete Todo
  deleteTodo(todo: Todo) : Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions)
  }
  //add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
  //Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
   }
  // httpOtions is going to include  the header of content since we are sending data we have to send the content type of application JSON. 
    // **This is the Hard coded data**
    //  return [
    //   {
    //     id : 1,
    //     title: 'Todo One',
    //     completed: true
    //   },
    //   {
    //     id : 2,
    //     title: 'Todo Two',
    //     completed: false
    //   },
    //   {
    //     id : 3,
    //     title: 'Todo Three',
    //     completed: false
    //   },
    //  ]
    //  }
}
