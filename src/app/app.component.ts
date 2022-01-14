import { Component, VERSION } from '@angular/core';
import { Task } from './task.model';
import { Priority } from './task.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  states: string[] = ['Por hacer', 'En progreso', 'Finalizado'];
  lastStateIdex: number = this.states.length - 1;
  categories: string[] = ['Educación', 'Trabajo', 'Hogar', 'Vida personal'];
  priorities: Priority[] = [
    { description: 'Alta', color: '#ff4a4a' },
    { description: 'Media', color: '#ffcf4a' },
    { description: 'Baja', color: '#8bfc92' },
  ];

  tasks: Task[] = [
    {
      description: 'Comprar alimento para gato',
      state: 0,
      category: this.categories[2],
      priority: this.priorities[2],
    },
    {
      description: 'Estudiar para el examen final',
      state: 0,
      category: this.categories[0],
      priority: this.priorities[0],
    },
    {
      description: 'Termianr el curso de fundamentos de angular',
      state: 2,
      category: this.categories[0],
      priority: this.priorities[1],
    },
    {
      description: 'Ver a mis primos en año nuevo',
      state: 2,
      category: this.categories[3],
      priority: this.priorities[1],
    },
    {
      description: 'Regar las plantas',
      state: 1,
      category: this.categories[2],
      priority: this.priorities[2],
    },
  ];

  newTask: Task = {
    description: '',
    state: 0,
    category: '',
    priority: { description: '', color: '' },
  };

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addTask() {
    this.tasks.push({ ...this.newTask });
    this.newTask = {
      description: '',
      state: 0,
      category: '',
      priority: { description: '', color: '' },
    };
  }

  nextState(index: number) {
    if (this.tasks[index].state < this.lastStateIdex) this.tasks[index].state++;
  }

  prevState(index: number) {
    if (this.tasks[index].state > 0) this.tasks[index].state--;
  }
}
