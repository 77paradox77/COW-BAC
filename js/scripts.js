$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    var drinks = parseInt($("#drinks").val());
    console.log("age: " + age + " drinks: " + drinks);

    $("img").removeClass();

    if (age > 5.77 && drinks < 15) {
      $("img").addClass("light")
    }
    else if (age > 5.77 && drinks <= 35) {
      $("img").addClass("medium")
    }
    else if (age > 5.77 && drinks <=50) {
      $("img").addClass("heavy")
    }
    else if (drinks > 50) {
      $("img").addClass("dead")
    }
    else if (age < 5.77) {
      $("img").addClass("dead")
      alert("GET OUT OF HERE YOUNGSTER!")
    }
  });
});
