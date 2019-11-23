function search(uf) {
  
  var saida = "";

  var bands = [];
  
  $.getJSON("databases/full.json", function(data) {
      bands = data;

      // console.log(bands.features[0].properties);

      var array = [];

      for (let i = 0; i < bands.features.length; i++) {

        if(bands.features[i].properties[10].uf == uf){
          array.push(bands.features[i]);
          // console.log(bands.features[i]);
        }
        
      }
      // console.log(array.length);
      let json = JSON.stringify(array);
      // console.log(json);
      

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
      for (i = 0; i < array.length; i++) {
        saida += '<tr>';
        saida += '<td>'+ array[i].properties[1].co_cnes +'</td>';
        saida += '<td>'+ array[i].properties[4].no_fantasia +'</td>';
        saida += '<td>'+ array[i].properties[5].no_logradouro +'</td>';
        saida += '<td>'+ array[i].properties[6].nu_endereco +'</td>';
        saida += '<td>'+ array[i].properties[7].no_bairro +'</td>';
        saida += '<td>'+ array[i].properties[8].nu_telefone +'</td>';
        saida += '<td>'+ array[i].properties[9].co_cep +'</td>';
        saida += '<td>'+ array[i].properties[10].uf +'</td>';
        saida += '<td>'+ array[i].properties[11].cidade +'</td>';
        saida += '</td>';
        saida += '</tr>';
      }
      saida += '</tbody>';
      saida += '</table>';

      
      document.getElementById('tela').innerHTML = saida;
  });
}
