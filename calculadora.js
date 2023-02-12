document.addEventListener("DOMContentLoaded", function() {
    const expression = document.getElementById("expression");
    const result = document.getElementById("result");
    const btns = document.querySelectorAll("button");
  
    btns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        let val = btn.innerHTML;
        if (val === "Clear") {
          expression.value = "";
          result.value = "";
        } else if (val === "=") {
          try {
            let evalResult = eval(expression.value);
            result.value = evalResult;
          } catch (e) {
            result.value = "Error";
          }
        } else {
          expression.value += val;
        }
      });
    });
  });
  