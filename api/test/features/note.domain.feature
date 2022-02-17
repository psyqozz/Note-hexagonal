Feature: Creating a note

@FullNote
Scenario Outline: Creates a fully completed note
  Given Writing a note by <author> with <content>
  When I save the note
  Then I received a <message> message

Examples:
| author | content | message |
| "Dylan" |  "yes" | "Success" |

@IncompleteNote
Scenario Outline: Creates an incomplete note
  Given Writing a note by <author> with <content>
  When I save the note
  Then I received a <message> message

@PostNote
Scenario Outline: Testing post request 
Given: Writing a note by <author> with <content>
When I submit the note
Then I received a <message> message

Examples:
| author | content | message |
| "" |  "no" | "Cannot create empty note" |
| "Théo" |  "" | "Cannot create empty note" |

