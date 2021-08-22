const escola = [{
    turma: 'Turma M1',
    alunos: [
        {
        aluno: 'Eduardo',
        nota: 8.9
        },
        {
        aluno: 'Rebeca',
        nota: 9.6
        }
    ]
},
{
    turma: 'Turma M2',
    alunos: [
        {
        nome: 'Leonardo',
        nota: 9.9
        },
        {
        nome: 'Jessica',
        nota: 9.5
        }
    ]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap2(getNotasDaTurma)