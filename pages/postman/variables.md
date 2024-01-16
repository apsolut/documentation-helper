#### Variables
[Variables](https://learning.postman.com/docs/writing-scripts/script-references/variables-list/)
[Store and Use variebles](https://learning.postman.com/docs/sending-requests/variables/)


```js
  
    // Pre-request Script
    // Usage in Params (Value) {{dateToday}}
    const today = new Date();

    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = today.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    const dateToday = pm.globals.set('dateToday',formattedDate)

```
