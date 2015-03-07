window.onload = function(){
    var data = {
        "menuTypes":[
            {
                id: "bookNow",
                idLink:"/makeabooking/index.jsp",
                menuItems:[
                    {
                        id:"bookYourShortBreak",
                        caption:"Book Your Short Break",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"schoolHolidayBreaks",
                        caption:"School Holiday Breaks",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"lateAvailability",
                        caption:"Late Availability",
                        pic:"",
                        link:"/makeabooking/late_availability/"
                    },
                    {
                        id:"seasonalBreaks",
                        caption:"Seasonal Breaks",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"breakTypes",
                        caption:"Break Types",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"termsAndConditions",
                        caption:"Terms and Conditions",
                        pic:"",
                        link:"/makeabooking/terms/index.jsp"
                    }
                ]
            },
            {
                id:"myBookings",
                idLink:"",
                menuItems:[
                    {
                        id:"bookActivities",
                        caption:"Book Activities",
                        pic:"",
                        link:""
                    },
                    {
                        id:"onlineCheckIn",
                        caption:"Online Check-in",
                        pic:"",
                        link:""
                    },
                    {
                        id:"payOutstandingBalance",
                        caption:"Pay Outstanding Balance",
                        pic:"",
                        link:""
                    },
                    {
                        id:"onArrival",
                        caption:"On Arrival",
                        pic:"",
                        link:""
                    },
                    {
                        id:"directions",
                        caption:"Directions",
                        pic:"",
                        link:""
                    },
                    {
                        id:"holidayTips",
                        caption:"Holiday Tips",
                        pic:"",
                        link:""
                    },
                    {
                        id:"medicalQuestionnaire",
                        caption:"Medical Questionnaire",
                        pic:"/images/cr_home_page/temp.png",
                        link:""
                    }
                ]
            },
            {
                id:"locations",
                menuItems:[
                    {
                        id:"whinfellForest",
                        caption:"Whinfell Forest",
                        pic:"",
                        link:"#",
                        listItems:[
                            {
                                id:"overview",
                                itemCaption:"Overview",
                                itemPic:""
                            },
                            {
                                id:"villageMap",
                                itemCaption:"Village Map",
                                itemPic:""
                            },
                            {
                                id:"directions",
                                itemCaption:"Directions",
                                itemPic:""
                            },
                            {
                                id:"photoGallery",
                                itemCaption:"Photo Gallery",
                                itemPic:""
                            }
                        ]
                    },
                    {
                        id:"sherwoodForest",
                        caption:"Sherwood Forest",
                        pic:"",
                        link:"#",
                        listItems:[
                            {
                                id:"overview",
                                itemCaption:"Overview",
                                itemPic:""
                            },
                            {
                                id:"villageMap",
                                itemCaption:"Village Map",
                                itemPic:""
                            },
                            {
                                id:"directions",
                                itemCaption:"Directions",
                                itemPic:""
                            },
                            {
                                id:"photoGallery",
                                itemCaption:"Photo Gallery",
                                itemPic:""
                            }
                        ]
                    },
                    {
                        id:"elvedenForest",
                        caption:"Elveden Forest",
                        pic:"",
                        link:"#",
                        listItems:[
                            {
                                id:"overview",
                                itemCaption:"Overview",
                                itemPic:""
                            },
                            {
                                id:"villageMap",
                                itemCaption:"Village Map",
                                itemPic:""
                            },
                            {
                                id:"directions",
                                itemCaption:"Directions",
                                itemPic:""
                            },
                            {
                                id:"photoGallery",
                                itemCaption:"Photo Gallery",
                                itemPic:""
                            }
                        ]
                    },
                    {
                        id:"woburnForest",
                        caption:"Woburn Forest",
                        pic:"",
                        link:"#",
                        listItems:[
                            {
                                id:"overview",
                                itemCaption:"Overview",
                                itemPic:""
                            },
                            {
                                id:"villageMap",
                                itemCaption:"Village Map",
                                itemPic:""
                            },
                            {
                                id:"directions",
                                itemCaption:"Directions",
                                itemPic:""
                            },
                            {
                                id:"photoGallery",
                                itemCaption:"Photo Gallery",
                                itemPic:""
                            }
                        ]
                    },
                    {
                        id:"longleatForest",
                        caption:"Longleat Forest",
                        pic:"",
                        link:"#",
                        listItems:[
                            {
                                id:"overview",
                                itemCaption:"Overview",
                                itemPic:""
                            },
                            {
                                id:"villageMap",
                                itemCaption:"Village Map",
                                itemPic:""
                            },
                            {
                                id:"directions",
                                itemCaption:"Directions",
                                itemPic:""
                            },
                            {
                                id:"photoGallery",
                                itemCaption:"Photo Gallery",
                                itemPic:""
                            }
                        ]
                    }
                ]
            },
            {
                id:"thingsToDo",
                idLink:"",
                menuItems:[
                    {
                        id:"activities",
                        caption:"Activities",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"restaurants",
                        caption:"Restaurants",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"shopping",
                        caption:"Shopping",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"whatsIncluded",
                        caption:"What’s Included",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"aquaSanaSpa",
                        caption:"Aqua Sana Spa",
                        pic:"",
                        link:"#"
                    }
                ]
            },
            {
                id:"accomodation",
                idLink:"",
                menuItems:[
                    {
                        id:"treehouse",
                        caption:"Treehouse",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"exclusives",
                        caption:"Exclusives",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"executives",
                        caption:"Executives",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"woodland",
                        caption:"Woodland",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"comforts",
                        caption:"Comforts",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"hotelAndApartment",
                        caption:"Hotel and apartment",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"spaSuites",
                        caption:"Spa Suites",
                        pic:"",
                        link:"#"
                    },
                    {
                        id:"adapted",
                        caption:"Adapted",
                        pic:"",
                        link:"#"
                    }
                ]
            },
            {
                id:"offers",
                idLink:"",
                menuItems:[
                    {
                        id:"",
                        caption:"",
                        pic:"",
                        link:"#"
                    }
                ]
            }
        ]
    };
};

$(function(){
    var $pullDownBlock = $(".b-dropdown-menu_item");
    $pullDownBlock.hide();

    $('.bxslider').bxSlider({
        video: true,
        startingSlide:1,
//        auto: true,
        adaptiveHeight: true,
        mode: 'fade'
    });

    $(".bx-prev").css("margin-left",$(".bx-pager-item:first-child").position().left - 40);

    var pagerLastElItem = function(){
        var $width = $("body").width();
        var $leftPosLastEl = $(".bx-pager-item:last").position().left;
        var $widthEl = $(".bx-pager-item").width();
        var marginRight = $width - $leftPosLastEl - $widthEl - 40;
        return marginRight;
    };

    $(".bx-next").css("margin-right",pagerLastElItem());

    $(".b-head-menu-item").on("click",function(){
        $pullDownBlock.show();
    });
});



