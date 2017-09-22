
    window.gwd = window.gwd || {};
    $(document).ready(function() {
      slideAccesser = {
        setTimer: true,
        timerDelay: 2000
      }
      var productList = ["karmsund","fagerginst","gjora","dunang", "spoka","malm","gillhov","ljusoga"];
      //Custom 
      SlidejQueryAnimater = {
          slideShow: '#slideShow',
          timer: function() {
            if (slideAccesser.setTimer) {
              this.timerObject = setInterval(function() {
                SlidejQueryAnimater.slide(1, 'left');
              }, slideAccesser.timerDelay);
            }
          },
          numberOfImages: 8,
          speed: 550,
          numberOfFrontImages: 4, //100/4 means 25% if 4 images;
          firstRound: true,
          next: 5,
          directional: 1,
          clickactive: true,
          imageID: '#con',
          nextImageAfterFront: function() {
            //you need to grab 4th child from css so it number 4 and then once reaches the top start from 1 
            this.next < this.numberOfImages ? this.next++ : this.next = 1;
            return this.next;
          },
          movement: function() {
            return 100 / this.numberOfImages;
          },
          slideShowContainer: '#slideShowContainer',
          attachClick: function() {
            jQuery.each($(this.slideShowContainer).children(), function(key, element) {
                element.onclick = function(event) {
                  event.preventDefault();
                  var title = this.getAttribute('data-title');
                  var slide = $(this);
                  slide.data('title', title);
                  slide.data('link', eval(productList[key]));
                  slide.addClass('campaign-link');
                  edgeClick(event, slide, 'click');
                };
              })
              //children.map(function(index,element){
              //})
          },
          slide: function(currentSlide, direction) {
            SlidejQueryAnimater.clickactive = false;
            if (direction == 'right') {
              // var lastSlide = $(this.slideShowContainer).children('img:first');
              var lastSlide = $(this.slideShowContainer).children(':first');
              var elementWidth = 100 / (SlidejQueryAnimater.numberOfFrontImages + 1);
              lastSlide.css('left', -(elementWidth) + '%').show().appendTo(this.slideShowContainer);
              this.directional = 1;
            }
            if (direction == 'left' && this.firstRound) {
              //hide images above the number of this.numberOfFrontImages + 2 and this.numberOfImages;
              for (set = this.numberOfFrontImages + 2; set <= this.numberOfImages; set ++) {
                $(this.imageID + set).hide();
              }
              this.directional = -1;
            }
            if (direction == 'left' && !this.firstRound) {
              //make next visible
              var next = $(this.imageID + this.nextImageAfterFront()).show();
              //dont console.log(this.nextImageAfterFront()) it will call the function;
              //change direction;
              this.directional = -1;
            }
            $(this.slideShowContainer).animate({
              left: this.directional * 100 / this.numberOfFrontImages + '%'
            }, {
              duration: SlidejQueryAnimater.speed,
              complete: function() {
                SlidejQueryAnimater.firstRound = false;
                //take first image  (which is last in jquery) to the end of stack with append and hide;
                var slideOrder = (direction == 'right') ? 'first' : 'last'
                  //SlidejQueryAnimater.firstSlide = $(SlidejQueryAnimater.slideShowContainer).children('img:' + slideOrder);
                SlidejQueryAnimater.firstSlide = $(SlidejQueryAnimater.slideShowContainer).children(':' + slideOrder);
                (direction == 'right') ? SlidejQueryAnimater.firstSlide.css('left', '0'): SlidejQueryAnimater.firstSlide.css('left', '100%');
                SlidejQueryAnimater.firstSlide.hide().prependTo(SlidejQueryAnimater.slideShowContainer); //.hide();
                for (reposition = 1; reposition <= (SlidejQueryAnimater.numberOfFrontImages + 1); reposition++) {
                  /*console.log('reposition');
                  console.log(reposition);
                  console.log('all');
                  console.log(SlidejQueryAnimater.numberOfFrontImages + 1);*/
                  //use eq(-index) //for counting from the end;
                  var element = $(SlidejQueryAnimater.slideShowContainer).children().eq(-reposition);
                  //move by percentage;
                  var elementWidth = 100 / (SlidejQueryAnimater.numberOfFrontImages + 1); // - 0.2;
                  $(element).css('left', (reposition - 1) * elementWidth + '%');
                }
                $(SlidejQueryAnimater.slideShowContainer).css('left', '0');
                SlidejQueryAnimater.clickactive = true;
              }
            });
          }
        }
        //start timer 
      SlidejQueryAnimater.timer();
      SlidejQueryAnimater.attachClick();
    }); //ready 
    /*************************/
     //end of Custom
    gwd.bttn = function(event) {
      slide = $(this);
      slide.data('title', this.id);
      slide.data('link', clickTag);
      slide.addClass('campaign-link');
      edgeClick(event, slide, 'click');
    };
    gwd.scollLeft = function(event) {
      //remove timer 
      if (typeof SlidejQueryAnimater.timerObject != 'undefined') {
        clearInterval(SlidejQueryAnimater.timerObject);
        SlidejQueryAnimater.timerObject = 'undefined';
      }
      if (SlidejQueryAnimater.clickactive) {
        SlidejQueryAnimater.slide(1, 'left');
      }
    };
    gwd.scrollRight = function(event) {
      //remove timer 
      if (typeof SlidejQueryAnimater.timerObject != 'undefined') {
        clearInterval(SlidejQueryAnimater.timerObject);
        SlidejQueryAnimater.timerObject = 'undefined';
      }
      if (SlidejQueryAnimater.clickactive) {
        SlidejQueryAnimater.slide(1, 'right');
      }
    };
  