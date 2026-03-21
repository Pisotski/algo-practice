// Task 1: “Safe Object”

// Create a proxy that:

// Requirements:
// 	1.	Prevent access to non-existing properties
// 	2.	Throw an error if property doesn’t exist
// 	3.	Log every access

/**
const user = { name: "Henry", age: 25 };
const safeUser = createSafeObject(user);

safeUser.name   // logs + returns "Henry"
safeUser.age    // logs + returns 25
safeUser.email  // throws error
 */

/**
 Task 2: “Auto JSON localStorage”

Make your earlier idea actually useful:

Wrap localStorage so that:
	•	it auto JSON.stringify on set
	•	it auto JSON.parse on get

  storage.user = { name: "Henry" };

storage.user
// →\{ name: "Henry" }  (not string!)

Task 3 (harder): “Default Values”

Create a proxy that returns default values:

const config = withDefaults({}, {
  theme: "dark",
  lang: "en"
});

config.theme  // "dark"
config.lang   // "en"
config.other  // undefined
 */
