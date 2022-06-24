# Basic Calculator
This project is a basic calculator I made from scratch. I had followed tutorials like this when I first started learning how to code so I decided to challenge myself to make one on my own.

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

# [Update with the solution to calculating the users results]