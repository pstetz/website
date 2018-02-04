// Variables:
// m -> mass
// x -> horizontal position
// y -> vertical position
// v_x -> horizontal velocity
// v_y -> vertical velocity
//
// Usually it's bad practice to have short variable names.  There should never need to a legend like above
// However this might be acceptable since most people familar with classical mechanics know these variables as such.

let planets = [];
let planet_num = 0;
const MAX_PLANETS = 10;
const G = 3000; // This value was choosen by trial and error
const SPEED_LIMIT = 10

let window_width = $(window).width();
let window_height = $(window).height();

// Based on how long the click is held will affect what image shows up.
let medium = 5; // seconds
let large = 10; // seconds

function g_force(x1, y1, m1, x2, y2, m2) {
	delta_x = x1 - x2;
	delta_y = y1 - y2;
	distance_squared = delta_x * delta_x + delta_y * delta_y
	f_total = (G * m1 * m2) / (distance_squared * distance_squared);
	f_x = f_total * delta_x * delta_x;
	f_y = f_total * delta_y * delta_y;
	if (delta_x > 0) {
		f_x = -1 * f_x;
	}
	if (delta_y > 0) {
		f_y = -1 * f_y;
	}
	return [ f_x, f_y ];
}


class Planet {
  
  constructor(id, m, x, y, v_x, v_y) {
  	this.image = $( `#planet${id}` );
  	this.image.css({ 'background-color': getRandomColor() });
  	this.m = m;
    this.x = x - this.image.width() / 2;
    this.y = y - this.image.height() / 2;
    this.v_x = v_x;  this.v_y = v_y;
    this.updateImage();
    this.image.removeClass( 'hidden' )
  }

  updateImage() {
  	this.image.css({left: this.x, top: this.y});
  }

  updatePostion(delta_t) {
  	this.x += this.v_x * delta_t;
  	this.y += this.v_y * delta_t;
  	if (this.x > window_width) {
  		this.x -= window_width;
  	} else if (this.x < 0) {
  		this.x += window_width;
  	}
  	if (this.y > window_height) {
  		this.y -= window_height;
  	} else if (this.y < 0) {
  		this.y += window_height
  	}
  	this.updateImage();
  }

  updateVelocity(f_x, f_y, delta_t) {
  	if (Math.abs(this.v_x + f_x) < SPEED_LIMIT) {
  		this.v_x += f_x * delta_t;
  	}
  	if (Math.abs(this.v_y + f_y) < SPEED_LIMIT) {
  		this.v_y += f_y * delta_t;
  	}
  }
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

let timestamp; // needed to check how long planet was forming
let planet_forming = false;

$( document ).on('mousedown', function(event) {
	console.log("DOWN");
	if( planet_num == MAX_PLANETS ) {
		$( "#maximum_planets_reached" ).removeClass('hidden')
	} else {
		planet_num = planets.length + 1
		timestamp = Date.now();
		planet_forming = true;
		new_m = 1; // FIXME: change to be dynamic
		new_x = event.clientX;
		new_y = event.clientY;
		new_v_x = 10 * Math.random() - 5; // FIXME: change to be dynamic
		new_v_y = 10 * Math.random() - 5; // FIXME: change to be dynamic
		let new_planet = new Planet(planet_num, new_m, new_x, new_y, new_v_x, new_v_y);
		planets.push(new_planet);
	}
})

// FIXME: Get the planet to get bigger for the amount of time the mouse is clicked down.  Have it affect its mass too.
// Velocity should be determined by the arrow going from mouse position on mousedown and mouseup
$( document ).on('mouseup', function(event) {
	console.log("UP");
	if (planet_forming) {
		$( "#orbit_info" ).removeClass('hidden');
		planet_forming = false;
	}
})

// There's an optimization here, since all the forces are calculated twice
setInterval(function() {
  for(let i = 0; i < planet_num; i++) {
  	let planet_1 = planets[i];
  	let f_x_total = 0;
  	let f_y_total = 0;
  	for(let j = 0; j < planet_num; j++) {
  		if (j != i) {
	  		let planet_2 = planets[j];
	  		let f = g_force(planet_1.x, planet_1.y, planet_1.m, planet_2.x, planet_2.y, planet_2.m);
	  		let f_x = f[0]; let f_y = f[1];
	  		f_x_total += (f_x / planet_1.m);
	  		f_y_total += (f_y / planet_1.m);
  		}
  	}
    planet_1.updatePostion(1);
  	planet_1.updateVelocity(f_x_total, f_y_total, 1);
  }
}, 100);

