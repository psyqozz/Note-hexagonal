Feature: Creating a note

@FullNote
Scenario Outline: Creates a fully completed note
  Given Writing a note by <author> with <content>
  When I save the note
  Then I received a <message> message

Examples:
| author | content | message |
| "Dylan" |  "yes" | "Success" |
