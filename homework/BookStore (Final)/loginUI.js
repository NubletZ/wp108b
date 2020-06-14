// set inner html for index.html
// 1. login
// 2. signin

const login = {}

login.html = `
<h1 class="logTitle" style="padding-top:50px">LOG IN</h1>
<p class="logInfo">Please log in before shopping in our store!</p><br>
<div class="logFormWrap1">
    <div class="logFormLeft">
        <label for="username" id="username">Username</label><br><br>
        <label for="password">Password</label><br><br>
    </div>
    <form class="logFormRight" id="loginForm">
        : <input type="text" id="username" name="username" class="logInput">
        : <input type="password" id="password" name="password" class="logInput">
    </form>
</div>

<button class="logButton" onclick="loginCheck()">Log In</button>
<p class="logInfoBottom">
    Don't have an account yet?
    <a class="logBottomLink" href="javascript:void(0)" onclick="signShow()">
        <b>Create Account</b>
    </span>
</p>
`

function logShow() {
    document.getElementById("logShow").innerHTML = login.html;
}


const signIn = {}

signIn.html = `
<h1 class="logTitle">SIGN IN</h1>
<p class="logInfo">Make an account and explore our store!</p><br>
<div class="logFormWrap2">
    <div class="logFormLeft">
        <label for="username">Username</label><br><br>
        <label for="address">Address</label><br><br>
        <label for="email">E-mail</label><br><br>
        <label for="password">Password</label><br><br>
        <label for="confPassword">Confirm password</label><br><br>
    </div>
    <form class="logFormRight" id="logData">
        : <input type="text" id="username" name="username" class="logInput" required>
        : <input type="text" id="address" name="address" class="logInput" required>
        : <input type="email" id="email" name="email" class="logInput" required>
        : <input type="password" id="password" name="password" class="logInput" required><br><br>
        : <input type="password" id="confPassword" name="confPassword" class="logInput">
        <button type="submit" class="logButton" onclick="signIn_Click()" id="signInButton">Sign In</button>
    </form>
</div>

<p class="logInfoBottom">
    Already have an account?
    <a class="logBottomLink" href="javascript:void(0)" onclick="logShow()">
        <b>Log In</b>
    </a>
</p>
`
function signShow(){
    document.getElementById("logShow").innerHTML = signIn.html;
}

