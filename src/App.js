import React from 'react';
import './App.css';
import Elements from './Elements';
import { evaluate } from 'mathjs'



function App() {

  const [display, setDisplay] = React.useState("0");
  const [result, setResult] = React.useState(0);

  let result_2 = 0;


  function handleClick(value) {
    console.log("You clicked this number" + value)
    if (display === "0") {
      setDisplay(value)
    }
    else {
      setDisplay(prev => prev + value)
    }

  }


  function multiple_operators_handling(s2) {

    let len = s2.length
    console.log(len)

    let lenght_to_slice_to = len;


    for (let i = len - 1; i > 0; i--) {
      if (s2[i] === "+" || s2[i] === "-" || s2[i] === "*" || s2[i] === "/") {
        if (s2[i - 1] === "+" || s2[i - 1] === "-" || s2[i - 1] === "*" || s2[i - 1] === "/") {
          lenght_to_slice_to = i - 1;
        }

      }

    }
    return lenght_to_slice_to

  }


  function handleClickOperators(value) {
    console.log("You clicked this operator" + value)
    if (value === "AC") {
      setDisplay("0")
      result_2 = 0
    }
    else if (value === ".") {
      if (display[display.length - 1] === (".")) {
        console.log("This is wrong")
        //alert("You can't write more than 1 '.' after each other.")
      }
      else if (display[display.length - 2] === (".")) {
        //there is still a bug because it shouldn't work anytime it actually contains a . already.


      }
      else {
        setDisplay(prev => prev + value)
      }


    }
    else if (value === "=") {
      console.log(display)
      


      console.log(evaluate(display))
      let res = evaluate(display)


      if (result === 0) {
        console.log("Does it work???")
        /* setResult(prev => {
           return (prev + res)
         })*/
        result_2 = result_2 + res;

      }
      else {
        //setResult(res)
        result_2 = res;
      }

      //we need to set the result before this
      setDisplay(prev => prev + value + result_2)
      //setResult(prev => prev +/*kéne valami function*/(display))
      console.log(result_2)
      setDisplay(result_2)
  

    }
    else {

      if (display[display.length - 1] === "+" || display[display.length - 1] === "-" || display[display.length - 1] === "/" || display[display.length - 1] === "*") {
        let slice_to = multiple_operators_handling(display)
        //I should do one for minus on its own  slice_to here should be multiple_operators_handling(display)-1 an in the minus it should be withput -1

        if ((display[display.length - 1] === "/" && value === "/") || (display[display.length - 1] === "*" && value === "*")) {
          slice_to = multiple_operators_handling(display) - 1
        }
        setDisplay(prev => prev.slice(0, slice_to) + value)
      }
      else {
        setDisplay(prev => prev + value)
      }



    }

  }

  const numbers = [{ id: "one", value: "1" }
    , { id: "two", value: "2" },
  { id: "three", value: "3" },
  { id: "four", value: "4" },
  { id: "five", value: "5" },
  { id: "six", value: "6" },
  { id: "seven", value: "7" },
  { id: "eight", value: "8" },
  { id: "nine", value: "9" },
  { id: "zero", value: "0" }]
  const operators = [
    { id: "equals", value: "=" },
    { id: "decimal", value: "." },
    { id: "add", value: "+" },
    { id: "subtract", value: "-" },
    { id: "multiply", value: "*" },
    { id: "divide", value: "/" },
    { id: "clear", value: "AC" }

  ]

  const numbers_jsx = numbers.map(number => <Elements key={number.id} class="numbers" id={number.id} value={number.value} handleClick={handleClick} />)

  const operators_jsx = operators.map(operator => <Elements key={operator.id} class="operators" id={operator.id} value={operator.value} handleClick={handleClickOperators} />)

  return (
    <main>
      <div id="display">{display}</div>
      {numbers_jsx}
      {operators_jsx}

    </main>
  );
}

export default App;
