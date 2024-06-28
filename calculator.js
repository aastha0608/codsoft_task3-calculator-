function myfunction(){
    const display = document.getElementById('display');
    

    function cleardisplay(){
        display.value = '';
    }
    function dltlast(){
        display.value = display.value.slice(0,-1);
    }

    function appendToDisplay(value){
        display.value += value;
    }
    function result(){
        display.value = eval(display.value)
    }
}