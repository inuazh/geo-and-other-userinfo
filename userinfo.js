class userinfo{
    constructor(){
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60;

    };

    pageOn(){
        /**
         * file location
         * 
         */
        return window, location.pathname;
    };

    referrer(){
        // returns url of the page, linked tjis page

        return document.referrer
    };

    previousSites(){
        //number of elements in this session

        return history.length;
    };

    
}