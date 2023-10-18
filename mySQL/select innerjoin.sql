select chamado.idchamado, chamado.descricao, funcionario.idFuncionario, funcionario.nome
from chamado
inner join funcionario on chamado.fk_funcionario = idFuncionario
