var yourName="Diego";
var friendsName="Christian";
var counter=1;
$(".sent").show();
$(".received").css("background-color","pink");
$(".send2").click(function(){
    var now=$(".your-input").val();
    $(".sent").append("<p>"+now+"</p>");
  
});
$(".send1").click(function(){
    var now=$(".friend-input").val();
    $(".received").append("<p>"+now+"</p>");
    counter+=1;
    $("h4").text("Number of messages received: " + counter);
});














//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}