import { Component, OnInit } from '@angular/core';
import { BinaryTree , TreeNode } from 'src/app/classes/conversion';
import { GraphService } from 'src/app/services/graph.service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ChartConst } from 'o2-chart-lib';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [
    trigger('fade',[
      //state(),
      transition('void => *',[
        style({opacity: 0}),
        animate(1000, style({ opacity:1 }))
      ])
    ])
  ]
})
export class InputComponent implements OnInit {

  eqForm = new FormGroup({
    name : new FormControl('',[Validators.required, this.eqValidator])

  });

  node:TreeNode;

  //Chart configuartion variables
  chartType:string; configData:any; treeDataJson:any = ""; DataSetJson:string; treeTypeName:string;
  
  constructor(private chartConst: ChartConst, 
              private _BinaryTree:BinaryTree, 
              private _GraphService:GraphService) {
    
  }

  getErrorMessage() {
    return this.eqForm.controls['name'].hasError('required') ? 'You must enter a value' :
    this.eqForm.controls['name'].hasError('invalidChar') ? 'Equation contains invalid characters    Ex. Format: 2+5*10':
    this.eqForm.controls['name'].hasError('prefixSuffixError') ? 'Equation cant start or end with an operator (+ - * / ^)   Ex. Format: 2+5*10':
    this.eqForm.controls['name'].hasError('leadingZeros') ? 'Integer cannot have a leading zero   Ex. Format: 2+5*10':
    this.eqForm.controls['name'].hasError('adjOperators') ? 'Cannot have adjacent operators  Ex. Format: 2+5*10':
    this.eqForm.controls['name'].hasError('whiteSpace') ? 'Please enter equation without whitespace  Ex. Format: 2+5*10':
            '';
  }

  eqValidator(control: FormControl) { 

    let eq = control.value;

    for(let i = 0; i < eq.length; i++){

      if(eq.charAt(i)== ' ')return { whiteSpace: {}}
      if(i == 0 || i == eq.length-1){

        if(eq.charAt(i) === '+' || eq.charAt(i) === '-' ) return { prefixSuffixError: {} };
        if(eq.charAt(i) === '*' || eq.charAt(i) === '/' ) return { prefixSuffixError: {} };
        if(eq.charAt(i) === '^' || eq.charAt(i) === '$' ) return { prefixSuffixError: {} };
 
      }

      if(Number(eq.charAt(i)) || eq.charAt(i) == '0'){
        console.log("YES"); continue;
      }
      if(eq.charAt(i) === '+' || eq.charAt(i) === '-' ) continue;
      if(eq.charAt(i) === '*' || eq.charAt(i) === '/' ) continue;
      if(eq.charAt(i) === '^' || eq.charAt(i) === '$' ) continue;
        
      return{ invalidChar: {} }

    }

    for(let i = 0; i < eq.length; i++){

      if(i != eq.length -1 && eq.length != 1){
        if(eq.charAt(i) === '+' || eq.charAt(i) === '-' || eq.charAt(i) === '*' || eq.charAt(i) === '/' || eq.charAt(i) === '^' || eq.charAt(i) === '$'  ){
         
          if(eq.charAt(i+1) === '+' || eq.charAt(i+1) === '-' ) return { adjOperators: {} };
          if(eq.charAt(i+1) === '*' || eq.charAt(i+1) === '/' ) return { adjOperators: {} };
          if(eq.charAt(i+1) === '^' || eq.charAt(i+1) === '$' ) return { adjOperators: {} };

        }
      }

      if(i === 0){
        if(eq.charAt(i) === '0' && eq.length > 1 && (Number(eq.charAt(i+1) || eq.charAt(i+1) === '0'))){
          return { leadingZeros: {} }
        }
        continue;
      }
      if(eq.charAt(i) === '0'){

        if(eq.length > 1 && i !== eq.length-1){
          if(eq.charAt(i-1) === '+' || eq.charAt(i-1) === '-' ) return { leadingZeros: {} };
          if(eq.charAt(i-1) === '*' || eq.charAt(i-1) === '/' ) return { leadingZeros: {} };
          if(eq.charAt(i-1) === '^' || eq.charAt(i-1) === '$' ) return { leadingZeros: {} };
          
        }
      }

    }

    return null; 

  }

  ngOnInit() {

  }

  //Submits equation string to tree converter
  convertEq(){

    this.treeTypeName     	= this.chartConst.TREE_CHART_TYPE_NAME;
    this.node = this._BinaryTree.treeConversion(this.node, this.eqForm.controls['name'].value);
    this.initilizeData(this.node);
    //this.send(this.node); // ==> Sends tree object to display component

  }

  //Sends tree object to display component
  send(treenode:TreeNode){

    this._GraphService.send(treenode);

  }

  private initilizeData(_TN:TreeNode) {
    // this.configData = this.httpClient.get('assets/json/ConfigData.json');
    this.configData = {
      "className": {
        "axis": "axis",
        "axisXBorder": "axis_x",
        "axisXText": "axis-x-text",
        "line": "line",
        "multiLinePrefix": "line-",
        "grid": "grid",
        "histogram": "histogram",
        "histogramBar": "histogram-bar",
        "treemap": "treemap",
        "treemapLabel": "treemap-label",
        "packlayout": "packlayout",
        "packlayoutLabel": "packlayout-label",
      },
      "label": {
          "display": true,
      },
      "title": {
        "display": true,
        "name": "Title",
        "className": "chart-title",
        "height": 30,
        "leftMargin": -20,
        "bottomMargin": 10
      },
      "maxValue": {
        "auto": true,
        "x": 100,
        "y": 100,
      },
      "legend": {
        "display": true,
        "position":           "right",
        "totalWidth": 80,
        "initXPos": 5,
        "initYPos": 10,
        "rectWidth": 10,
        "rectHeight": 10,
        "xSpacing": 2,
        "ySpacing": 2
      },
      "color": {
        "auto": true, //
        "defaultColorNumber": 10,
        "opacity": 1.0,
        "userColors": [
          "blue",
          "red",
          "green",
          "yellow",
          "PaleGoldenrod",
          "Khaki",
          "DarkKhaki",
          "Gold",
          "Cornsilk",
          "BlanchedAlmond",
          "Bisque",
          "NavajoWhite",
          "Wheat",
          "BurlyWood",
          "Tan",
          "RosyBrown",
          "SandyBrown",
          "Goldenrod",
          "DarkGoldenrod",
          "Peru",
          "Chocolate"
        ],
        "focusColor": "red",
      },
      "line": {
        "legend": "lineEnd",
        "interpolate" : "linear",
      },
      "margin": {
        "top": 30,
        "left": 30,
        "right": 10,
        "bottom": 20,
        "between": 5
      },
      "animation":{
        "enable":true,
        "duration":4000,
      },
    };
    this.treeDataJson = _TN;

  }

}
