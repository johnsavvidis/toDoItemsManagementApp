export class ItemsService {
    

    getItems(){
        /* 1. Fetch to-do items from the API */
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            var array1 = Object.entries(json);
            var len1 = array1.length;
            var tempArray1 = [];
            for(let i=0; i < len1 ; i++){
                tempArray1[i] = array1[i][1]; 
            }
            var array2 = Object.entries(tempArray1);
            var len2 = array2.length;
            var tempArray2 = [];
            for(let j=0; j < len2; j++){
                tempArray2[j] = array2[j][1];
            }
            /* 2. Add new to-do items */
            this.addItems(tempArray2, "newItem");
            /* 3. Mark items as complete */
            this.markAsComplete(tempArray2, 1);
            /* 4. Delete new to-do items */
            this.deleteItems(tempArray2, "newItem");
            /* 5. If completed = false*/
            this.incompleteItems(tempArray2);
        })
    }

    addItems(array: any, newEntry: string){
        array.push(newEntry);
    }

    markAsComplete(array: any, position: number){
        var temp = Object.entries(array(position));
        for(let i=0; i<temp.length; i++){
            //If temp[i].completed == false {temp[i].completed == true}
            console.log(temp)
        }
    }

    deleteItems(array: any, newEntry: string){
        array.pop(newEntry);
    }

    incompleteItems(array: any){
        let count = 0;
        for(let i=0; i<array.length; i++){
            //If array[i].completed == false {count++}
            console.log(array)
        }
        console.log(count);
    }

    constructor(){
        this.getItems()
    }
}