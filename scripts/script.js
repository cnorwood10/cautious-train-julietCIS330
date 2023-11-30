$(function(){
    $('#console-box').append('<br/>console is ready...');
    
    $('button').click(function(){
      $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
  ; 
    });
    
  });
  
  
  function refreshPage() {
    document.getElementById("major").value = "";
    document.getElementById("studentMajor").textContent = "";
    document.getElementById("minor").value = "";
    document.getElementById("studentMinor").textContent = "";
    document.getElementById("concentration").value = "";
    document.getElementById("studentConcentration").textContent = "";
  
  }

  document.getElementById('resetForm').addEventListener("click", refreshPage);
  
  
    function submitForm() {
    const majorInput = document.getElementById("major");
    const major = majorInput.value;
    const minorInput = document.getElementById("minor");
    const minor = minorInput.value;
    const concInput = document.getElementById("concentration");
    const concentration = concInput.value;

      document.getElementById("studentMajor").textContent = `Your major is ${major}.`;
      majorInput.setCustomValidity("");

      if (document.getElementById('minor').value != ""){
        document.getElementById("studentMinor").textContent = `Your minor is ${minor}.`;
      }

      if (document.getElementById('concentration').value != ""){
        document.getElementById("studentConcentration").textContent = `Your concentration is ${concentration}.`;
      }
  }

  document.getElementById("formSubmit").addEventListener("click", submitForm);
//   element.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }