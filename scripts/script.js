$(document).ready(function(){
    console.log('loaded');

    // Set up arrow for scroll up button
    $('#arrow').css({ 'position': 'fixed', 'right': 30 +'px', 'bottom': -70+'px', 'transition': 'bottom ease 1s'});

    // Trigger arrow behaviour on scroll
    $(document).scroll(function(){
        //Calculate position of top window from 0 to 10
        var position =Math.round( (10/ ($(document).height() - $(window).height()))*$(document).scrollTop());
        //If position over 2, show arrow
        if (position > 2){
            $('#arrow').css('bottom', 30+'px')
        }else{
            $('#arrow').css('bottom', -70+'px')
        }
    });

    //Click on arrow bring document to top
    $('#arrow').click(function(){
        $(document).scrollTop(0);
    });

    // Show, hide mobile menu
    $('#hamburger-icon').click(function(){
        $('nav').slideToggle();
    });

    // Run image slider
    backgroungImgQuotes(0);


    // On resize make menu visible or hide
    $(window).resize(function(){
        if($(window).outerWidth(true)>768){
            $('nav').css('display','flex');
        }else{
            $('nav').css('display','none');
        }
    });

    // On load hide mobile menu or make visible desktop menu
    if($(window).outerWidth(true)>768){
        $('nav').css('display','flex');
    }else{
        $('nav').css('display','none');
    }

    // Logo scalling on hover
    $('.logo').mouseenter(function(){
        $(this).css('transform', 'scale(1.2)').delay(1000).queue(function(){
            $(this).css('transform', 'scale(1)');
            $(this).dequeue();
        });
    });

    // Open modal window with map
    $('.contactus>p').click(function(){
        $('#modalmap').removeClass('close');
        $('#modalmap').append('<iframe title="Map of training center" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9515.491345629065!2d-6.2885705!3d53.3992146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7baa038425845b41!2sFinglas%20Training%20Centre%20CDETB!5e0!3m2!1sen!2sie!4v1587716132777!5m2!1sen!2sie" width="640" height="360" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
    });
    // Close modal window with map
    window.onclick = function(event) {
        if (event.target.id == "modalmap") {
            $('#modalmap').addClass('close');
        }
    }

    // Start testimonia slider
    testimonialSlider(0);


    // Click on testimonia bullets
    $('.testimonial-bullets').click(function(e){
        clearTimeout(myTimer);                                      //Stop timer
        numberTestim=$('.testimonial-bullets p').index(e.target)    //Assign clicked child position
        testimonialSlider(numberTestim);                            //Start new timer

    });

     // Animate counter on scroll
    $(window).scroll(function(){
        if($('#stats').length){
        if((document.getElementById('stats').getBoundingClientRect().top -$(window).innerHeight() + $('#stats').innerHeight()/3*2)<0){  //element must be 2/3 visible from bottom to start function
            $('#stats').css('opacity', 1);
                $({ Counter: 1991 }).animate({ Counter: $('#year').text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $('#year').text(Math.ceil(this.Counter));
                    }
                });
                $({ Counter: 0 }).animate({ Counter: $('#courses').text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $('#courses').text(Math.ceil(this.Counter));
                    }
                });
                $({ Counter: 400 }).animate({ Counter: $('#students').text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $('#students').text(Math.ceil(this.Counter));
                    }
                });
        
                $(window).off('scroll');    //Run once
            }
        }
    });

    // Course page, Student page, College page
    
    // Make + sign visible
    if($('.accordion  h2').length){
        $('.accordion  h2').addClass('unselected');
        // Hide all under h2 elements until next h2
        var allPanels = $('.accordion h2').nextUntil('h2').hide();
    }
    // Accordion function
    $('.accordion  h2').click(function(e) {
        if($(e.target).text() == 'Car Park'){       //Click first h2, adding heavy video source for college page.
            $('video').append('<source src="video/carpark.mp4" type="video/mp4"></source>');
        }
        if($(this).nextUntil('h2').is(':visible')){     //If click header with visible content
            allPanels.slideUp();                        //Slide up all headers
            $('.accordion h2').addClass('unselected').removeClass('selected');  //Make + visible and hide - sign
            return false;                               //Stop function. Prevent to toggle classes by following code
        }else{                                          //If click any unopened header
            allPanels.slideUp();                        //Slide up all headers
            $('.accordion h2').addClass('unselected').removeClass('selected');  //Make + visible and hide - sign
        };
        $(this).nextUntil('h2').slideDown();            //Slide down elements p and img
        $(this).toggleClass('selected unselected');     //Toggle classes to make - visible and hide + sign
        
    });

    // Contact page
    // Run Video on top of map
    $('#map-video').delay(13000).queue(function(){                          //Delay 13s, duration of video
        $(this).animate({'opacity':0},1000).delay(1000).queue(function(){   //Fade out for 1s
            $(this).css('display', 'none');                                 //Hide video
            $(this).dequeue();
        });
        $(this).dequeue();
    })


    // Load part of the pages
    // Loading Home page
    $('nav [href="#index-load"]').click(function(){
        $('main').html('');
        $('main').load('index-part.html');
        $('nav').children().removeClass('active');
        $(this).addClass('active')
    });

    // Loading Course page
    $('nav [href="#course-load"]').click(function(){
        $('main').html('');
        $('main').load('course.html');
        $('nav').children().removeClass('active');
        $(this).addClass('active');
    });
    // Loading Student page
    $('nav [href="#students-load"]').click(function(){
        $('main').html('');
        $('main').load('students.html');
        $('nav').children().removeClass('active');
        $(this).addClass('active');
    });
    // Loading employer page
    $('nav [href="#employer-load"]').click(function(){
        $('main').html('');
        $('main').load('employer.html');
        $('nav').children().removeClass('active');
        $(this).addClass('active');
    });
    // Loading college page
    $('nav [href="#college-load"]').click(function(){
        $('main').html('');
        $('main').load('college.html');
        $('nav').children().removeClass('active');
        $(this).addClass('active');
    });
    // Loading contact page
    $('nav [href="#contact-load"]').click(function(){
        $('main').html('');
        $('main').load('contact.html');
        $('nav').children().removeClass('active');
        $(this).addClass('active');
    });
});
// Variables
var number = 0;
var numberTestim = 0;
var myTimer;

// Quotes data base
var quotes=[
    'Tell me and I forget, teach me and I may remember, involve me and I learn. - Benjamin Franklin',
    'Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and shakers in our society for the indefinite future. - Brain Tracy',
    'The more that you read, the more things you will know. The more that you learn, the more places you’ll go. - Dr.  Seus',
    'Change is the end result of all true learning. - Leo Buscaglia',
    'The more I live, the more I learn. The more I learn, the more I realizes, the less I know. – Michel Legrand'
];

// Run banner slider
function backgroungImgQuotes(nextSlideData){
    $('.im').css('transition', 'none');             //Remove transition
    $('.im').css('opacity', 0);                     //Previous image change opacity to 0 instantly
    $('.im').css('transition', 'opacity 1s ease');  //Restore opacity
    nextSlideData = number;                         //Assign next image number
    $('.im').eq(nextSlideData).css('opacity', 1);   //Show image
    $('#text').html(quotes[nextSlideData]).css('top','35%').css('opacity', 1).delay(8000).queue(function(){     //Display text sliding to middle and slowly appering, then wait 8s
        $(this).css('top','100%').css('opacity',0);                                                             //Then move image down and opacity to 0
        $(this).dequeue();                                                                                      //Restore queue
    });
    number++;                                                                                                   //Iterate next position
    if (number>quotes.length-1){number=0; };                                                                    //If number over array length, start from 0
    setTimeout(backgroungImgQuotes, 10000, number)
}

// Testimonial slider
function testimonialSlider(nextSlideData){
    $('.testimonial>p').animate({'opacity': 0});                                   //Fade out previous qoute
    $('.testimonial-bullets p').css('color', '#fff');                               //All bullets colour to white
    nextSlideData = numberTestim;                                                   //Assign next image number
    $('.testimonial-bullets p:eq(' + nextSlideData + ')').css('color', '#B80924');  //Colour our bullet to red
    $('.testimonial>p:eq(' + nextSlideData + ')').animate({'opacity': 1});          //Fade in next quote
    numberTestim++;                                                                 //Iterate next position
    if (numberTestim>5){numberTestim=0; };                                          //If iterator exceed 6 quotes, reset to zero
    myTimer = setTimeout(testimonialSlider, 10000, numberTestim)                    //Start timeout
}