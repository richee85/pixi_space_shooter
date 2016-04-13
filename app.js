(function ($ , window){
  window.App = {};

  App = {
    init: function() {
      var w_width = $(window).width(),
          w_height = $(window).height(),
          renderer = PIXI.autoDetectRenderer(w_width,w_height, {transparent: true}),
          stage = new PIXI.Container(),
          texture = PIXI.Texture.fromImage('Starfighter.png'),
          ship = new PIXI.Sprite(texture),
          reverse = false;

      $(body).append(renderer.view);

      ship.anchor.set(0.5);
      ship.rotation = 1.5708;
      ship.position.x = 20;
      ship.position.y = 200;

      stage.addChild(ship);

      animate();

      function animate() {
        if (ship.position.x < renderer.width - ship.width && reverse === false) {
          ship.position.x += 5;
          ship.rotation = 1.5708;
        } else {
          ship.position.x -= 5;
          ship.rotation = 4.7124;
          reverse = true;

          if (ship.position.x < ship.width) {
            reverse = false;
          }
        }

        //ship.rotation += 0.05;
        requestAnimationFrame(animate);
        renderer.render(stage);
      };
    }
  };
  App.init();
} (jQuery, this));
