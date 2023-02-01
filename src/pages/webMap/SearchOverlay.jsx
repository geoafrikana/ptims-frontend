import React from 'react'

function searchOverlay() {
  return (
    <div >
        <form>
        <p>Name: <input type='text' /> </p>
        <p>PTIN: <input type='text' /> </p>
        <p><label htmlFor="tax">Tax Status: </label>

    <select name="tax" id="tax">
  <option value="paid">Paid</option>
  <option value="owing">Owing</option>
</select></p>
<button>Submit</button>
</form>
    </div>
  )
}

export default searchOverlay