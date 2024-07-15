// Original string and the character to search for
let str = "hello Gaurav";
let search = 'H';

// Convert both to lowercase to ensure case-insensitive comparison
let SearchInLowerCase = search.toLowerCase();
let StringInLowerCase = str.toLowerCase();

// Find the index of the search character in the string
let find = StringInLowerCase.indexOf(SearchInLowerCase);

// Check if the character was found and print the appropriate message
if (find != -1) {
  console.log(`${search} found at ${find} index in ${str}`);
} else {
  console.log("not found");
}
