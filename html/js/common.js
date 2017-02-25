$(function() {

    'use strict';

    //-------------------------------
    //Поиск
    //-------------------------------
    var $headerSearchForm = $('.header__search-form'),
        $headerSearchButton = $('.header__search-button');

    $headerSearchButton.click(function(e) {
        e.stopPropagation();
        $(this).fadeOut(600);
        $headerSearchForm.fadeIn(600);
    });

    //-------------------------------
    //Контакты
    //-------------------------------
    var $headerContactsBtn = $('.header__contacts-btn'),
        $headerContactsInner = $('.header__contacts-inner')
    $headerContactsBtn.on('click', function(e) {
        e.stopPropagation();
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active').find('i').removeClass('icon-up-open').addClass('icon-down-open');
            $headerContactsInner.slideUp(200);
        } else {
            $this.addClass('active').find('i').removeClass('icon-down-open').addClass('icon-up-open');
            $headerContactsInner.slideDown(200);
        }
    });

    //-------------------------------
    //Мобильное меню
    //-------------------------------
    var $headerNavBtn = $('.header__bottom-nav-btn'),
        $headerNavList = $('.header__bottom-nav-list ul')
    $headerNavBtn.on('click', function(e) {
        e.stopPropagation();
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active').find('.icon-up-open').removeClass('icon-up-open').addClass('icon-down-open');
            $headerNavList.slideUp(200);
        } else {
            $this.addClass('active').find('.icon-down-open').removeClass('icon-down-open').addClass('icon-up-open');
            $headerNavList.slideDown(200);
        }
    });

    //-------------------------------
    //Мобильное меню категорий на внутренней странице
    //-------------------------------
    var $headsectSortBtn = $('.headsect__sort-btn'),
        $headsectSortList = $('.headsect__sort-list ul')
    $headsectSortBtn.on('click', function(e) {
        e.stopPropagation();
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active').find('.icon-up-open').removeClass('icon-up-open').addClass('icon-down-open');
            $headsectSortList.slideUp(200);
        } else {
            $this.addClass('active').find('.icon-down-open').removeClass('icon-down-open').addClass('icon-up-open');
            $headsectSortList.slideDown(200);
        }
    });

    //-------------------------------
    //Выключение скрытых интерактивных элементов по ресайзу
    //-------------------------------

    $(window).resize(function() {
        var w = $(window).width();
        //Выключение скрытого меню по ресайзу
        if (w > 768 && $headerNavList.is(':hidden')) {
            $headerNavList.removeAttr('style');
        }
        //Выключение скрытого меню категорий на внутренней странице
        if (w > 768 && $headsectSortList.is(':hidden')) {
            $headsectSortList.removeAttr('style');
        }
    });

    //-------------------------------
    //Выключение интерактивных элементов по клику на документ
    //-------------------------------
    $(document).on('click', function(e) {
        e.stopPropagation();
        var w = $(window).width();
        if (!$(e.target).closest($headerSearchForm).length) {
            $headerSearchForm.fadeOut(200);
            $headerSearchButton.fadeIn(200);
        }
        if (!$(e.target).closest($headerContactsInner).length) {
            $headerContactsBtn.removeClass('active').find('i').removeClass('icon-up-open').addClass('icon-down-open');
            $headerContactsInner.slideUp(200);
        }
        if (!$(e.target).closest($headerNavList).length) {
            if (w < 769) {
                $headerNavBtn.removeClass('active').find('.icon-up-open').removeClass('icon-up-open').addClass('icon-down-open');
                $headerNavList.slideUp(200);
            }
        }
        if (!$(e.target).closest($headsectSortList).length) {
            if (w < 769) {
                $headsectSortBtn.removeClass('active').find('.icon-up-open').removeClass('icon-up-open').addClass('icon-down-open');
                $headsectSortList.slideUp(200);
            }
        }

    });

    //------------------------------------------------------------
    //stick menu
    //------------------------------------------------------------
    var $stick = $('.stick'),
        $stickInner = $('.stick__inner');
    if ($stick.length) {
        var startPos = $stick.offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= startPos) {
                if ($stick.hasClass('stick_active') == false) {
                    var navHeight = $stick.height();
                    $stick.css({
                        'min-height': navHeight + 'px'
                    }).addClass('stick_active');
                }
            } else {
                $stick.removeClass('stick_active').removeAttr('style');
            }
        });
    }





    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------

    $('.advantages__preview-title').equalHeight();
    $('.advantages__preview-text').equalHeight();
    $('.philosophy__item-title').equalHeight();
    $('.philosophy__item-text').equalHeight();
    $('.equipment__item-title').equalHeight();
    $('.stage__item-title').equalHeight();
    $('.entrance-list__title').equalHeight();
    $('.entrance-list__price').equalHeight();


    //------------------------------------
    //popup
    //------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    //---------------------------------------------
    //Видеопопап
    //---------------------------------------------
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //-------------------------------------------------------------
    //Parallax
    //-------------------------------------------------------------
    var $philosophy = $('.philosophy');
    if ($philosophy.length) {
        $(window).scroll(function() {
            var st = $(this).scrollTop(),
                philosophyOffsetTop = $philosophy.offset().top;
            if (st > philosophyOffsetTop - $(window).height() && st < (philosophyOffsetTop) + $philosophy.height()) {
                var stPhilosophy = st - philosophyOffsetTop;
                $philosophy.css({
                    'background': '#444651 url(img/bg-philosophy-text.png) 50% ' + stPhilosophy * (-0.5) + 'px / auto auto repeat'
                });
            }
        });
    }

    //------------------------------------------------
    // Плавный скролл
    //------------------------------------------------


    $('.scroll').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) + 1000), 'linear');
    });

    //---------------------------------
    //Адаптивный слайдер
    //---------------------------------
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: '',
        smartSpeed: 800,
        autoHeight: true,
        loop: true
    });

    //-----------------------------------------------------------------
    //Табы
    //-----------------------------------------------------------------
    var $entranceItemComplectButtons = $('.entrance-item__complect-buttons'),
        $entranceItemComplectItem = $(".entrance-item__complect-item"),
        $entranceItemComplectBox = $('.entrance-item__complect-box');

    $entranceItemComplectButtons.find('a:first').addClass('active');
    $entranceItemComplectItem.not(":first").hide();

    $entranceItemComplectButtons.on('click', 'a:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $entranceItemComplectBox.find($entranceItemComplectItem).hide().eq($(this).index()).fadeIn();
    });


    //-------------------------------
    //sections появление кнопок
    //-------------------------------

    var $sectionsItem = $('.sections__item');

    $sectionsItem.hover(
        function() {
            $(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
        }
    );
    $sectionsItem.mouseover(function() {
        $(this).addClass('active');
    });

    //--------------------------------------------------------------------
    //Яндекс карта
    //--------------------------------------------------------------------

    var $map = $('#map');
    if ($map.length) {
        var myMap;
        ymaps.ready(function() {
            myMap = new ymaps.Map('map', {
                    center: [53.937804, 27.479628],
                    zoom: 12,
                    controls: ['zoomControl'],
                    behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
                }, {
                    searchControlProvider: 'yandex#search'
                }),
            myMap.geoObjects.add(new ymaps.Placemark([53.929882, 27.579317], {
                iconContent: 'Фирменный салон, ул. Сурганова 61'
            },{
                preset: "islands#blueStretchyIcon"
            })).add(new ymaps.Placemark([53.936352, 27.447089], {
                iconContent: 'Салон, ТЦ "GRAD", пав. 222'
            }, {
                preset: "islands#blueStretchyIcon"
            })).add(new ymaps.Placemark([53.935869, 27.580431], {
                iconContent: 'Салон, ТЦ "Viessmann", пав. 201'
            }, {
               preset: "islands#blueStretchyIcon"
            }));
            function disableDrag() {
                var w = $(window).width();
                if (w < 768) {
                    myMap.behaviors.disable('drag');
                } else {
                    myMap.behaviors.enable('drag');
                }
            }
            disableDrag();
            $(window).resize(function() {
                disableDrag();
            });
        });
    }


    //------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

});
