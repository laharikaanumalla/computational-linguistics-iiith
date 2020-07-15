
function doinit(){
	document.getElementById("sentencebuttons").innerHTML=""
	document.getElementById("heading1").style.display="none";
	document.getElementById("formedsentence").innerHTML="";
	document.getElementById("reformbutton").style.display="none";
	document.getElementById("checkbutton").style.display="none";
	document.getElementById("wronganwer").style.display="none";
	document.getElementById("rightanswer").style.display="none";
	document.getElementById("correctansdis").innerHTML="";
	var selectedsentence ="";
	var givensentencewords;
	var randomwords;
	var generatedsentence;
	document.getElementById("select").innerHTML = "";
	document.getElementById("subselect").innerHTML ="";
}

function myFunction(){
  var x = document.getElementById("mySelect").value;
  document.getElementById("formedsentence").innerHTML="";
  selectedsentence="";
  if(x=='English'){
  document.getElementById("select").innerHTML = "Form a sentence(declarative or interrogative or any other type )from the given words";
   document.getElementById("subselect").innerHTML = "(select the buttons in proper order)";
	
	var rannum = Math.floor(Math.random() * 10); 
	randomcentencegeneration(engsentences,rannum);
  }
  else if(x=='Hindi'){
	  document.getElementById("select").innerHTML = "Form a sentence(declarative or interrogative or any other type )from the given words";
	  document.getElementById("subselect").innerHTML = "(select the buttons in proper order)";
	  var rannum = Math.floor(Math.random() * 7); 
	  randomcentencegeneration(hindisentence,rannum);
  }else{
	  doinit();
  }
}

var selectedsentence ="";
var givensentencewords;
var randomwords;
var generatedsentence;
function randomcentencegeneration(sentences,randomnumber){ 
document.getElementById("sentencebuttons").innerHTML="";
	var buttoncode;
	for(var key in sentences){
		if(key === randomnumber.toString() ){
		var data=[];
		generatedsentence=sentences[key];
		if(sentences[key].includes(",")){
		data = sentences[key].split(",");
		var signledata = data[0];
		}else{
		signledata = sentences[key];
		}
		var buttondata = signledata.split(" ");
		buttondata=shuffle(buttondata);
		givensentencewords=buttondata;
		randomwords=buttondata;
		for(var i = 0; i< buttondata.length; i++){
		document.getElementById("sentencebuttons").innerHTML+="<button class='buttonclick' id="+"buttonid"+i+" type ='button' value="+buttondata[i]+">"+buttondata[i]+"</button> &nbsp;";
		}
		}
	
}
}
$(document).on('click', '.buttonclick', function () {
	var removingwords;
	document.getElementById("heading1").style.display="block";
	document.getElementById("reformbutton").style.display="block";
	 selectedsentence=selectedsentence.concat(document.getElementById($(this).attr("id")).innerHTML+" ");
	 removingwords=givensentencewords;
	 givensentencewords=[];
	 for(var i = 0; i< removingwords.length; i++){
		 if(removingwords[i]!==document.getElementById($(this).attr("id")).innerHTML){
		 givensentencewords.push(removingwords[i]);
		 }
	 }
	 document.getElementById("sentencebuttons").innerHTML="";
	 for(var i = 0; i< givensentencewords.length; i++){
		document.getElementById("sentencebuttons").innerHTML+="<button class='buttonclick' id="+"buttonid"+i+" type ='button' value="+givensentencewords[i]+">"+givensentencewords[i]+"</button> &nbsp;";
		}
		if(givensentencewords.length==0){
				document.getElementById("sentencebuttons").innerHTML+="</br>";
				document.getElementById("checkbutton").style.display="block";
		}
	 document.getElementById("formedsentence").innerHTML="<p>"+selectedsentence+"</p>";
});


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function reformthecentnce(){
	selectedsentence="";
	var buttondata=randomwords;
	givensentencewords=randomwords;
	document.getElementById("heading1").style.display="none";
	document.getElementById("formedsentence").innerHTML="";
	document.getElementById("reformbutton").style.display="none";
	document.getElementById("checkbutton").style.display="none";
	document.getElementById("wronganwer").style.display="none";
	document.getElementById("rightanswer").style.display="none";
	document.getElementById("sentencebuttons").innerHTML="";
	document.getElementById("correctansdis").innerHTML="";
		for(var i = 0; i< buttondata.length; i++){
		document.getElementById("sentencebuttons").innerHTML+="<button class='buttonclick' id="+"buttonid"+i+" type ='button' value="+buttondata[i]+">"+buttondata[i]+"</button> &nbsp;";
		}
		 
		
}

function correctanswercheck(){
	var correctanswerflag = false;
	 selectedsentence=selectedsentence.trim();
	 var corsent;
		if(generatedsentence.includes(",")){
		corsent = generatedsentence.split(",");
		}else{
		corsent = generatedsentence;
		}
		for(var i=0;i<corsent.length;i++){
			if(selectedsentence === corsent[i]){
				correctanswerflag=true;
			}
		}
		if(correctanswerflag){
			document.getElementById("rightanswer").style.display="block";
			document.getElementById("wronganwer").style.display="none";
		}else{
			document.getElementById("wronganwer").style.display="block";
			document.getElementById("rightanswer").style.display="none";
		}
		
}

function getcorrectsentence(){
	 var corsent;
		if(generatedsentence.includes(",")){
		corsent = generatedsentence.split(",");
		}else{
		corsent = generatedsentence;
		}
		 document.getElementById("correctansdis").innerHTML="";
		for(var i=0;i<corsent.length;i++){
				 document.getElementById("correctansdis").innerHTML+="<p>"+corsent[i]+"</p>";
		}
}

var engsentences = {"1" : "John ate an apple before afternoon.,before afternoon John ate an apple ,John before afternoon ate an apple",
				"2": "some students like to study in the night,at night some students like to study",
				"3": "John and Mary went to church,Mary and John went to church",
				"4": "John went to church after eating,after eating John went to church ,John after eating went to church",
				"5": "did he go to market,he did go to market",
				"6": "the woman who called my sister sells cosmetics,the woman who sells cosmetics called my sister,my sister who sells cosmetics called the woman,my sister who called the woman sells cosmetics",
				"7": "John goes to the library and studies,John studies and goes to the library",
				"8": "John ate an apple so did she,she ate an apple so did John",
				"9": "the teacher returned the book after she noticed the error,the teacher noticed the error after she returned the book,after the teacher returned the book she noticed the error,after the teacher noticed the error she returned the book,she returned the book after the teacher noticed the error,she noticed the error after the teacher returned the book,after she returned the book the teacher noticed the error,after she noticed the error the teacher returned the book",
				"10": "I told her that I bought a book yesterday,I told her yesterday that I bought a book,yesterday I told her that I bought a book,I bought a book that I told her yesterday,I bought a book yesterday that I told her,yesterday I bought a book that I told her" }






var hindisentence={"1": "राम और श्याम बाजार गयें,राम और श्याम गयें बाजार,बाजार गयें राम और श्याम,गयें बाजार राम और श्याम",
				   "2": "राम सोया और श्याम भी,श्याम सोया और राम भी,सोया श्याम और राम भी,सोया राम और श्याम भी",
				   "3": "मैंने उसे बताया कि राम सो रहा है,मैंने उसे बताया कि सो रहा है राम,उसे मैंने बताया कि राम सो रहा है,उसे मैंने बताया कि सो रहा है राम,मैंने बताया उसे कि राम सो रहा है,मैंने बताया उसे कि सो रहा है राम,उसे बताया मैंने कि राम सो रहा है,उसे बताया मैंने कि सो रहा है राम,बताया मैंने उसे कि राम सो रहा है,बताया मैंने उसे कि सो रहा है राम,बताया उसे मैंने कि राम सो रहा है,बताया उसे मैंने कि सो रहा है राम",
				   "4":"राम खाकर सोया,खाकर राम सोया,राम सोया खाकर,खाकर सोया राम,सोया राम खाकर,सोया खाकर राम",
				   "5":"बिल्लियों को मारकर कुत्ता सो गया,मारकर बिल्लियों को कुत्ता सो गया,बिल्लियों को मारकर सो गया कुत्ता,मारकर बिल्लियों को सो गया कुत्ता,कुत्ता सो गया बिल्लियों को मारकर,कुत्ता सो गया मारकर बिल्लियों को,सो गया कुत्ता बिल्लियों को मारकर,सो गया कुत्ता मारकर बिल्लियों को",
				   "6":"एक लाल किताब वहाँ है,एक लाल किताब है वहाँ,वहाँ है एक लाल किताब,है वहाँ एक लाल किताब",
				   "7": "एक बड़ी सी किताब वहाँ है,बड़ी सी एक किताब वहाँ है,बड़ी सी एक किताब है वहाँ,वहाँ है एक बड़ी सी किताब,वहाँ है बड़ी सी एक किताब,है वहाँ एक बड़ी सी किताब,है वहाँ बड़ी सी एक किताब"}





