# Resolvit
This is a test application in order to parse some text and get a JSON print. To use this application, you must.
1) Install NodeJS for your OS
2) Download this files to your computer
3) Open the command prompt in that folder, and type: node parser.js, in order to convert the file input.txt to output.json file by default, and: node parser.js input.file output.file in order to conver other two files in the same folder.

input.txt content:
Take this paragraph of text and return an alphabetized list of ALL unique words.  A unique word is any form of a word often communicated with essentially the same meaning. For example, fish and fishes could be defined as a unique word by using their stem fish. For each unique word found in this entire paragraph, determine the how many times the word appears in total. Also, provide an analysis of what unique sentence index position or positions the word is found. The following words should not be included in your analysis or result set: "a", "the", "and", "of", "in", "be", "also" and "as".  Your final result MUST be displayed in a readable console output in the same format as the JSON sample object shown below.

output.json content:
{
	"Results": [
		{
			"word": "ALL",
			"total-occurrences": 1,
			"sentence-indexes": [
				0
			]
		},
		{
			"word": "alphabetized",
			"total-occurrences": 1,
			"sentence-indexes": [
				0
			]
		},
		{
			"word": "an",
			"total-occurrences": 2,
			"sentence-indexes": [
				0,
				4
			]
		},
		{
			"word": "analysis",
			"total-occurrences": 2,
			"sentence-indexes": [
				4,
				5
			]
		},
		{
			"word": "any",
			"total-occurrences": 1,
			"sentence-indexes": [
				1
			]
		},
		{
			"word": "appear",
			"total-occurrences": 1,
			"sentence-indexes": [
				3
			]
		},
		{
			"word": "below",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "by",
			"total-occurrences": 1,
			"sentence-indexes": [
				2
			]
		},
		{
			"word": "communicated",
			"total-occurrences": 1,
			"sentence-indexes": [
				1
			]
		},
		{
			"word": "console",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "could",
			"total-occurrences": 1,
			"sentence-indexes": [
				2
			]
		},
		{
			"word": "defined",
			"total-occurrences": 1,
			"sentence-indexes": [
				2
			]
		},
		{
			"word": "determine",
			"total-occurrences": 1,
			"sentence-indexes": [
				3
			]
		},
		{
			"word": "displayed",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "each",
			"total-occurrences": 1,
			"sentence-indexes": [
				3
			]
		},
		{
			"word": "entire",
			"total-occurrences": 1,
			"sentence-indexes": [
				3
			]
		},
		{
			"word": "essentially",
			"total-occurrences": 1,
			"sentence-indexes": [
				1
			]
		},
		{
			"word": "example",
			"total-occurrences": 1,
			"sentence-indexes": [
				2
			]
		},
		{
			"word": "final",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "fish",
			"total-occurrences": 3,
			"sentence-indexes": [
				2,
				2,
				2
			]
		},
		{
			"word": "following",
			"total-occurrences": 1,
			"sentence-indexes": [
				5
			]
		},
		{
			"word": "For",
			"total-occurrences": 2,
			"sentence-indexes": [
				2,
				3
			]
		},
		{
			"word": "form",
			"total-occurrences": 1,
			"sentence-indexes": [
				1
			]
		},
		{
			"word": "format",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "found",
			"total-occurrences": 2,
			"sentence-indexes": [
				3,
				4
			]
		},
		{
			"word": "how",
			"total-occurrences": 1,
			"sentence-indexes": [
				3
			]
		},
		{
			"word": "included",
			"total-occurrences": 1,
			"sentence-indexes": [
				5
			]
		},
		{
			"word": "index",
			"total-occurrences": 1,
			"sentence-indexes": [
				4
			]
		},
		{
			"word": "is",
			"total-occurrences": 2,
			"sentence-indexes": [
				1,
				4
			]
		},
		{
			"word": "JSON",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "list",
			"total-occurrences": 1,
			"sentence-indexes": [
				0
			]
		},
		{
			"word": "many",
			"total-occurrences": 1,
			"sentence-indexes": [
				3
			]
		},
		{
			"word": "meaning",
			"total-occurrences": 1,
			"sentence-indexes": [
				1
			]
		},
		{
			"word": "MUST",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "not",
			"total-occurrences": 1,
			"sentence-indexes": [
				5
			]
		},
		{
			"word": "object",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "often",
			"total-occurrences": 1,
			"sentence-indexes": [
				1
			]
		},
		{
			"word": "or",
			"total-occurrences": 2,
			"sentence-indexes": [
				4,
				5
			]
		},
		{
			"word": "output",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "paragraph",
			"total-occurrences": 2,
			"sentence-indexes": [
				0,
				3
			]
		},
		{
			"word": "position",
			"total-occurrences": 2,
			"sentence-indexes": [
				4,
				4
			]
		},
		{
			"word": "provide",
			"total-occurrences": 1,
			"sentence-indexes": [
				4
			]
		},
		{
			"word": "readable",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "result",
			"total-occurrences": 2,
			"sentence-indexes": [
				5,
				6
			]
		},
		{
			"word": "return",
			"total-occurrences": 1,
			"sentence-indexes": [
				0
			]
		},
		{
			"word": "same",
			"total-occurrences": 2,
			"sentence-indexes": [
				1,
				6
			]
		},
		{
			"word": "sample",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "sentence",
			"total-occurrences": 1,
			"sentence-indexes": [
				4
			]
		},
		{
			"word": "set",
			"total-occurrences": 1,
			"sentence-indexes": [
				5
			]
		},
		{
			"word": "should",
			"total-occurrences": 1,
			"sentence-indexes": [
				5
			]
		},
		{
			"word": "shown",
			"total-occurrences": 1,
			"sentence-indexes": [
				6
			]
		},
		{
			"word": "stem",
			"total-occurrences": 1,
			"sentence-indexes": [
				2
			]
		},
		{
			"word": "Take",
			"total-occurrences": 1,
			"sentence-indexes": [
				0
			]
		},
		{
			"word": "text",
			"total-occurrences": 1,
			"sentence-indexes": [
				0
			]
		},
		{
			"word": "their",
			"total-occurrences": 1,
			"sentence-indexes": [
				2
			]
		},
		{
			"word": "this",
			"total-occurrences": 2,
			"sentence-indexes": [
				0,
				3
			]
		},
		{
			"word": "time",
			"total-occurrences": 1,
			"sentence-indexes": [
				3
			]
		},
		{
			"word": "total",
			"total-occurrences": 1,
			"sentence-indexes": [
				3
			]
		},
		{
			"word": "unique",
			"total-occurrences": 5,
			"sentence-indexes": [
				0,
				1,
				2,
				3,
				4
			]
		},
		{
			"word": "using",
			"total-occurrences": 1,
			"sentence-indexes": [
				2
			]
		},
		{
			"word": "what",
			"total-occurrences": 1,
			"sentence-indexes": [
				4
			]
		},
		{
			"word": "with",
			"total-occurrences": 1,
			"sentence-indexes": [
				1
			]
		},
		{
			"word": "word",
			"total-occurrences": 8,
			"sentence-indexes": [
				0,
				1,
				1,
				2,
				3,
				3,
				4,
				5
			]
		},
		{
			"word": "Your",
			"total-occurrences": 2,
			"sentence-indexes": [
				5,
				6
			]
		}
	]
}
