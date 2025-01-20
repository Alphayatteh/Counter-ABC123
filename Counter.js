
"use strict";

(function (citytech) {
    citytech.screen = citytech.screen || {};
    const querySelectorAll = "#screen-display > div";

    
    
    function clear(){
        let nodeSelections = document.querySelectorAll(querySelectorAll);
        let divSelectionArray =[...nodeSelections];
        divSelectionArray.forEach((element) => {
            element.classList.remove("highlight");
        })
         
    
      
    }
     citytech.screen.highLight = function (mode){
    
        clear();

        let method = undefined;
        switch(mode){
            case "v":
                method = isVowel;
                break;

            case "c":
                method = isConsonant;
                break;

            case "a":
                method = isLetter;
                break;

                case "e":
                method = isEven;
                break;

                case "o":
                    method = isOdd;
                    break;

                    case "5":
                        method = isFive;
                        break;

            default:
                method = clear;
                break;
            
        }
    
        let nodeSelections = document.querySelectorAll(querySelectorAll);
        let divSelectionArray =[...nodeSelections];
    
        divSelectionArray.filter(e => method(e.innerHTML))
        .forEach((element) =>  element.classList.add("highlight"));
    
    }
    
    function isVowel(text){
        let pattern = /[AEIOUaeiou]/;
        let result = pattern.test(text);
        return result
    }
    function isLetter(text){
        let pattern = /[A-Za-z]/;
        let result = pattern.test(text);
        return result
    }

    function isEven(text){
        let pattern = /[02468]/;
        let result = pattern.test(text);
        return result
    }

    function isOdd(text){
        let pattern = /[13579]/;
        let result = pattern.test(text);
        return result
    }

    function isFive(text){
        let pattern = /[5]/;
        let result = pattern.test(text);
        return result
    }
    
    function isConsonant(text){
        return !isVowel(text) && isLetter(text);
    }
    
    

})(window.citytech = window.citytech || {});

