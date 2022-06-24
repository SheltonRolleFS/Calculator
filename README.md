# Basic Calculator
This project is a basic calculator I made from scratch. I had followed tutorials like this when I first started learning how to code so I decided to challenge myself to make one on my own.

#### Instillation Instructions
After cloning the repository run either of the following commands:

```npm install```

or

```yarn install```
## My Thought Process
#### Displaying the users entries
When using a calculator, it would obviously be nice to see the numbers you're entering. So, to display the users entry I decided to use an input element. Now realistically I could have used a normal div or paragraph element for this but the input tag was just my initial choice. Also if I wanted, with an input I could allow the user to type their number in so boom, planning ahead.

Getting back to displaying what the user enters, since I'm using react, I created a state variable using the useState hook called value and one called entry. Value will hold whatever needs to be displayed to the user and entry is used to keep track of the number the user is entering. So as the user enters numbers and operations, we keep update their entry and whenever the entry state is updated the value state is updated to match it. 

**Problem #1**
Now while I define this as a problem, it was really just something I wanted to point out. Since we're using a calculator the initial thought would be that we would be using numbers for all these entries, but, if you try to add one number to the end of another, in code, javascript would take that as u wanting to add the numbers together and thats not what we want.

_**Solution?**_
Use a string instead of a number. We basically just have an empty string to start, and every number the user enters we just concat to the end of that string. Then when we want to make the calculation, we convert that string to a int or float and continue as normal.

**Code Example**
```javascript
	const [value, setValue] = useState("");
	const [entry, setEntry] = useState("");

	const concatEntries = (singleEntry) => {
		let newNumber = entry.concat(singleEntry);
		setEntry(newNumber);
	};

	useEffect(() => {
		setValue(entry);
	}, [entry])

	return (
		<input id="result" type="text" value={value} disabled />
	)
```

### Calculating the users results
When I first tackled this portion of the calculator, my initial plan was to save all the entries and operations the user entered then somehow do each one in order. It took me about 5 minutes to realize how much extra work that is. So I said screw that and decided to just calculate everything as it goes.

To do this, I updated my updateOperation function so that as more operations are entered calculations are made, saved and then everything is updated. I use a variable called waitingNumber to represent the previous number the user entered or the result of the previous calculation the user did in their current line of calculations, since calculators should allow for us to make more than one calculation at once.

By default this waitingNumber variable is null, so if an operation is updated and waitingNumber is null, it simply sets waitingNumber equal to the current entry, sets the operation to whatever the user clicked and clears entry.

If there is a waiting number, the updateOperation runs the calculate function to get the current result of what the user has entered so far and sets the waiting number equal to that result. This is so when the user enters another operation and entry, we still have the previous result that they want to use.

**My updateOperation Function**
```javascript
const updateOperation = (newOperation) => {
	if (waitingNumber === null){
		setWaitingNumber(entry);
		setOperation(newOperation);
		setEntry("");
		return
	}

	const result = calculate(
		parseFloat(waitingNumber),
		parseFloat(entry),
		operation
	)

	setWaitingNumber(result);
	setOperation(newOperation);
	setEntry("");
}
```

**Problem #2**
Besides figuring out how to calculate everything, this second problem I ran into was the first time I really had to sit back and think about how I would solve it. This problem was figuring out how to display the users results while also preparing the calculator to accept a whole new set of calculations.

The reason this was a problem was because I use a value state to display numbers to the user and whenever my entry state changes, I updated the value state to be equal to the entry. I do this so as the user enters numbers the display automatically shows what they are entering. However, if I tried clearing the entry state to prepare for a new entry, it would clear the value state and no longer show the user their result. We obviously don't want that so I got to thinking and heres what I came up with.

_**Solution**_
I have a concatEntries function that basically makes the numbers the user enters. Since the user would have to enter a number to start a new set of calculations, what I did was make a completed state with a boolean value. When the user clicks the = button, completed gets set to true, and in the concatEntries function, if completed is true it clears everything but, immediatly sets entry equal to what the user is now entering.

So for a little more detail, when the user clicks equal, the value being shown to them is their results, and the entry state is still equal to whatever they entered last, but, as soon as they start entering new numbers, everything resets right before and the whole process starts fresh. This way I could keep my simple way of updating value based on result without having to hack my way to keeping the final value while resetting entry.

**Here is my concatEntries function**
```javascript
const concatEntries = (singleEntry) => {
	if (completed){
		clear();
		setEntry(singleEntry);
		setCompleted(false);
		return;
	}
	let newNumber = entry.concat(singleEntry);
	setEntry(newNumber);
}
```