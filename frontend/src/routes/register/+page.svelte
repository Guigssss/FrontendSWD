<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').ActionData} */
    export let form;
</script>
<head>
    <meta charset="UTF-8">
    <title>Register</title>
</head>
<body>
<div id="login-form-wrap">
    <h2>Register</h2>
    <form id="login-form" use:enhance method="POST">
        <fieldset>
            <input type="text" id="username" name="username" placeholder="Username" required><i class="validation"><span></span><span></span></i>
        </fieldset>
        <fieldset>
            <input type="password" id="password" name="password" placeholder="Password" required><i class="validation"><span></span><span></span></i>
        </fieldset>
        <button type="submit" id="register" value="Register">Register</button>
    </form>
    <div id="create-account-wrap">
        <a href="/login">Back to Login</a>
    </div>
</div>
</body>