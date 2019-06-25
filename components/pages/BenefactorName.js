export default () => `
<form class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Name of the Deceased</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Text Input</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="placeholder" class="form-control input-md">
  <span class="help-block">help</span>  
  </div>
</div>

<!-- Button (Double) -->
<div class="form-group">
  <label class="col-md-4 control-label" for="button1id">Check Name</label>
  <div class="col-md-8">
    <button id="nameSub" name="button1id" class="btn btn-success">Submit</button>
    <button id="cancel" name="button2id" class="btn btn-danger">Cancel</button>
  </div>

</fieldset>
</form>
`;

// Enter the name of the deceased to access an array of dead people.
{
    /* <h1>Do you want to know if you can help?</h1>
    <h3>Please enter the name of the deceased:</h3>
    <div class= "formContainer"></div>
    <form name="nameValid" action="/action_page.php" onsubmit="return validateForm()" method="post">
    <input type="text" name="firstVerif" value="First Name">
    <input type="text" name="lastVerif" value="Last Name">
    <input type="submit" value="Submit">
    </form> */
}