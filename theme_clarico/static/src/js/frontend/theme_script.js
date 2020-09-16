odoo.define('theme_emipro.theme_script', function(require) {
    'use strict';
 
    var sAnimations = require('website.content.snippets.animation');
    var Widget = require('web.Widget');
    var core = require('web.core');
    var _t = core._t;
    var _lt = core._lt;
    var ProductConfiguratorMixin = require('sale.ProductConfiguratorMixin');  
    var ajax = require('web.ajax');
    var config = require('web.config');
    var timer 

     if ($(window).width() > 767)
     {
    sAnimations.registry.themeMenu = sAnimations.Class.extend({
        selector: '#top_menu',
        read_events: {
            'mouseenter .cat-column': '_onMouseColEnter',
            'mouseleave .cat-column': '_onMouseColLeave',
        },
        _onMouseColEnter: function(ev) {
            var self = ev.currentTarget;
            /*$(self).addClass('opacity-full');*/
            var button_cat = $(self).find('a#btn_categary');
            button_cat.addClass('menu-cate-hover');
            /*$('.cat-column').addClass('opacity');*/
        },
        _onMouseColLeave: function(ev) {
            var self = ev.currentTarget;
            var button_cat = $(self).find('a#btn_categary');
            button_cat.removeClass('menu-cate-hover');
           /* $('.cat-column').removeClass('opacity');*/
           /* $(self).removeClass('opacity-full');*/
        },
    });
}
    // Vertical menu toggle	
    $(window).load(function(){
		$('.te_bar_icon').click(function(){
			$(".te_vertical_menu").toggleClass("te_open");
			if($('.menu_vertical_option').length){
				$("#wrapwrap").addClass("te_menu_overlay");
			}
		});
		$('.te_menu_icon_close').click(function(){
			$(".te_vertical_menu").removeClass("te_open");
			$("#wrapwrap").removeClass("te_menu_overlay");
		});
		// Vertical menu position

		var $h_menu = $("#oe_main_menu_navbar").height();
		$(".te_vertical_menu").css({top:$h_menu + 0, bottom: 0, right: 0, position:'fixed'});
	});

    sAnimations.registry.themeSearch = sAnimations.Class.extend({
        selector: '#wrapwrap',
        read_events: {
            'click .te_srch_icon': '_onSearchClickOpen',
            'click .te_srch_close': '_onSearchClickClose',
        },
        _onSearchClickOpen: function(ev) {
            var self = ev.currentTarget;
            //style1
            if ($(".te_header_1_right").length) {
                $(".te_search_popover").addClass("visible");
                $(self).css("display", "none");
                $(".te_srch_close").css("display", "block");
            }
            //style 2 3 and 4 resp view
            if ($(window).width() < 768) {
                if ($(".te_header_style_2_right").length || $(".te_header_3_search").length || $(".te_header_style_4_inner_first").length) {
                    $(".te_search_popover").addClass("visible");
                    $(self).css("display", "none");
                    $(".te_srch_close").css("display", "block");
                }
            }
            //style5
            if ($(".te_header_5_search").length) {
                $(".te_search_5_form").addClass("open_search");
                var $h_menu = $("#oe_main_menu_navbar").height();
                $(".te_search_5_form").css({
                    top: $h_menu + 0
                });
            }
            //style6
            if ($(".te_header_6_srch_icon").length) {  	
            	$(".te_header_before_right").addClass("search_animate");
    			if ($(window).width() < 768) {
    				$(".te_header_before_left").addClass("search_animate");
    			}
    			$(".te_header_search input").css("width","100%");
    			setTimeout(function(){
    				if ($(window).width() > 768) {
    					$(".te_header_before_right").css("display","none");
    				}else{
    					$(".te_header_before_right").css("display","none");
    					$(".te_header_before_left").css("display","none");
    				}
    				$(".te_header_search").css("display","block");
    			}, 500);
            }
            //style7
            if ($(".te_searchform__popup").length) {
                $(".te_searchform__popup").addClass("open");
                $(".te_srch_close").css("display", "block");
            }
        },
        _onSearchClickClose: function(ev) {
            var self = ev.currentTarget;
            //style1
            if ($(".te_header_1_right").length) {
                $(".te_search_popover").removeClass("visible");
                $(self).css("display", "none");
                $(".te_srch_icon").css("display", "block");
            }
            //style 2 and 3 resp view
            if ($(window).width() < 768) {
                if ($(".te_header_style_2_right").length || $(".te_header_3_search").length || $(".te_header_style_4_inner_first").length) {
                    $(".te_search_popover").removeClass("visible");
                    $(self).css("display", "none");
                    $(".te_srch_icon").css("display", "block");
                }
            }
            //style5
            if ($(".te_header_5_search").length) {
                $(".te_search_5_form").removeClass("open_search");
                $(".te_search_icon_5").css("display", "inline-block");
            }
            //style6
            if ($(".te_header_6_srch_icon").length) {
                $(".te_header_before_right").removeClass("search_animate").css("display", "block");
                $(".te_header_before_left").removeClass("search_animate").css("display", "block");
                $(".te_header_search").css("display", "none");
                $(".te_header_search input").css("width", "0%");
                $(".te_srch_icon").css("display", "inline-block")
            }
            //style7
            if ($(".te_searchform__popup").length) {
                $(".te_searchform__popup").removeClass("open");
                $(".te_srch_icon").css("display", "block");
            }
        },
    });

    sAnimations.registry.themeLayout = sAnimations.Class.extend({
        selector: '.o_footer',
        read_events: {
            'click .scrollup-div': '_onClickAnimate',
        },
        _onClickAnimate: function(ev) {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        },
    });

    function ajaxorformload(ev) {
        var ajax_load = $(".ajax_loading").val();
        if (ajax_load == 'True') {
            ajaxform(ev);
        } else {
            $("form.js_attributes input,form.js_attributes select").closest("form").submit();
        }
    }


    $(window).load(function() {
        //Top menu hover dropdown
        if ($(window).innerWidth() > 1200) {
            $("#top_menu > .dropdown").each(function() {
                if (!$(this).closest(".o_extra_menu_items").length) {
                    $(this).closest("a").click(function() {
                        return false;
                    });
                    $(this).hover(
                        function() {
                            $('> .dropdown-menu', this).stop(true, true).fadeIn("slow");
                            $(this).toggleClass('open');
                        },
                        function() {
                            $('> .dropdown-menu', this).stop(true, true).fadeOut("fast");
                            $(this).toggleClass('open');
                        }
                    );
                }
            })
        }
        //shop icon responsive
        else
        {
			$(".product_price").addClass("bottom_animation");
		}
        //extra menu dropdown
        $('.o_extra_menu_items .dropdown-menu').css("display", "none")
        $('li.o_extra_menu_items .dropdown').click(function(event) {
            event.stopImmediatePropagation();
            $(this).find(".dropdown-menu").slideToggle();
        });
        //Header top when transparent header
        var header_before_height = $(".te_header_before_overlay").outerHeight();
        if ($("body").find(".o_header_overlay").length > 0) {
            $("header:not(.o_header_affix)").addClass("transparent_top")
            $(".transparent_top").css("top", header_before_height);
            $(".o_header_affix.affix").removeClass("transparent_top")
        }
        //Category mega menu
        $("#custom_menu li").each(function() {
            var has_ctg = $(this).find("ul.t_custom_subctg").length > 0
            if (has_ctg) {
                $(this).append("<span class='ctg_arrow fa fa-angle-right' />")
                $(".ctg_arrow").click(function(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    var self = $(this).siblings("ul.t_custom_subctg");
                    var ul_index = $(self).parents("ul").length;
                    $(self).stop().animate({
                        width: "100%"
                    });
                    $(self).css({
                        "display": "block",
                        "transition": "0.3s easeout",
                        "z-index": ul_index
                    })
                    $(self).parent().parent(".t_custom_subctg").css("overflow-y", "hidden");
                    $(self).parent().parent(".t_custom_subctg").scrollTop(0);
                    $(this).parents("#custom_menu").scrollTop(0);
                    $(this).parents("#custom_menu").css("overflow-y", "hidden");
                })
                $(this).find("ul.t_custom_subctg").children(".te_prent_ctg_heading").click(function(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    $(this).parent("ul#custom_recursive").stop().animate({
                        width: "0"
                    }, function() {
                        $(this).css("display", "none")
                        $(this).parent().parent(".t_custom_subctg").css("overflow-y", "auto");
                    });
                })
            }
        })
        $("#custom_menu > li > ul.t_custom_subctg > .te_prent_ctg_heading").click(function() {
            $(this).parents("#custom_menu").css("overflow-y", "auto");
        })
        //Changed search form action in theme's search when website search is installed
        if ($("body").find(".website_search_form_main").length > 0) {
            $(".te_header_search,.te_searchform__popup").each(function() {
                $(this).find("form").attr("action", "/search-result");
            })
            $(".website_search_form_main").html("");
        }
        //Recently viewed title
        if ($('#carousel_recently_view .carousel-inner .img_hover').length >= 1) {
            $('.te_product_recent_h2').css('display', 'block')
        }
        //expertise progress bar
        $('.progress').each(function() {
            var area_val = $(this).find('.progress-bar').attr("aria-valuenow")
            $(this).find('.progress-bar').css("max-width", area_val + "%")
        })
        //Remove images in extra menu
        $("li.o_extra_menu_items").find("img").removeAttr("src alt");

            //product script
    $('#te_product_tabs li a:not(:first)').addClass('inactive');
    $('.te_product_tab').hide();

    $('#te_product_tabs li').each(function() {
        if (!$(this).find("a").hasClass('inactive')) {
            var t = $(this).find("a").attr('id');
            $('.' + t + 'C').fadeIn('slow');
        }
    })
    $('#te_product_tabs li a').click(function() {
        var t = $(this).attr('id');
        if ($(this).hasClass('inactive')) {
            $('#te_product_tabs li a').addClass('inactive');
            $(this).removeClass('inactive');

            $('.te_product_tab').hide();
            $('.' + t + 'C').fadeIn('slow');
        }
    });
    if ($('#product_specifications').length) {
        $('.specification_li').addClass("active");
    }
    if ($('.o_shop_discussion_rating').length) {
        $('.rating_review_li').addClass("active");
    }
    // if slider then active first slide
    if ($('.recommended_product_slider_main').length) {
        $(".theme_carousel_common").each(function() {
            $(this).find(".carousel-item").first().addClass("active");
        })
    }
    // Change in carousel to display two slide
    $('.theme_carousel_common .carousel-item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    });
    // quantity design in cart lines when promotion app installed
    $(".te_cart_table .css_quantity > span").siblings("div").css("display", "none")
    // Portal script
    if ($('div').hasClass('o_portal_my_home')) {
        if (!$('a').hasClass('list-group-item')) {
            $(".page-header").css({
                'display': 'none'
            })
        }
    }
    })

    $(document).ready(function() {
        $('#carousel_recently_view .carousel-inner').find("div[data-active=True]").remove();
        if (window.innerWidth <= 992) {
            if ($('#carousel_recently_view .carousel-inner > div').length <= 4 && $('#carousel_recently_view .carousel-inner >div').length > 2) {
                $('#carousel_recently_view').addClass('carousel slide common_carousel_emp');
                $('#carousel_recently_view .carousel-inner > div').addClass('carousel-item');
                $("#carousel_recently_view .carousel-inner").after('<a class="carousel-control-prev" role="button" data-slide="prev" data-target="#carousel_recently_view"><i class="fa fa-chevron-left fa-lg text-muted" /></a><a class="carousel-control-next" role="button" data-slide="next" data-target="#carousel_recently_view"><i class="fa fa-chevron-right fa-lg text-muted" /></a>');
            }
        }
        $('.carousel[data-type="multi"]').each(function() {
            $('.carousel_recently_view').find('.carousel-item:first-child').addClass("active");
            if ($('#carousel_recently_view .carousel-inner .carousel-item').length <= 4) {
                $('#carousel_recently_view').attr('data-interval', '0');
                $('#carousel_recently_view .carousel-control-prev, #carousel_recently_view  .carousel-control-next').remove();
            } else {
                $('#carousel_recently_view').attr('data-interval', '10000');
            }
            $('#' + this.id).on('slide.bs.carousel', function(e) {
                var carousel_id = this.id;
                var $e = $(e.relatedTarget);
                var idx = $e.index();
                if (window.innerWidth <= 992) {
                    var itemsPerSlide = 2;
                } else {
                    var itemsPerSlide = 4;
                    console.log("------itemsPerSlide----", itemsPerSlide)
                }
                var totalItems = $('#' + carousel_id).find('.carousel-item').length;
                if (idx >= totalItems - (itemsPerSlide - 1)) {
                    var it = itemsPerSlide - (totalItems - idx);
                    for (var i = 0; i < it; i++) {
                        if (e.direction == "left") {
                            $(this).find('.carousel-item').eq(i).appendTo($(this).find('.carousel-inner'));
                        } else {
                            $(this).find('.carousel-item').eq(0).appendTo($(this).find('.carousel-inner'));
                        }
                    }
                }
            });
        });
    })

    $(document).ready(function(){
    
        var maxLength = 26;
        var ellipsestext = "...";
        var moretext = "More";
        var lesstext = "less";
        $(".more").each(function(){
            var myStr = $(this).text();
            if($.trim(myStr).length > maxLength){
                var newStr = myStr.substring(0, maxLength);
                var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
                var html = newStr + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + removedStr + '</span>&nbsp;&nbsp;<a href="" class="read-more">' + moretext + '</a></span>';
                $(this).html(html);
            }
        });
        $(".read-more").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
        });
    });
});
