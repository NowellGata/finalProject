function buildNavHTML(stateLinks) {
    return stateLinks
        .map(
            (link) =>
            `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`
        )
        .join(' ');
}

export default (state) => `
<h1>Necessary actions</h1>
<h2>What can be done to help you in your time of need?</h2>

<h3>Please enter information for the DECEASED</h3>
<div class="obituary">
  
</div class= "formContainer">
  <form action="/action_page.php"> 
  Name of the Deaceased:<br>
  <input type="text" name="deadFirst" value="First Name">
  <br>
  Last name of the Deaceased:<br>
  <input type="text" name="deadLast" value="Last Name">
  <br><br>
 <textarea rows=10 cols=50 name="obit" value="obit">Enter a brief obituary</textarea>
</form> 
  <label for="avatar">Please choose a photo of the DECEASED</label>

<input type="file"
       id="deadPhoto" name="avatar"
       accept="image/png, image/jpeg">

<h3>Sometimes, all it takes is an ACT OF KINDNESS </h3>

<div class="formContainer">
<form action="/action_page.php"> 
  Favorable Action:<br>
  <input type="text" name="aocOne" value="Act of Kindness1">
  <br>
  Favorable Action:<br>
  <input type="text" name="aocTwo" value="Act of Kindness2">
  <br><br>
  <input type="submit" value="Submit">
</form> 
</div>
`;