/**
 * Created by Jasvinder Singh on 24th Febraury 2021
 * Description - Locators for plan your next trip
 */

"use strict";
let Delta_Page = function() {

    //Navigation bar
    this.Logo=element(by.className("siteLogo"));
    this.Book=element(by.id("headPrimary1"));
    this.Check_in=element(by.id("headPrimary2"));
    this.My_trips=element(by.id("headPrimary3"));
    this.Flight_status=element(by.id("headPrimary4"));
    this.Travel_info=element(by.id("headSectab1"));
    this.Sky_miles=element(by.id("headSectab2"));
    this.Need_help=element(by.id("headSectab3"));
    this.Sign_up=element(by.cssContainingText('a','Sign Up'));
    this.Login_in=element(by.cssContainingText('button','Login in'));
    this.Notification_bar=element(by.className("feed-counter-text"));
    this.Search=element(by.css("img[alt='Search']"));

    //Journey Details
    this.Bom=element(by.id("fromAirportName"));
    this.To=element(by.id("toAirportName"));
    this.Round_trip=element(by.cssContainingText('span','Round Trip'));
    this.Depart_return=element(by.id("input_departureDate_1"));
    this.Passenger=element(by.id("passengers-val"));
    this.Submit=element(by.id("btn-book-submit"));

    //Various options
    this.Search_option=element(by.cssContainingText('div','SEARCH OPTIONS'));
    this.Shop=element(by.id("shopWithMiles"));
    this.Refundable_fares=element(by.cssContainingText('label','Refundable Fares'));
    this.My_dates=element(by.cssContainingText('label','My dates are flexible'));
    this.Advanced_search=element(by.cssContainingText('a','Advanced Search'));

    //Header and sub-headers links
    this.Card_title_Link=element(by.className("card-title brand-head-home"));
    this.Card_text_Link=element(by.className("card-text brand-subhead-home"));

    //Travel journey various options
    this.Explore_button=element(by.cssContainingText('a','EXPLORE HOW'));
    this.Shop_hotel=element(by.cssContainingText('a','Shop Hotels'));
    this.Rent_car=element(by.cssContainingText('span','Rent a Car'));
    this.Updated_bag=element(by.cssContainingText('a','Updated Bag & Travel Fees'));

    //Header and sub-headers
    this.Heading=element(by.cssContainingText('div','THE DELTA CUSTOMER EXPERIENCE'));
    this.Sub_Heading=element(by.cssContainingText('div','Supporting You Through Your Travel Journey'));

    //Various buttons to perform actions
    this.Cancel_button=element(by.css("span[alt='CAN I CANCEL/CHANGE MY FLIGHT?']"));
    this.Change_button=element(by.css("span[alt='HOW DO I CHANGE MY FLIGHT AND FIND MY ECREDITS?']"));
    this.Updates_button=element(by.css("span[alt='WHAT ARE THE LATEST TRAVEL UPDATES?']"));
    this.Safety_button=element(by.css("span[alt='COMMITTED TO YOUR SAFETY']"));
    this.Clean_button=element(by.css("span[alt='CLEAN TRAVEL EXPERIENCE']"));
    this.Download_button=element(by.css("span[alt='DOWNLOAD THE FLY DELTA APP']"));
    this.Book_button=element(by.css("span[alt='BOOK WITH CONFIDENCE']"));
    this.Search_more=element(by.className("search-text"));
    this.Popular_topic_button=element(by.cssContainingText('h3','Popular Topics:'));
    this.Need_help_button=element(by.className("popular-list-1"));
    this.Coronavirus_button=element(by.className("popular-list-2"));
    this.eCredits_button=element(by.className("popular-list-3"));

    //Footer buttons
    this.About_delta=element(by.id("footertitle-about-delta"));
    this.Customer_service=element(by.id("footertitle-customer-service"));
    this.Site_support=element(by.id("footertitle-site-support"));
    this.Poloices=element(by.id("footertitle-policies"));
    this.About_us=element(by.cssContainingText('a','About Us'));

    //Feedback link
    this.Website_feedback=element(by.cssContainingText('a','Website Feedback'));

    //Language and location select link
    this.Asia_pacific=element(by.className("lang-selection"));

    //Social media links
    this.Facebook=element(by.id("footer-facebook"));
    this.Twitter=element(by.id("footer-twitter"));
    
    
    
    
    
    
    
    
    
    
    
    

    

    
    
    
    

    
            
    

        
    
    
    
    



    
   
    


    
    
    
    


    

    

   



};
//exporting the variables
module.exports = new Delta_Page();