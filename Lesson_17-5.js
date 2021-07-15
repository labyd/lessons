var arr=[];
var my_arr=['1',2,' world!', false, 'Hellow'];

var count=0;
/*while(count<10){
  document.write("Hellow world!<br/>");
  count++;
}*/

for(count; count<my_arr.length; count+2)
{
  document.write(my_arr[count]+"<br/>");
}
