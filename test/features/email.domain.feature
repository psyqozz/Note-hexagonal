Feature: Sending an email

@ValidEmail
Scenario Outline: Send a valid email
  Given An email written to <to> from <from> with title <title> containing a note
  When I send the email
  Then I received a <message> status

Examples:
| to | from | title | message |
| "toi@me.fr" |  "me@you.fr" | "mail title" | "Success" |

