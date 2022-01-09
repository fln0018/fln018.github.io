var userAgent = navigator.userAgent.toLowerCase();
    var platform;
    if(userAgent == null || userAgent == ''){
        platform = 'WEB' ; 
    }else{
        if(userAgent.indexOf("android") != -1 ){ 
            platform = 'ANDROID';
            location.href = "/m";
        }else if(userAgent.indexOf("ios") != -1 || userAgent.indexOf("iphone") != -1 || userAgent.indexOf("ipad") != -1){ 
            platform = 'IOS';
            location.href = "/m";
        }else if(userAgent.indexOf("windows phone") != -1 ){ 
            platform = 'WP';
            location.href = "/m";
        }else{
            platform = 'WEB' ;
            location.href = "https://tva3.sinaimg.cn/large/458ec1fagy1gqp7xmhi24j20hs0tsacj.jpg";
        }
    }