async function signInWithGoogle(token) {
    return await fetch(`${origin}/api/GoogleAuth`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
}

async function sendCodeToSignInWithEmail(email) {
    try {
        const request = {
            Email: email
        };
        const response = await fetch(`${origin}/sign-in/email/send-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        });
        console.log('Sign in code requested.');
        return response;
    } catch (error) {
        console.error('Error in sendCodeToSignInWithEmail():', error);
    }
}

async function confirmCodeToSignInWithEmail(email, code) {
    try {
        const request = {
            Email: email,
            Code: code
        };
        const response = await fetch(`${origin}/sign-in/email/confirm-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        });
        console.log('Sign in code confirmed.');
        return response;
    } catch (error) {
        console.error('Error in confirmCodeToSignInWithEmail():', error);
    }
}

async function fetchPlayerBalance(authToken, playerId) {
    try {
        const response = await fetch(`https://economy.services.api.unity.com/v2/projects/${projectId}/players/${playerId}/currencies`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        return await response.text();
    } catch (error) {
        console.error('Error in fetchPlayerBalance():', error);
        return "";
    }
}

async function fetchDailyReward(authToken) {
    try {
        const response = await fetch(`https://cloud-code.services.api.unity.com/v1/projects/${projectId}/modules/${moduleName}/DailyReward`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        const text = await response.text();
        return JSON.parse(text).output;
    } catch (error) {
        console.error('Error in fetchDailyReward():', error);
        return "";
    }
}

async function fetchAvailablePurchases(authToken) {
    try {
        const response = await fetch(`https://cloud-code.services.api.unity.com/v1/projects/${projectId}/modules/${moduleName}/GetAvailablePurchases`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        const text = await response.text();
        return JSON.parse(text).output;
    } catch (error) {
        console.error('Error in getAvailablePurchases():', error);
        return "";
    }
}

async function fetchFortuneWheelInfo(authToken) {
    try {
        const response = await fetch(`https://cloud-code.services.api.unity.com/v1/projects/${projectId}/modules/${moduleName}/GetForuneWheelInfo`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        // TODO @Low @Perf
        const text = await response.text();
        return JSON.parse(text).output;
    } catch (error) {
        console.error('Error in fetchFortuneWheelInfo():', error);
        return "";
    }
}

async function fetchAuthTokens(initData) {
    try {
        const response = await fetch(`${origin}/auth/tg`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(initData)
        });
        return await response.text();
    } catch (error) {
        console.error('Error in fetchAuthTokens():', error);
        return "";
    }
}

async function fetchAuthTokensForBrowser(authData) {
    try {
        const response = await fetch(`${origin}/auth/site-tg`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authData)
        });
        return await response.text();
    } catch (error) {
        console.error('Error in fetchAuthTokensForBrowser():', error);
        return "";
    }
}
