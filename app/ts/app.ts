import {NegociacaoController} from "./controllers/NegociacaoController";
var controller = new NegociacaoController();

$(".form").submit(controller.adiciona.bind(controller));
/*document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));*/
$("#btnImportar").click(controller.importaDados.bind(controller))