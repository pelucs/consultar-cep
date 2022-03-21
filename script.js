let cep = document.querySelector("#cep"),
          logradouro = document.querySelector("#logradouro"),
          bairro = document.querySelector("#bairro"),
          localidade = document.querySelector("#localidade"),
          uf = document.querySelector("#uf");

cep.addEventListener("blur", () => {
  let format = cep.value.replace("-", ""),
      options = {
        metodh: "GET",
        mode: "cors",
        cache: "default"
      }
  
  fetch(`https://viacep.com.br/ws/${format}/json/`, options)
  .then(response => {
    response.json()
    .then(res => {
      logradouro.value = res.logradouro;
      bairro.value = res.bairro;
      localidade.value = res.localidade;
      uf.value = res.uf
    })
  })
  .catch(error => {
    console.log(error)
  })
});