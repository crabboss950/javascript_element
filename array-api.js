// Q1. make a string out of an array
// 각각의 배열을 하나의 배열로 조합해라
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  // 과일을 각각의 배열로 구분해라 
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // 주어진 순서를 거꾸로 만드는 것
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  // 새로운 배열을 만들되 1, 2를 삭제하고 넣어라
  // 삭제 
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);
    console.log(result);
    console.log(array);
  }

  // Q4-1. 
  // 새로운 배열을 만들되 1, 2를 삭제하고 넣어라
  // 삭제 
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
  }
  
// --------------------------------------------------------

  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // {
  //   const result = students.find(function(student, index){
  //     console.log(student, index);
  //   });
  // }
  
  // {
  //   const result = students.find(function(student, index){
  //     return student.score === 90;
  //     console.log(result);
  //   });
  // }

  {
      const result = students.find((student)=> student.score === 90);
      console.log(result);
  }

  // Q6. make an array of enrolled students
  {
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
  }
  
  // Q9. compute students' average score
  {
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
  }