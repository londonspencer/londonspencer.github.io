$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
      

    // TODO 2 - Create Platforms
      createPlatform(500,650,175,20);
      createPlatform(300,510,120,15, "blue");
      createPlatform(275,700,175,15 , "hotpink");
      createPlatform(1020,700,500,25, "black");
      createPlatform(500,600,700,16, "orange");

    // TODO 3 - Create Collectables
      createCollectable("steve", 350,285);
      createCollectable("diamond",1050,250,1.2);
      createCollectable("database",210,245,1.2);
    
    // TODO 4 - Create Cannons
       createCannon("top", 500,1000);
       createCannon("bottom",1300,200);
       createCannon("left",520,300);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
