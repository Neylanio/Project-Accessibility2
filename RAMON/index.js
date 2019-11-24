function search(uf) {

  var saida = "";
  var button = "";

  var bands = [];



  $.getJSON("../databases/"+uf+".json", function(data) {

      localStorage.setItem("UF", uf);

      bands = data;  

      saida += '<table class="table table-striped">';
      saida += '<thead>';
      saida += '<tr>';
      saida += '<th>CNES</th>';
      saida += '<th>NOME</th>';
      saida += '<th>LOGRADOURO</th>';
      saida += '<th>ENDEREÇO</th>';
      saida += '<th>BAIRRO</th>';
      saida += '<th>TELEFONE</th>';
      saida += '<th>CEP</th>';
      saida += '<th>UF</th>';
      saida += '<th>CIDADE</th>';
      saida += '</tr>';
      saida += '</thead>';

      saida += '<tbody>';
    // for (let i = 0; i < bands.length; i++) {
    for (let i = 0; i < 20; i++) {
        saida += '<tr>';
        saida += '<td title='+ bands[i].properties[1].co_cnes +'>'+ bands[i].properties[1].co_cnes +'</td>';
        saida += '<td title='+ bands[i].properties[4].no_fantasia +'>'+  bands[i].properties[4].no_fantasia +'</td>';
        saida += '<td title='+ bands[i].properties[5].no_logradouro +'>'+ bands[i].properties[5].no_logradouro +'</td>';
        saida += '<td title='+ bands[i].properties[6].nu_endereco +'>'+ bands[i].properties[6].nu_endereco +'</td>';
        saida += '<td title='+ bands[i].properties[7].no_bairro +'>'+ bands[i].properties[7].no_bairro +'</td>';
        saida += '<td title='+ bands[i].properties[8].nu_telefone +'>'+ bands[i].properties[8].nu_telefone +'</td>';
        saida += '<td title='+ bands[i].properties[9].co_cep +'>'+ bands[i].properties[9].co_cep +'</td>';
        saida += '<td title='+ bands[i].properties[10].uf +'>'+ bands[i].properties[10].uf +'</td>';
        saida += '<td title='+ bands[i].properties[11].cidade +'>'+ bands[i].properties[11].cidade +'</td>';
        saida += '</td>';
        saida += '</tr>';
      }
      saida += '</tbody>';
      saida += '</table>';

      saida += '<br>';

      saida += '<button id="vertodos" class="btn btn-primary" title="botao para ver todas as UBS desse estado" onclick="searchAll()">Ver Todos</button>';

      document.getElementById('tela').innerHTML = saida;

  });


}

function searchAll() {

  var uf = localStorage.getItem("UF");

  var saida = "";

  var bands = [];

  $.getJSON("../databases/"+uf+".json", function(data) {
      bands = data;  

      saida += '<table class="table table-striped">';
      saida += '<thead>';
      saida += '<tr>';
      saida += '<th>CNES</th>';
      saida += '<th>NOME</th>';
      saida += '<th>LOGRADOURO</th>';
      saida += '<th>ENDEREÇO</th>';
      saida += '<th>BAIRRO</th>';
      saida += '<th>TELEFONE</th>';
      saida += '<th>CEP</th>';
      saida += '<th>UF</th>';
      saida += '<th>CIDADE</th>';
      saida += '</tr>';
      saida += '</thead>';

      saida += '<tbody>';
    for (let i = 0; i < bands.length; i++) {
        saida += '<tr>';
        saida += '<td>'+ bands[i].properties[1].co_cnes +'</td>';
        saida += '<td>'+ bands[i].properties[4].no_fantasia +'</td>';
        saida += '<td>'+ bands[i].properties[5].no_logradouro +'</td>';
        saida += '<td>'+ bands[i].properties[6].nu_endereco +'</td>';
        saida += '<td>'+ bands[i].properties[7].no_bairro +'</td>';
        saida += '<td>'+ bands[i].properties[8].nu_telefone +'</td>';
        saida += '<td>'+ bands[i].properties[9].co_cep +'</td>';
        saida += '<td>'+ bands[i].properties[10].uf +'</td>';
        saida += '<td>'+ bands[i].properties[11].cidade +'</td>';
        saida += '</td>';
        saida += '</tr>';
      }
      saida += '</tbody>';
      saida += '</table>';
      
      document.getElementById('tela').innerHTML = saida;
  });


}