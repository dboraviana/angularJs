angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope){
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome:"Adalzira Ribeiro", telefone: "982974447",data:new Date()},
        {nome:"Debora Viana", telefone: "991032835",data:new Date()},
        {nome:"Francisco Barbosa", telefone: "991117613",data:new Date()}
        // {nome:"Jonathan Bagio", telefone: "991117613"},
        // {nome:"Jussara Maximo", telefone: "991117613"},
        // {nome:"David Viana", telefone: "991117613"},
    ];
    $scope.operadoras=[
        
        {nome:"Oi", codigo:1},
        {nome:"Vivo", codigo:2},
        {nome:"Tim", codigo:3},
        {nome:"Claro", codigo:4}
    ]



    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

    $scope.limparCampos = function(contato){
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    }

    $scope.removerContato = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
            if (!contato.selecionado) return contato;       
        });
    };
    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    
        $scope.isSelecionado = function () {
            if ($scope.selecionarTodos) {
                $scope.selecionarTodos = true;
            } else {
                $scope.selecionarTodos = false;
            }
            angular.forEach($scope.contatos, function (contato) {
                contato.selecionado = $scope.selecionarTodos;
            });

    };

    

        

    }
})