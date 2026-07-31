document.getElementById("conteudo").innerHTML= "<p>Olá, DOM!(innerHTML)</p>";

document.getElementById("mensagem").textContent = "texto simples, sem dom. (textContent)";

document.getElementById("foto").setAttribute("src", "https://tudosobrecachorros.com.br/wp-content/uploads/Bulldog-Frances-02-400x400.jpg");

let url = document.getElementById("link").getAttribute("href");
console.log(url); //https://www.booking.com/index.pt-br.html?aid=2311236;label=pt-br-booking-desktop-9_uvqir24qvA6x6xGiDvCQS652796015463:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-65526620:lp9074225:li:dec:dm;ws=&gad_source=1&gad_campaignid=19655507274&gbraid=0AAAAAD_Ls1JrQgCDq8ETiNhUJwI_7tEHG&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC48vsl2iMtasM9dxIg3uQObrxN5F0qfHljCDbj6m8NF6Yl_SZTDLZhoCQ50QAvD_BwE&chal_t=1772043692863&force_referer=https%3A%2F%2Fwww.google.com%2F

document.getElementById("caixa").style.backgroundColor = "beige";

document.getElementById("alerta").classList.add("destaque");

document.getElementById("alert").classList.remove("oculto");

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "esse elemento foi criado com JavaScript.";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem=document.createElement("li");
novoItem.textContent = "item novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);