
/* Lazy Load XT 1.1.0 | MIT License */

$(document).ready(function() {
	

	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1,
		is_safari = navigator.userAgent.indexOf("Safari") > -1,
		wWidth = $(window).width(),
		wHeight = $(window).height(),
		dHeight = $(document).height();
		
	function heightDetect() {
		$(".overlay").height(wHeight);
		$('.examples').height(dHeight);
		if (wWidth < 1024) {
			$(".wrapper").height(wHeight);
			$(".overlay, .overlay__case").height(dHeight);
		}
	};

	heightDetect();
		
	if ( wWidth > 480 && (wHeight != 1366 || wWidth !=1024)) {
		$(window).resize(function() {
			heightDetect();
		});
	}


	$(".case__dialog__button").on('click', function(event){
		$('.dialog').removeClass('displayNone');
		$('.thankyou').addClass('displayNone');
			
		if ($(event.target).hasClass('case__third')) {
			$(".case__dialog .offer").text("Продажа душевых кабин RADEWAY"); 
			$('.res-par1').text("Сайт: "); 
			$('.res-par1-2').text("radawashop.by"); 
			$('.res-par2').text("168000 р."); 
			$('.res-par3').text("3052000 р."); 
			$('.res-par4').text("Продать душевые кабины через оффлайн магазин (сайт — radawashop.by)"); 
			$('.res-par5').text("Настройка Я.Д. разработка целевого действия на сайте"); 
			$('.res-par6').text("13,12 р."); 
			$('.res-par7').text("7 р."); 
			$('.res-par8').text("17,7%"); 
			$('.res-par9').text("11,5%"); 
			$('.res-par10').text("1,37 мин."); 
			$('.res11').addClass('displayNone'); 
			$('.res-par12').text("24 000 р."); 
			$('.res-par13').text("продано 134 кабины за 3 летних месяца"); 
			$('.thirdGallery').removeClass('displayNone');

		} else if ($(event.target).hasClass('case__first')) {
			$(".case__dialog .offer").text("Продажа семян и саженцев через корзину сайта"); 
			$('.res-par1').text("Ниша: ");
			$('.res-par1-2').text("семена и саженцы в розницу"); 
			$('.res-par2').text("1222986 р."); 
			$('.res-par3').text("32532200 р. "); 
			$('.res-par4').text("Организовать продажи в весенний сезон 2017 г."); 
			$('.res-par5').text("Настройка Яндекс.Директ по ключевым словам"); 
			$('.res-par6').text("5,56 р."); 
			$('.res-par7').text("3,45 р."); 
			$('.res-par8').text("22,69%"); 
			$('.res-par9').text("12,6%"); 
			$('.res-par10').text("4,28 мин."); 
			$('.res11').removeClass('displayNone'); 
			$('.res-par11').text("3,3%");
			$('.res-par12').text("600 р."); 
			$('.res-par13').text("5422 заказа с Яндекс.Директа"); 
	
			$('.firstGallery').removeClass('displayNone');
		}  else if ($(event.target).hasClass('case__second')) {
			$(".case__dialog .offer").text("Продажа бензокос Shtenli MS"); 
			$('.res-par1').text("Сайт: "); 
			$('.res-par1-2').text("benzokosi.by"); 
			$('.res-par2').text("63120 р."); 
			$('.res-par3').text("1127520 р. "); 
			$('.res-par4').text("Организовать продажи в летний сезон 2017 г."); 
			$('.res-par5').text("Настройка Яндекс.Директ и Яндекс.Метрики"); 
			$('.res-par6').text("9,11 р."); 
			$('.res-par7').text("2,84 р."); 
			$('.res-par8').text("17,7%"); 
			$('.res-par9').text("12,8%"); 
			$('.res-par10').text("0,48 мин."); 
			$('.res11').removeClass('displayNone'); 
			$('.res-par11').text("1,5%");
			$('.res-par12').text("8 500 р."); 
			$('.res-par13').text("173 заказа с Яндекс.Директа"); 
			$('.secondGallery').removeClass('displayNone');
		}  
		$(".overlay__case").addClass("visible");
		$('.person-modal').addClass('block');
		$(".dialog .offer").text("Оставьте свои контактные данные"); 
		$('.person-modal').text("И получите бесплатную консультацию о том, как повысить конверсию на Вашем сайте"); 
		if (wWidth < 768) {
			var scrollPosition = $(window).scrollTop() * -1,
				topCoord = $(document).scrollTop();
			$('.overlay__case').data('scrollPosition',scrollPosition);
			$('.wrapper__case').css('top', topCoord);
			
	 		
	 	}
	 	$(".overlay__case").addClass("visible");
	});


	$(".popup").on('click', function(event){
		$('.dialog').removeClass('displayNone');
		$('.thankyou').addClass('displayNone');
		if ($(event.target).hasClass('person__button')) {
			$('.person-modal').addClass('block');
			$('.name').attr('type', 'text');
			$('.name-des').removeClass('displayNone');
			$('.email').attr('type', 'hidden');
			$('.email-des').addClass('displayNone');
			$(".dialog .offer").text("Получите консультацию специалиста Insite Studio"); 
			if ($(event.target).hasClass('ivan')) {
				$('.person-modal').text("Укажите Ваши данные, и Иван свяжется с Вами в ближайшее время"); 
			} else if ($(event.target).hasClass('max')) {
				$('.person-modal').text("Укажите Ваши данные, и Максим свяжется с Вами в ближайшее время"); 
			} else if ($(event.target).hasClass('kir')) {
				$('.person-modal').text("Укажите Ваши данные, и Артур свяжется с Вами в ближайшее время"); 
			}
		} else if ($(event.target).hasClass('cost')) {
			$(".dialog .offer").text("Заполните форму, чтобы расчитать стоимость"); 
			$('.person-modal').removeClass('block');
		} else if ($(event.target).hasClass('call__button')) {
			$(".dialog .offer").text("Заказать обратный звонок"); 
			$(".overlay").addClass("call_overlay");
			$('.email').attr('type', 'hidden');
			$('.email-des').addClass('displayNone');
			$('.person-modal').addClass('block');
			$('.person-modal').text("Заполните форму, и мы свяжемся с Вами в ближайшее время и ответим на все интересующие Вас вопросы"); 
		}	
		if (wWidth < 768) {
			var scrollPosition = $(window).scrollTop() * -1,
				topCoord = $(document).scrollTop();
			$('.overlay').data('scrollPosition',scrollPosition);
			$('.wrapper').css('top', topCoord);
	 		
 		}
 		$(".overlay").addClass("visible");
	});
	
	
	$(window).on('focusin', 'input', function(event) {
		$('input').focus();
	});

	$('.open__example').on('click', function(event) {
		var target = $(event.target);
		
		if (!target.is('.open__example')) {
			target = target.parents('.open__example');
			console.log( target);
		}
		
		$('.examples').height(dHeight);
		$('.examples img').removeAttr('src');
		$('.examples img').attr('src', target.attr('data-src'));
		if (wWidth > 480) {	
			$('.example-wrapper').css('top', $(document).scrollTop()  + 20);
			if (target.hasClass('xpom'))
			{
				$('.examples').height(dHeight*1.85);
			} 
		} else {
			$('.example-wrapper').css('top', $(document).scrollTop());
			if (target.hasClass('xpom'))
			{
				$('.examples').height(dHeight*1.14);
			} 
		}
		$('.examples').addClass('visible');
	});

	$(".close").on('click', function(){
		if($('.overlay__case').hasClass('visible')) {
			$("body").find(".overlay__case").removeClass("visible");
			
			$('.firstGallery').addClass('displayNone');
			$('.secondGallery').addClass('displayNone');
			$('.thirdGallery').addClass('displayNone');
		} else {
			$("body").find(".overlay").removeClass("visible");
			$('.name').attr('type', 'hidden');
			$('.name-des').addClass('displayNone');
		}
		$('.examples').removeClass('visible');
		$('.email').attr('type', 'email');
		$('.email-des').removeClass('displayNone');

		$('.overlay').removeClass('call__overlay');
	});

	$('.overlay').on('click', function(e) {
		var clicked = $(e.target);
		if (clicked.is('.dialog, .thankyou') || clicked.parents().is('.dialog, .thankyou')) {
			return; 
		} else { 
			$('.overlay').removeClass('visible');
			$('.overlay').removeClass('call__overlay');
			$('.name').attr('type', 'hidden');
			$('.name-des').addClass('displayNone');
			$('.email').attr('type', 'email');
			$('.email-des').removeClass('displayNone');

		}
	});
	$('.overlay__case').on('click', function(e) {
		var clicked = $(e.target);
		if (clicked.is('.case__dialog, .dialog, .thankyou') || clicked.parents().is('.case__dialog, .dialog, .thankyou')) {
			return; 
		} else { 
			$('.overlay__case').removeClass('visible');

			$('.firstGallery').addClass('displayNone');
			$('.secondGallery').addClass('displayNone');
			$('.thirdGallery').addClass('displayNone');
		}
	});
	
	$('.examples').on('click', function(e) {
		var clicked = $(e.target);
		if (clicked.is('.examples img')) {
			return; 
		} else {
			$('.examples').removeClass('visible');
		}
	});
	

	$("#first__callback, #second__callback, #third__callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			window.history.pushState("Thank you!", "insite | studio", "/thanks");
			$('.thankyou').removeClass('displayNone');
			$('.dialog').addClass('displayNone');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	


	$('.button__case').on('click', function() {

		var offsetFourthScreen = wWidth*0.025, 
			speedScroll = 650;
		   
		if (wWidth < 480)
		{
		   	offsetFourthScreen =  wWidth*0.075;
		   	speedScroll = 1000;
		}
			
		var scrollPoint = $('.screen__fourth').offset().top + offsetFourthScreen;
		$('body,html').animate({ scrollTop: scrollPoint }, speedScroll);

		return false;
	});

	

var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            zoomEl: true,
            tapToClose: false,

            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
			showAnimationDuration: 0,
			hideAnimationDuration: 0,
            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }
		
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.gallery');

});


