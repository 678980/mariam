let title = document.querySelector('.title');
let turn ='x';

let squares = [];
function end(num1,num2,num3){
    title.innerHTML= `${squares[1]}winner`;
document.getElementById('item'+num1).style.background ='#000';
document.getElementById('item'+num2).style.background ='#000';
document.getElementById('item'+num3).style.background ='#000';


}
function winner()
{
for(let i=1;i<10;i++){
    // document.getElementById('item' + i)
    squares[i] = document.getElementById('item'+i).innerHTML;
}
if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[1] !=''){
// title.innerHTML= `${squares[1]}winner`;
// document.getElementById('item'+num1).style.background ='#000';
// document.getElementById('item'+num2).style.background ='#000';
// document.getElementById('item'+num3).style.background ='#000';

setInterval(function(){title.innerHTML += '-'},1000);
setTimeout(function(){location.reload()},4000)
}
elseif(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[5]!= '')
{
end(4,5,6)
}
elseif(squares[7]==squares[8]&&squares[8]==squares[9]&&squares[8]!= '')
{
end(7,8,9)
}
elseif(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[1]!= '')
{
end(1,4,7)
}
elseif(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[5]!= '')
{
    end(2,5,8)

}
elseif(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[6]!= '')
{
 
end(3,6,9)
}
elseif(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[5]!= '')
{
 end(1,5,9)
}
elseif(squares[3]==squares[5]&&squares[5]==squares[7]&&squares[5]!= '')
{

}
}

function game(id)
{
    let element = document.getElementById(id);
    if(turn==='x'&& element.innerHTML == ''){
        element.innerHTML ='x';
        turn ='o';
        title.innerHTML ='o';
    }
    else if (turn === 'o'&&element.innerHTML == ''){
        element.innerHTML ='o';
        turn ='x';
        title.innerHTML = 'x';
    }
}