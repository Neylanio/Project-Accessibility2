// Code goes here
function loadBands() {
  // console.log('entrou')
  
  var saida = '';
  
  var bands = [];
  
  $.getJSON("teste.json", function(data) {
      bands = data.bands;

      console.log(bands.length);
      
      // for (i = 0; i < bands.length; i++) {
      //   saida += '<div class="row">';
      //   saida += '<div class="col-lg-4 band-img">';
      //   saida += '<img src="' + bands[i].picture + '" alt="' + bands[i].name + '" title="' + bands[i].name + '">';
      //   saida += '</div>';
      //   saida += '</div>';
      // }
      
      // document.getElementById('tela').innerHTML = saida;
  });
}
