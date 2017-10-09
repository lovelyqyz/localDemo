   function showDirectPos($target,$dirElem,directFlag){

      var posL = $target.offset().left,posT = $target.offset().top;
      if(0 == posL){posL = 13;}
      $dirElem.css({'top' : posT +'px'});
      var $sentenceElem =  $dirElem.next('.sentenceWrap');
//debugger;
       if('topLeft' == directFlag || 'bottomLeft' == directFlag){
          $dirElem.css({'left':posL + "px"});
       }else{
         $dirElem.css({'right': "13px"});
       }
      if('topLeft' == directFlag  || 'topRight' == directFlag){  
           $sentenceElem.css({'left': "0", 'top' : (posT +parseInt($dirElem.height() + parseInt(20)) )+'px'});
      }else if('bottomLeft' == directFlag){
        $dirElem.css({'top' : posT - $dirElem.height() * 0.16 +'px'});
        $sentenceElem.css({'left':"0", 'top' : (posT - $sentenceElem.height())+'px'});
      }  
      $('body,html').animate({scrollTop:0},'0');
       return false;
   }