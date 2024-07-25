import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../api/api.js';

export const authThunk = createAsyncThunk(
    'auth/authThunk',
    async () => {
        return await authAPI.getAuth();
    }
);

export const logInThunk = createAsyncThunk(
    'form/sendFormThunk',
    async ({ data }) => {
        const responseLog = await authAPI.logIn(data);
        switch (responseLog.resultCode) {
            case 10:
                const responseCaptchaWithMessage = {
                    url: await authAPI.getCaptcha(),
                    message: responseLog.messages[0],
                }
                return responseCaptchaWithMessage;
            case 0:
                const responseAuth = await authAPI.getAuth();
                return responseAuth;
            default:
                return responseLog;
        }
    }
);

export const logOutThunk = createAsyncThunk(
    'auth/logOutThunk',
    async () => {
        return await authAPI.logOut();
    }
);

function authUpdate(state, action) {
    if ((typeof action.payload?.resultCode === 'number') 
        && (action.payload.resultCode === 0)) {

        state.data = { ...action.payload.data };
        state.isAuth = true;
        state.error = null;
    }
};

const initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    captchaUrl: null,
    error: null,
    isAuth: false,
    waitingAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: (build) => {
        (function getAuthInfo() {
            build.addCase(authThunk.pending, (state, action) => {
                state.waitingAuth = true;
            });
            build.addCase(authThunk.fulfilled, (state, action) => {
                authUpdate(state, action);
                state.waitingAuth = false;
            });
            build.addCase(authThunk.rejected, (state, action) => {
                console.log('Auth is rejected!');
                state.waitingAuth = false;
            });
        })();

        (function LogIn() {
            build.addCase(logInThunk.pending, (state, action) => {
                state.waitingAuth = true;
                state.captchaUrl = null;
            });
            build.addCase(logInThunk.fulfilled, (state, action) => {
                if (action.payload?.url) {
                    state.captchaUrl = action.payload.url.url;
                    state.error = action.payload.message;
                }
                if (action.payload?.messages?.length > 0) {
                    state.error = action.payload.messages[0];
                }
                authUpdate(state, action);
                state.waitingAuth = false;
            });
            build.addCase(logInThunk.rejected, (state, action) => {
                console.log('LogIn is rejected!');
                state.waitingAuth = false;
            })
        })();

        (function logOut() {
            build.addCase(logOutThunk.pending, (state, action) => {
                state.waitingAuth = true;
            });
            build.addCase(logOutThunk.fulfilled, (state, action) => {
                state.data.id = null;
                state.data.email = null;
                state.data.login = null;
                state.isAuth = false;

                state.waitingAuth = false;
            });
            build.addCase(logOutThunk.rejected, (state, action) => {
                console.log('LogOut is rejected!');
                state.waitingAuth = false;
            });
        })();
    }
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;