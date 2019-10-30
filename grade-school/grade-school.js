//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.private = new WeakMap();
    this.private.set(this, {
      students: {}
    });
  }

  roster() {
    const students = JSON.parse(JSON.stringify(this.private.get(this).students));
    return students;
  }

  add(name, grade) {
    let students = this.private.get(this).students;
    if(students[grade]) {
      students[grade].push(name);
    } else {
      students[grade] = [name];
    }

    students[grade].sort() 
  }

  grade(index) {
    let students = JSON.parse(JSON.stringify(this.private.get(this).students));
    if (!students[index]) {
      return []
    } else {
      return students[index].sort();
    }
  }
}