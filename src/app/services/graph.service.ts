import { Injectable } from '@angular/core';
import {TreeNode } from '../classes/conversion';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private sendGraph = new Subject<TreeNode>();
  graph$ = this.sendGraph.asObservable();
  
  constructor() { }

  send(_TreeNode:TreeNode){

    this.sendGraph.next(_TreeNode);

  }
}
