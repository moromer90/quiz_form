$(document).ready(function(){
var group1=""; var group2=""; var group3="";var result="";

function check_form(){
    if (!group1 || !group2 || !group3) {
    console.log("empty fields in one of 3 groups");
}    else {publish_results()}
}
    
$('label.group1 img').click(function(){
group1=(this.id);//console.log(group1);
check_form();
}) 
$('label.group2 img').click(function(){
group2=(this.id);//console.log(group2);
check_form();
})
$('label.group3 img').click(function(){
group3=(this.id);//console.log(group3);
check_form();
})

function publish_results(){
    if      (group1==1) {result=result+('<p>Your choice is cryptocoin 1</p>');console.log(result);}
    else                {result=result+('<p>Your choice is cryptocoin 2</p>');console.log(result);}
    
    if      (group2==3) {result=result+('<p>Your choice is cryptocoin 3</p>');console.log(result);}
    else if (group2==4) {result=result+('<p>Your choice is cryptocoin 4</p>');console.log(result);}
    else if (group2==5) {result=result+('<p>Your choice is cryptocoin 5</p>');console.log(result);}
    else if (group2==6) {result=result+('<p>Your choice is cryptocoin 6</p>');console.log(result);}
    else if (group2==7) {result=result+('<p>Your choice is cryptocoin 7</p>');console.log(result);}
    else if (group2==8) {result=result+('<p>Your choice is cryptocoin 8</p>');console.log(result);}
    else if (group2==9) {result=result+('<p>Your choice is cryptocoin 9</p>');console.log(result);}
    else                {result=result+('<p>Your choice is cryptocoin 10</p>');console.log(result);}

    if      (group3==11) {result=result+('<p>Your choice is cryptocoin 11</p>');console.log(result);}
    else                 {result=result+('<p>Your choice is cryptocoin 12</p>');console.log(result);}

    $('.message').append(result+"<h4>You're definitely cryptoaddicted. Try to talk about it with your doctor.");
}
});