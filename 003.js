console.log(10	+	10	+	"10");
// pervie dve 10-i slojils' = 20, pri sleduyuschem slojenii s "10" 
// proizoshla konkatenaciya strok i chislo 20 bylo preobrazovano v stroku "20".
console.log(10	+ "10" + 10);
// tak kak est' opdin strochniy element, chislo 10 bylo konkatenirovano so strokoy "10"
// poluchennaya v rezultate stroka "1010" byl konkatenirovana s chislom 10 v stroku "101010"
console.log(10	+	10	+  +"10");
// operator + pered "10" konvertiruet stroku v chislo.
console.log(10/-"");
// Vydaet minus beskonechnost'. operaciya deleniya podrazumevaet chislovye znacheniya, sootvetstvenno, 
// stroki perevodyatsya v chisla. a stroka "" formatiruetsya kak chislo 0
console.log(10/+"2,5");
//Vydaet NaN, tak kak "2,5" ne konvertiruetsya v chislo, v otlichie ot "2.5".


