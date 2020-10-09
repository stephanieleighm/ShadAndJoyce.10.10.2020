

// Carousel

$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});


// Carousel end



var guestList = [];


var table1 = ["Kiera Mangusan", "Rio Isidro", "Millie Cabjuan", "Julian Cabjuan", "Jonard Penaflorida"];
var table2 = ["James Abance", "Enera Begya", "Jimmy Begya", "Vangie Elcanir", "Lalyn Sobremento"];
var table3 = ["Reynan Inso", "Debegail Inso", "Broklyn Inso", "Jane Abance"]; //4
var table4 = ["Daverick Begya", "Hanna Abance", "Hansam Abance", "Shanry Roberts", "Gurioni Asbucan"];
var table5 = ["Hilario Isidro", "Emily Isidro", "Josefino Eclevia", "Cristina Eclevia", "Juvelyn Mangusan"];
var table6 = ["Richard Caranto", "Valeree Batalier", "Daryl Inso", "Julie Ann Inso", "Noel Madulid"];
var table7 = ["Ruben Refuerzo", "Rose Marie Refuerzo", "Rycklan Refuerzo", "Gayle Refuerzo"]; //4
var table8 = ["Abigail Crisostomo", "Gennica Marie Genove", "Jimsy Wales Clarence Genove", "Shulamite Lazaga Maches", "Lucky Salvador Crisostomo II"];
var table9 = ["Jerome Patingan", "Ronalie Sigang", "Edna Manalo", "Carmela Cayat"]; //4
var table10 = ["Rolly Tipayno", "Rosel Barbero", "Rudy Cruz", "Ruel Sumala"]; //4
var table11 = ["Jonathan Mandapat", "Bong Bangaoet", "Aischa Bangaoet", "Marlon de Vera", "Mae de Vera"];
var table12 = ["Roselie Guanso", "Ckena Salinas", "Winnie Wong", "Samuel Raymond Perez", "Margie Foronda"];
var table13 = ["Jomar Ame", "Samuel Roxas", "Ezekiel Cardenas", "Mcgyver Mendoza", "Gerald Paatan"];
var table14 = ["Lanz Fider", "Gabby Fider", "Ella Fider", "Nathan Bandonil"]; //4
var table15 = ["Leo Deano", "Ellen Deano", "John Daniel Deano", "Axl Deano", "Rachel Soriano"];
var table16 = ["Beverly Burcao", "Brent Burcao", "Michael Illingan", "Lovely Illingan", "Jimmy Sementara"];
var table17 = ["Steve Paatan", "Lily Ann Paatan", "Armand Dumpit", "Joyce Dumpit", "Vangie Mandapat"];
var table18 = ["Sam Paatan", "Yaphel Paatan", "Glairu Paatan", "Kate Paatan"]; //4
var table19 = ["Raymond Pua", "Rocky de la Rosa", "Paul Schlaaff", "Melvin Purugganan", "Moises Gorospe"];
var table20 = ["Kristine Marie Peralta", "Vin Zapanta", "Ann-Myra Zapanta", "Marck Dumpit", "Jeric Palispis"];
var table21 = ["Stephanie Paatan", "Bea Paatan", "Erika Monique Ang", "Felix Liquete"]; //4
var table22 = ["Ferdinand Pascual", "Jherson Pascual", "Mary Joy Tumbaga", "Roldan Penano", "Dam Penano"];




document.getElementById("submitBtn").addEventListener("click", submit);

function concatenatingGuestList() {
  guestList = table1.concat(table2, table3, table4, table5, table6, table7, table8, table9, table10, table11, table12, table13, table14, table15, table16, table17, table18, table19, table20, table21, table22);
}

function submit() {
  concatenatingGuestList();
  guestList = guestList.map(function(x){ return x.toUpperCase(); })
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var name = firstName + " " + lastName;
  name = name.toUpperCase();
  var tableAssignment = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22];
  guestIndex = guestList.indexOf(name);
  tableNumber = tableAssignment[guestIndex];
  if (tableNumber == null) {
    alert("Please check the cards below for your table number.");
  }
  else {
    alert("Your table number is " + tableNumber);
}

}





//for names per table
var text = "";
var i;
for (i = 0; i < table1.length; i++) {
  text += table1[i] + "<br>";
}
document.getElementById("tablecard1").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table2.length; i++) {
  text += table2[i] + "<br>";
}
document.getElementById("tablecard2").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table3.length; i++) {
  text += table3[i] + "<br>";
}
document.getElementById("tablecard3").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table4.length; i++) {
  text += table4[i] + "<br>";
}
document.getElementById("tablecard4").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table5.length; i++) {
  text += table5[i] + "<br>";
}
document.getElementById("tablecard5").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table6.length; i++) {
  text += table6[i] + "<br>";
}
document.getElementById("tablecard6").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table7.length; i++) {
  text += table7[i] + "<br>";
}
document.getElementById("tablecard7").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table8.length; i++) {
  text += table8[i] + "<br>";
}
document.getElementById("tablecard8").innerHTML = text;
//for names per table end


//for names per table
var text = "";
var i;
for (i = 0; i < table9.length; i++) {
  text += table9[i] + "<br>";
}
document.getElementById("tablecard9").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table10.length; i++) {
  text += table10[i] + "<br>";
}
document.getElementById("tablecard10").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table11.length; i++) {
  text += table11[i] + "<br>";
}
document.getElementById("tablecard11").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table12.length; i++) {
  text += table12[i] + "<br>";
}
document.getElementById("tablecard12").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table13.length; i++) {
  text += table13[i] + "<br>";
}
document.getElementById("tablecard13").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table14.length; i++) {
  text += table14[i] + "<br>";
}
document.getElementById("tablecard14").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table15.length; i++) {
  text += table15[i] + "<br>";
}
document.getElementById("tablecard15").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table16.length; i++) {
  text += table16[i] + "<br>";
}
document.getElementById("tablecard16").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table17.length; i++) {
  text += table17[i] + "<br>";
}
document.getElementById("tablecard17").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table18.length; i++) {
  text += table18[i] + "<br>";
}
document.getElementById("tablecard18").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table19.length; i++) {
  text += table19[i] + "<br>";
}
document.getElementById("tablecard19").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table20.length; i++) {
  text += table20[i] + "<br>";
}
document.getElementById("tablecard20").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table21.length; i++) {
  text += table21[i] + "<br>";
}
document.getElementById("tablecard21").innerHTML = text;
//for names per table end

//for names per table
var text = "";
var i;
for (i = 0; i < table22.length; i++) {
  text += table22[i] + "<br>";
}
document.getElementById("tablecard22").innerHTML = text;
//for names per table end
