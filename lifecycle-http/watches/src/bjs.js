class Student {
  constructor(name) {
    this.name = name;
    this.disciplines = [];
  }
  addGrade(grade, discipline) {
    let i = 0;
    for (const item of this.disciplines) {
      if (item.subject === discipline) {
        item.grades.push(grade);
        return
      } else {
        i = i + 1;
        console.log(i);
      }
    }
      this.disciplines.push({subject: discipline, grades: [] })
      this.disciplines[i].subject = discipline;
      this.disciplines[i].grades.push(grade);
  }
}
const student = new Student('Олег Никифоров');
student.addGrade(3, "algebra");
student.addGrade(5, "algebra");
student.addGrade(5, "history");
student.addGrade(5, "history");
console.log(student.disciplines);