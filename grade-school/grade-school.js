//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

  constructor() {
    this.students = {};
  }

  roster() {
    return this.students;
  }

  add(name, grade) {
    if(this.students[grade]) {
      this.students[grade].push(name);
    } else {
      this.students[grade] = [name];
    }

    this.students[grade].sort()
  }

  grade(index) {
    if (!this.students[index]) {
      return []
    }

    else {
      return this.students[index].sort();
    }
  }
}


