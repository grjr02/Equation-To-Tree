import { Component, OnInit } from '@angular/core';
import {ChartConst } from 'o2-chart-lib';
import { GraphService } from 'src/app/services/graph.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  animations: [
    trigger('fade',[
      //state(),
      transition('void => *',[
        style({opacity: 0}),
        animate(2000, style({ opacity:1 }))
      ])
    ])
  ]
})
export class DisplayComponent implements OnInit {
  chartType:string;
  configData:any;

  treeDataJson:any;
  DataSetJson:string;
  treeTypeName:string;
  
  constructor(private chartConst: ChartConst, private _GraphService:GraphService) {
    this.treeTypeName     	= this.chartConst.TREE_CHART_TYPE_NAME;
    this.initilizeData();

   }

  ngOnInit() {
  }

  private initilizeData() {
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
    this.treeDataJson = "";
    this._GraphService.graph$.subscribe( 

      data => { 

        this.treeDataJson = data,
        console.log(data)

      });

        // this.treeDataJson = 
        // {
        //     "name": "Eve",
        //     "children": [
        //         { "name": "Cain" 
        //         },
        //         { 
        //             "name": "Seth",
        //             "children": [
        //                 { "name": "Enos" },
        //             ]
        //         },
        //         { "name": "Abel" 
        //         },
        //         { 
        //             "name": "Awan",
        //             "children": [
        //                 { "name": "Enoch" }
        //             ]
        //         },
        //         { "name": "Azura" 
        //         },
        //     ]
        // };


    


    


    

  }


  // Add End --------------------------------------------



}
