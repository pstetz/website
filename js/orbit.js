let planets = [];
let planet_num = 0;
const MAX_PLANETS = 8;
const G = 3000; // This value was choosen by trial and error
const SPEED_LIMIT = 30;

let shiftdown = false;
let planet_forming = false;

let window_width = $(window).width();
let window_height = $(window).height();

function sign(x) { return x < 0 ? -1 : 1; }

function g_force(x1, y1, m1, r1, x2, y2, m2, r2) {
  max_r = Math.max(r1, r2)
	delta_x = x1 - x2;
	delta_y = y1 - y2;

	distance_squared = delta_x * delta_x + delta_y * delta_y
	f_total = (G * m2) / (distance_squared * distance_squared);
	f_x = f_total * delta_x * delta_x;
	f_y = f_total * delta_y * delta_y;

  f_x = (delta_x > 0 ? - f_x : f_x)
  f_y = (delta_y > 0 ? - f_y : f_y)

  f_x = (Math.abs(delta_x) < max_r ? 0 : f_x)
  f_y = (Math.abs(delta_y) < max_r ? 0 : f_y)
	return [ f_x, f_y ];
}

// Thanks to user 'Anatoliy' for this copy and paste code from stack overflow on generating random colors
// url: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$( '#form_planet' ).on('mousedown', function(event) {
	if( planet_num != MAX_PLANETS ) {
		planet_num = planets.length + 1
		timestamp = Date.now();
		planet_forming = true;
		new_r = 10;
		new_x = event.clientX;
		new_y = event.clientY;
		new_v_x = 10 * Math.random() - 5; // FIXME: change to be dynamic
		new_v_y = 10 * Math.random() - 5; // FIXME: change to be dynamic
		let new_planet = new Planet(planet_num, shiftdown, new_r, new_x, new_y, new_v_x, new_v_y);
		planets.push(new_planet);
	}
})

// Velocity should be determined by the arrow going from mouse position on mousedown and mouseup
$( document ).on('mouseup', function(event) {
	if (planet_forming) {
		planet_forming = false;
    for(let i = 0; i < planet_num; i++) {
      planets[i].forming = false;
    }
	}
})

$( document ).on('keydown', function(event) {
  shiftdown = (event.keyCode === 16 ? true : false);
});

$( document ).on('keyup', function(event) {
  if(shiftdown) {
    shiftdown = (event.keyCode === 16 ? false : true);
  }
});

function growPlanet(id, planet) {
  planet.r += 2.5;
  reduced_r = planet.r / 5
  planet.m = (reduced_r) * (reduced_r) * (reduced_r);
  document.getElementById(id).style.height = (planet.r) + 'px';
  document.getElementById(id).style.width = (planet.r) + 'px';
  planet.updateImage();
}

function movePlanet(i, planet) {
  let f_x_total = 0;
  let f_y_total = 0;
  for(let j = 0; j < planet_num; j++) {
    if (j != i) {
      let other = planets[j];
      if(!planet.forming) {
        let f = g_force(planet.x, planet.y, planet.m, planet.r, other.x, other.y, other.m, other.r);
        let f_x = f[0]; let f_y = f[1];
        f_x_total += (f_x / planet.m);
        f_y_total += (f_y / planet.m);
      }
    }
  }
  planet.updatePostion(1);
  planet.updateVelocity(f_x_total, f_y_total, 1);
}

// There's an optimization here, since all the forces are calculated twice
setInterval(function() {
  for(let i = 0; i < planet_num; i++) {
  	let planet = planets[i];
    if(planet.forming) {
      growPlanet(`planet${planet_num}`, planet);
    } else if (!planet.stationary) {
      movePlanet(i, planet);
    }
  }
}, 25);

