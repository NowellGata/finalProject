export default () => `
<html>
<body>
<div class= "jumbotron">
<form class="form-horizontal" action="https://formspree.io/nowell.gata@gmail.com" method="POST" />

<!-- Form Name -->
<legend>Obituary</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">First Name</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="first name" class="form-control input-md">
  <span class="help-block"></span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Last Name</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="last name" class="form-control input-md">
  <span class="help-block"></span>  
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="textarea">Obituary</label>
  <div class="col-md-4">                     
    <textarea class="form-control" id="textarea" name="textarea">Tell us about the Deceased.</textarea>
  </div>
</div>

<!-- File Button --> 
<div class="form-group">
  <label class="col-md-4 control-label" for="filebutton">Photo</label>
  <div class="col-md-4">
    <input id="filebutton" name="filebutton" class="input-file" type="file">
  </div>
</div>

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="singlebutton">Submit</label>
  <div class="col-md-4">
    <button id="dead" name="singlebutton" class="btn btn-primary" value="send">Submit</button>
  </div>
</div>

</fieldset>
</form>
</body>
</div>

</html>
`;


/* <h1>Necessary actions</h1>
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
</div> */