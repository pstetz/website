class Planet {
  
  constructor(id, s, r, x, y, v_x, v_y) {
    this.forming = true;
    this.stationary = s
  	this.image = $( `#planet${id}` );
  	this.image.css({ 'background-color': getRandomColor() });

  	this.m = r * r * r;     this.r = r;
    this.x = x;             this.y = y;
    this.v_x = v_x;         this.v_y = v_y;

    this.updateImage();
    this.image.removeClass( 'hidden' )
  }

  updateImage() {
    let left_pos = this.x - this.image.width() / 2 + 'px';
    let top_pos = this.y - this.image.height() / 2 + 'px';
  	this.image.css({left: left_pos, top: top_pos});
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
      this.v_x -= this.v_x * 0.003
  	}
  	if (Math.abs(this.v_y + f_y) < SPEED_LIMIT) {
  		this.v_y += f_y * delta_t;
      this.v_y -= this.v_y * 0.003
  	}
  }
}
