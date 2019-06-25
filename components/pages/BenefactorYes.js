export default () => `
<div id="container">
<div id = "err" class ="center red"></div>
        <form id="login">
            <div>
                <label>username: 
                    <input type="text" name="usrName" id="usrName" autofocus placeholder="username">
                </label>
            </div>
            <div>
                <label class= "pass" >password: 
                        <input type="password" name="password" id="password" placeholder="password">
                </label>
            </div>
         <div>   
            <input class="center block" type="submit" value="Sign in"  >
        </div>
        </form>
        <div class = "center">
            <ul><h3>
            ${buildNavHTML(state.links.secondary)}
            </h3><ul>
        </div>    
    </div>
    
`;