export default () => `
<h1>Do you want to know if you can help?</h1>
<h3>Please enter the name of the deceased:</h3>
<div class= "formContainer"></div>
<form name="nameValid" action="/action_page.php" onsubmit="return validateForm()" method="post">
<input type="text" name="firstVerif" value="First Name">
<input type="text" name="lastVerif" value="Last Name">
<input type="submit" value="Submit">
</form>
`;

// Enter the name of the deceased to access an array of dead people.