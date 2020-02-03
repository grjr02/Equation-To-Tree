import { Injectable } from '@angular/core';
import { isNumber } from 'util';

@Injectable()
export class TreeNode{

    name:string;
    children:TreeNode[];
   
    constructor(){

        this.name = ''
        this.children = new Array();
    }

}

export class BinaryTree{

    treeConversion(temp:TreeNode, equation:string):TreeNode{
        while(true){
            if(equation.length === 1){
                temp = new TreeNode();
                temp.name = equation;
                return temp;
            }
            var isNumber = false;

            for(let i = 0; i < equation.length; i++){
                if(equation.charAt(i)==='+' || equation.charAt(i)==='-'){
                    isNumber = true;
                }else if(equation.charAt(i)==='*' || equation.charAt(i)==='/'){
                    isNumber = true;
                }else if(equation.charAt(i)==='^' || equation.charAt(i)==='$'){
                    isNumber = true;
                }

                if(isNumber === true )break;

            }

            if(isNumber === false){
                temp = new TreeNode();
                temp.name = equation;
                return temp;
            }else{
                break;
            }

        }
        
            let count = 1;

            while(count <= 3){
                
                for(let i = equation.length; i >= 0; i--){

                    if(count===1 && (equation.charAt(i) === '+' || equation.charAt(i) === '-')){
                        temp = new TreeNode();
                        temp.name = equation.charAt(i);
                        
                        temp.children[0] = this.treeConversion(temp.children[0], equation.substring(0,i));
                        temp.children[1] = this.treeConversion(temp.children[1], equation.substring(i+1,equation.length));
                        return temp;

                    }else if(count===2 && (equation.charAt(i) === '*' || equation.charAt(i) === '/')){
                        temp = new TreeNode();
                        temp.name = equation.charAt(i);
                        console.log(temp.name);
                
                        temp.children[0] = this.treeConversion(temp.children[0], equation.substring(0,i));
                        temp.children[1] = this.treeConversion(temp.children[1], equation.substring(i+1,equation.length));
                        return temp;
                    }else if(count===3 && (equation.charAt(i) === '^' || equation.charAt(i) === '$')){
                        temp = new TreeNode();
                        temp.name = equation.charAt(i);
                        console.log(temp.name);
                     
                        temp.children[0] = this.treeConversion(temp.children[0], equation.substring(0,i));
                        temp.children[1] = this.treeConversion(temp.children[1], equation.substring(i+1,equation.length));
                        return temp;
                    }
                }
                count = count+1;
            }

        return temp;

    }

    jsonConverter(temp:TreeNode):string{

        if(temp === null) return "";

        let json = "{ \"name\": " + "\"" + temp.name + "\"";
        if(temp.children[0] != null && temp.children[1] != null){
	        
	        json = json + ", \"children\": [ ";
	        
	        json = json + this.jsonConverter(temp.children[0]) + ", ";
	        json = json + this.jsonConverter(temp.children[1]) + "] ";

	    }
	    
	    json = json + " }";
	    
        return json; 

    }

    


}