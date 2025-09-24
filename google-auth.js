async function handleCredentialResponse(response) {
    try {
        console.log("Google sign in token received.")
        const r = await signInWithGoogle(response.credential)
        let rText = await r.text()
        init2(rText)
    } catch (error) {
        console.log("Error in handleCredentialResponse()", error)
    }
}
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "695972657686-v7ssvu8102n5f1gt3lvfpoesac0esn0u.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("google-auth-button"),
        { theme: "outline", size: "large" }  // customization attributes
    );
    //google.accounts.id.prompt(); // also display the One Tap dialog
}
