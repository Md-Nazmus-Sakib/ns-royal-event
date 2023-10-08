<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A 

<i>greeting is a variable and it's value is an empty object in empty object is a truthy value so option is A.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>sum function have two parameter a and b, and that is return the sum of a and b , when function called pass the argument a= number 1 and b= string 2 when we add one number and a string they are place in side by side and the whole output is a string.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>In this question food is an array which have a different type string inside it.In the second line info is an object and the value of favoriteFood is the first index of food. then info.favoriteFood value is change by another one. so we replace the object value of favoriteFood in variable info. when we console log food it is no change on it's original array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In this question sayHi is a function ant it has a parameter name, when we call the function it return a string Hi there, and the value of that we pass the argument when we call the function in this case we have no argument pass in the function , if there is no argument pass then the value is undefined,thats why we get Hi there which is string and the value is undefined so B is the correct answer.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In the Case count variable is 0 and the array name nums and the value is 4 , we use forEach loop to get all the array value which is put in num we have a condition if(num) means if there is a value then count is increase . At the first when num is 0 then if condition is not full fill because 0 is a falsy value but if condition check truthy value so first case num is 0 then count is also 0 when num is 1 then if condition is true and the count value is 0+1=1 so when num=1 then count=1 similarly when num =3 the count=3, so finally we get the count value is 3.</i>

</p>
</details>
