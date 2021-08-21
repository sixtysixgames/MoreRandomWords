/*
Copyright (C) 2021 sixtysixgames

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* 
    Created on : 
    Author     : sixtysixgames
*/

    //
    var aVowStart = new Array(
    "a", "ai", "au", "e", "ee", "ei", "eu", "i", "o", "oa", "oi", "ou", "u", "y"
);

    // vowels in middle:
    var aVowels = new Array(
    "e", "a", "o", "i", "u", "y", "ea", "io", "ou", "ie", "ee", "ai", "ia", "oo", "ei", "eo",  "au", "oa", "ui", "eu", "oi", "oe", "eau"
);

    //
    var aVowEnd = new Array(
    "a", "ai", "au", "e", "eau", "ee", "i", "ia", "ie", "o", "oa", "ou", "u", "ue", "y"
);

    // consonant combinations allowed at start of words:
    var aConsStart =  new Array("b", "bl", "br", "c", "ch","chl", "chr", "cl", "cr", "d", "dr", "dw", "f", "fl", "fr", "g", "gh", "gl", "gr", "h", "j", "k", "kn", "l", "m", "n", "p", "ph", "phr", "pl", "pr", "ps", "qu", "r", "rh", "s", "sc", "sch", "scr", "sh", "shr", "sk", "sl", "sm", "sn", "sp", "sph", "spl", "spr", "squ", "st", "str", "sw", "t", "th", "thr", "thw", "tr", "tw", "v", "w", "wh", "wr", "z"
);

    // combinations of letters allowed at the end of words:
    var aConsEnd =  new Array("b", "bb", "bt", "c", "ch", "ck", "ct", "d", "dd", "f", "ff", "ft", "g", "gg", "gh", "ght", "gn", "l", "ld", "lf", "lk", "ll", "lm", "lp", "lph", "lt", "lth", "m", "mb", "mm", "mn", "mp", "n", "nch", "nd", "ng", "nk", "nn", "nt", "nth", "p", "ph", "pp", "pt", "r", "rb", "rch", "rd", "rf", "rk", "rl", "rm", "rn", "rp", "rr", "rst", "rt", "rth", "s", "sh", "sk", "sm", "sp", "ss", "st", "t", "tch", "th", "tt", "w", "wd", "wl", "wn", "x", "xt", "zz"
);

    var aPrefixes = new Array("a", "ab", "abs", "ad", "ambi", "amphi", "an", "ana", "ante", "anti", "apo", "auto", "bi", "cata", "circum", "co", "con", "contra", "com", "de", "deci", "demi", "di", "dia", "dis", "dys", "e", "ec", "ecto", "en", "endo", "epi", "ex", "extra", "fore", "hetero", "homeo", "homo", "hyper", "hypo", "il", "im", "in", "infra", "inter", "ir", "iso", "macro", "maxi", "mega", "meso", "meta", "micro", "mid", "mini", "mis", "mono", "multi", "neo", "non", "ob", "omni", "out", "over", "pan", "pant", "para", "per", "peri", "post", "pre", "pro", "proto", "pseudo", "re", "se", "sed", "self", "semi", "sub", "super", "supra", "syn", "tele", "teleo", "trans", "tra", "tri", "ultra", "un", "uni");

    var aSuffixes = new Array("able", "age", "al", "ance", "ancy", "ant", "arium", "ary", "ate", "ation", "dom", "ed", "ee", "en", "ence", "ency", "ent", "er", "es", "ese", "ess", "est", "ful", "hood", "ia", "ian", "ic", "ical", "ible", "ier", "iest", "ify", "ile", "ine", "ing", "ion", "ious", "ish", "ism", "ist", "ite", "itis", "ity", "ium", "ive", "ize", "less", "like", "ly", "ment", "ness", "oid", "ology", "oma", "ophile", "ophobia", "or", "ory", "ous", "ship", "sion", "sis", "tion", "um", "ure", "wards", "wise", "y");

    var sMidConsonants = "bcdfglmnprst";
    var sConsonants = "bcdfghjklmnprstvwxz";
    var sYEConsonants = "bcdfgklmnprstvxz";
    var sVowels = "aeiouy";
    var sAlphabet = "abcdefghijklmnopqrstuvwxyz";

    function getConsonants( num ){
        // return combination of consonants
        var ret = "";

        for(var i=0;i<=num;i++){
            ret += sConsonants.charAt(rand(sConsonants.length-1));
            if(ret.charAt(ret.length-1) == "q") return ret+"u";
        }

        return ret;
    }
    function getMidConsonants( num ){
        // return combination of consonants
        var ret = "";

        for(var i=0;i<=num;i++){
            ret += sMidConsonants.charAt(rand(sMidConsonants.length-1));
            if(ret.charAt(ret.length-1) == "q") return ret+"u";
        }

        return ret;
    }

    function isVowel(l){
        if (sVowels.indexOf(l) > -1) return true;
        else return false;
    }

    function validVows(str){
        var ret;
        ret = aVowels[rand(aVowels.length-1)];
        l1 = str.charAt(str.length-1);
        l2 = str.charAt(str.length-2);
        while (
        (l2 == "q" && (ret.charAt(0) == "u" || ret.charAt(0) == "y")) ||
            (l1 == "y" && ret.charAt(0) == "y") ||
            (l1 == "j" && ret.charAt(0) == "y")
    )
        {
            ret = aVowels[rand(aVowels.length-1)];
        }

        return ret;
    }

    function validCons(str, aCons){
        var ret;
        ret = aCons[rand(aCons.length-1)];

        l = str.charAt(str.length-1);
        while (
        (ret.charAt(0) == "k" && !isVowel(str.length-2)) ||
            ((ret.charAt(0) == "h" || ret.charAt(0) == "w" || ret.charAt(0) == "y") && (l=="i" || l=="y")) ||
            (l == "y" && ret.charAt(0) == "y") ||
            (l == "i" && ret.charAt(0) == "j") ||
            (l == "u" && ret.charAt(0) == "w") ||
            (l == "u" && ret.charAt(0) == "j") ||
            (l == "u" && ret.charAt(0) == "q") ||
            (l == "y" && ret.charAt(0) == "x")
    )
        {
            ret = aCons[rand(aCons.length-1)];
        }

        return ret;
    }

    var notK = "clnrs"; // letters that can precede a k

    function getWord(s, px, sx){
        var str = "";

        if(px == 2){px = rand(1);}
        if(sx == 2){sx = rand(1);}

        if(px == true){
            str += aPrefixes[rand(aPrefixes.length-1)]
        }
        str += aConsStart[rand(aConsStart.length-1)];
        str += validVows(str);
        for(i = 1; i < s;i++){
            str += getMidConsonants(1);
            //str += aConsStart[rand(aConsStart.length-1)];
            str += validVows(str);
        }

        //end of syllable
        str += validCons(str, aConsEnd);
        if(sx == true){
            str += aSuffixes[rand(aSuffixes.length-1)]
        }

        return str;
    }

    function getWords(){

        var str ="<table width='90%' align='center' border='1' cellspacing=0><tr>";

        for (var td=0;td<5;td++){
            str += "<td width='20%'>";
            for(var i=0;i<10;i++){

                str += getWord(1, rand(1), rand(1));
                str += "<br>";
            }

            str += "</td>";
        }

        str += "</tr></table>";

        return str;
    }


