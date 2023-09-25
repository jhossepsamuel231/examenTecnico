const multiplicarMatrices = (m1, m2) => {
  var result = [];
  for (var i = 0; i < m1.length; i++) {
    result[i] = [];
    for (var j = 0; j < m2[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

document.getElementById("btnCalcular").addEventListener("click", function () {
  const m1c1f1 = parseInt(document.getElementById("m1-c1-f1").value);
  const m1c1f2 = parseInt(document.getElementById("m1-c1-f2").value);
  const m1c2f1 = parseInt(document.getElementById("m1-c2-f1").value);
  const m1c2f2 = parseInt(document.getElementById("m1-c2-f2").value);
  const m2c1f1 = parseInt(document.getElementById("m2-c1-f1").value);
  const m2c1f2 = parseInt(document.getElementById("m2-c1-f2").value);
  const m2c2f1 = parseInt(document.getElementById("m2-c2-f1").value);
  const m2c2f2 = parseInt(document.getElementById("m2-c2-f2").value);

  if (isNaN(m1c1f1) || isNaN(m1c1f2) || isNaN(m1c2f1) || isNaN(m1c2f2) || isNaN(m2c1f1) || isNaN(m2c1f2) || isNaN(m2c2f1) || isNaN(m2c2f2)) {
    document.getElementById("resultadoMultiplicacion").textContent = "Ingresa todos los campos con valores numéricos";
    return
  }

  document.getElementById("resultadoMultiplicacion").textContent = "";

  const matrizA = [
    [m1c1f1, m1c2f1],
    [m1c1f2, m1c2f2]
  ];

  const matrizB = [
    [m2c1f1, m2c2f1],
    [m2c1f2, m2c2f2]
  ];

  const resultado = multiplicarMatrices(matrizA, matrizB);
  console.log("Matriz a", matrizA, "Matriz b", matrizB);
  /* const resultadoJSON = JSON.stringify(resultado); 
  document.getElementById("resultadoMultiplicacion").textContent = resultadoJSON; */


  const resultadoMatrizContainer = document.getElementById("resultadoMatriz");

  resultadoMatrizContainer.innerHTML = "";

  const divOuter = document.createElement("div");
  divOuter.classList.add("matriz-r")

  const divInput = document.createElement("div");
  divInput.classList.add("inputs");

  for (let i = 0; i < resultado.length; i++) {

    const divOnly = document.createElement("div");

    for (let j = 0; j < resultado[i].length; j++) {
      const input = document.createElement("input");
      input.type = "number";
      input.value = resultado[i][j];

      
      divOnly.appendChild(input);
    }

    divInput.appendChild(divOnly);
    
  }

  divOuter.appendChild(divInput);

  resultadoMatrizContainer.appendChild(divOuter);

})




/*   const resultado = multiplicarMatrices(matrizA, matrizB);

  const resultadoMatrizContainer = document.querySelector(".resultado-matriz");

  resultadoMatrizContainer.innerHTML = "";

  for (let i = 0; i < resultado.length; i++) {
    for (let j = 0; j < resultado[i].length; j++) {
      const inputElement = document.createElement("input");
      inputElement.type = "text"; 
      inputElement.value = resultado[i][j];
      inputElement.style.width = "50px"; 
      inputElement.style.height = "50px";
      inputElement.style.display = "block";
      inputElement.style.margin = "10px 0px";
      resultadoMatrizContainer.appendChild(inputElement);
    }
  } */
