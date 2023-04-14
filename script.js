const students = [
  {
    name: 'Yuri',
    firstGrade: 8,
    secondGrade: 7
  },
  {  
    name: 'Luan',
    firstGrade: 6,
    secondGrade: 7
  },
  {
    name: 'Thiago',
    firstGrade: 5,
    secondGrade: 5
  },
  {  
    name: 'Bruna',
    firstGrade: 10,
    secondGrade: 4
  }
]

let average

const calcAvarage = (firstGrade, secondGrade) => {
  return averageGrade = (firstGrade + secondGrade) / 2
}

for (let student of students) {
  let studentGrade = calcAvarage(student.firstGrade, student.secondGrade)

  if (studentGrade > 6) {
    alert(`
    A media do aluno(a) ${student.name} é: ${studentGrade} \n
    ALUNO ${student.name} APROVADO(A), PARABENS
    `)
  } else {
    alert(`
    A media do aluno(a) ${student.name} é: ${studentGrade} \n
    ALUNO ${student.name} REPROVADO(A)!
    `)
  }
}