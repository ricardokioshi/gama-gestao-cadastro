function cadcli() {
  const form = document.getElementById('frmcliente')

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let tel = document.getElementById('tel').value;
    let cep = document.getElementById('cep').value;
    let end = document.getElementById('end').value;
    let bairro = document.getElementById('bairro').value;
    let mun = document.getElementById('mun').value;
    let uf = document.getElementById('uf').value;
    let data = {
      nome,
      cpf,
      tel,
      cep,
      end,
      bairro,
      mun,
      uf
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('cliente', convertData)

    let content = document.getElementById('frmcliente')

    let carregando = "<img src='assets/ajax-loader.gif' /> "

    let pronto = `<p>Cadastro efetuada! Obrigado! </p>`

    content.innerHTML = carregando

    setTimeout(() => {
      content.innerHTML = pronto
    }, 2000)

  })
}


function cadprod() {
  const form = document.getElementById('frmproduto')

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let cod = document.getElementById('cod').value;
    let desc = document.getElementById('desc').value;
    let qtd = document.getElementById('qtd').value;

    
    let data = {
      cod,
      desc,
      qtd
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('produto', convertData)

    let content = document.getElementById('frmproduto')

    let carregando = "<img src='assets/ajax-loader.gif' /> "

    let pronto = `<p>Produto Cadastrado! </p>`

    content.innerHTML = carregando

    setTimeout(() => {
      content.innerHTML = pronto
    }, 2000)

  })
}


