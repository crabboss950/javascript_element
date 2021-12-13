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
  // 90 점 이상이 넘는 학생을 찾아줘

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
  // true 인 학생들만 골라서 배열을 만든다
  {
    const result = students.filter((student)=>student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // 점수만 있는 새로운 배열
  {
    console.clear();
    const result = students.map((student)=>student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  // 50점 보다 낮은 학생이 있는지 확인해봐
  {
    const result = students.some((student)=> student.score<50);
    console.log(result);
    // 학생이 있다면

    const result2 = students.every((student)=> student.score<50);
    console.log(result2);
    // 모든 학생이
  }
  
  // Q9. compute students' average score
  // 점수 평균 구하기
  // {
  //   const result = students.reduce((prev, curr) => {
  //     cconsole.log('------------');
  //     cconsole.log(prev);
  //     cconsole.log(curr);
  //     return prev + curr.score;
  //   }, 0);
  //   console.log(result);
  // }

  console.clear();
  const result = students.reduce((prev,curr)=>{
      return prev + curr.score;
    }, 0);
    console.log(result / students.length);
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // 학생들의 모든 점수를 string으로 만들기
  // 여러가지 조건을 줄 때
  {
    const result = students
    .map((student)=> student.score)
    .filter((score)=>score >= 50)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
    .map((student)=> student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
  }