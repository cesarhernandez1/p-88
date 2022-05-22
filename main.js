var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;
ballx = 900 
bally = 500

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("ball.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(30);
        player_object.scaleToHeight(30);
        player_object.set({
            top:player_y,
            left:player_x

        });

canvas.add(player_object);

    });



}

function new_image()
{
    fabric.Image.fromURL(golf-h.png, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:bally,
            left:ballx
        });
        canvas.add(block_image_object);
    
        });

    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
    

    if(keyPressed == '38')
    {
        up();
        console.log("up");

    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '85')
    {
        new_image('different.png');
        console.log("u");
    }
    if(keyPressed == '67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }
    }
    
    function up()
    {
        if(player_y >=0)
        {
            player_y = player_y - block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object);
            player_update();
            new_image()
        }
    }
    function down()
    {
        if(player_y <=500)
        {
            player_y = player_y + block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object);
            player_update();
            new_image()
        }
    }
    function left()
    {
        if(player_x >0)
        {
            player_x = player_x - block_image_width;
            console.log("block image width = " + block_image_width);
            console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object);
            player_update();
            new_image()
        }
    }
    function right()
    {
        if(player_x <=850)
        {
            player_x = player_x + block_image_width;
            console.log("block image width = " + block_image_width);
            console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object);
            player_update();
            new_image()
        }
    }

