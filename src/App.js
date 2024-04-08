import React from 'react';
import './App.css';
import Elements from './Elements';
import { evaluate } from 'mathjs';
import { checkForMultipleDot, multiple_operators_handling } from './usedFunctions';



function App() {

  const [display, setDisplay] = React.useState("0");

  let result_2 = 0;


  function errrHandling() {
    setDisplay("ERR")
    setTimeout(() => {
      setDisplay("0");
      result_2 = 0;
    }, 2000)

  }

  /*
    Handling  clicking the elements

    If there wasn't anything or 0 on the display previously it just sets display to whatever was clicked

    If there was something on the display concats the clicked values to the display
  
  */

  function handleClick(value) {
    console.log("You clicked this number" + value)
    if (display === "0") {
      setDisplay(value)
    }
    else {
      setDisplay(prev => prev + value)
    }

  }


  /*
    Handling  clicking the operators
  
  */


  function handleClickOperators(value) {
    console.log("You clicked this operator" + value)
    switch (value) {
      case "AC":
        //resetting the display
        setDisplay("0");
        result_2 = 0;
        break;
      case ".":
        //Only settig the display when the previous and the one before that is not "."
        if (display[display.length - 1] === (".")) {
          console.log("This is wrong")

        }
        else if (display[display.length - 2] === (".")) {
        }
        else {
          setDisplay(prev => prev + value)
        }
        break;
      case "=":
        //Checking for multiple dots in the expression.
        // If there is multiple dots --> error
        //if there isn't setting the display to the result of the expression
        try {
          let split = display.split(/[+\-\/*]/)

          let chckForMultipleDots = checkForMultipleDot(split)

          console.log(chckForMultipleDots)

          if (chckForMultipleDots === true) {
            //alert("Wrong too many dots")
            errrHandling();
          }
          else {
            console.log(display)
            console.log(evaluate(display))
            let res = evaluate(display)

            result_2 = result_2 + res;


            //we need to set the result before this
            //setDisplay(prev => prev + value + result_2)

            console.log(result_2)


            setDisplay(result_2)

          }

        }
        catch (err) {
          console.log(err)
        }

        break;
      case "+":
      case "-":
      case "/":
      case "*":
        if (display[display.length - 1] === "+" ||
           display[display.length - 1] === "-" || 
           display[display.length - 1] === "/" || 
           display[display.length - 1] === "*") {
          let slice_to = multiple_operators_handling(display)

          if ((display[display.length - 1] === "/" && value === "/") 
            || (display[display.length - 1] === "*" && value === "*")) {
            slice_to = multiple_operators_handling(display) - 1
          }
          setDisplay(prev => prev.slice(0, slice_to) + value)
        }
        else {
          setDisplay(prev => prev + value)
        }

        break;

    }

  }

  const numbers = [
    { id: "one", value: "1" },
    { id: "two", value: "2" },
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

  /*

  Creating the calculator numbers and operators using components. 
  
  */

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
