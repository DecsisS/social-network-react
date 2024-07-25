import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI, profileAPI } from "../../api/api.js";

export const getUserProfileThunk = createAsyncThunk(
    'profilePage/getUserProfileThunk',
    async ({newUserId}) => {
        const [data, followed, status] = await Promise.all([
            profileAPI.getUserData(newUserId), 
            profileAPI.getUserFollowed(newUserId),
            profileAPI.getStatus(newUserId),
        ]);
        return { data, followed, status };
    }
);

export const setFollowThunkProfile = createAsyncThunk(
    'profilePage/setFollowThunkProfile',
    async ({ id, followed }) => {
        const response = !followed 
                ? await usersAPI.setFollow(id)
                : await usersAPI.setUnfollow(id)
        return { response, id };
    }
);

export const updateStatusThunk = createAsyncThunk(
    'profilePage/updateUserStatus',
    async ({ statusText }) => {
        const response = await profileAPI.updateStatus(statusText);
        return { response, statusText };
    }
);

const initialState = {
    userInfo: {
        userId: null,
        fullName: '',
        photos: {
            large: '',
            small: '',
        },
        status: '',
        aboutMe: '',
        posts: [],
        lookingForAJob: false,
        lookingForAJobDescription: '',
        contacts: [],
        followed: false,
    },
    isFetching: false,
    isRequestFollow: [],
};

const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        addPost(state, action) {
            const postArray = state.userInfo.posts;
            let id = 0;
            if (postArray) {
                for (let i = 1; i <= postArray.length + 1; i++) {
                    !postArray[i - 1] && (id = i);
                }
            } else {
                id = 1;
            }
            postArray.push(
                {
                    id,
                    message: action.payload,
                    likesCount: 0,
                }
            );
        },
        deletePost(state, action) {
            state.userInfo.posts
                .filter((post) => post.id !== action.payload);
        }
    },
    extraReducers: (build) => {
        (function getUserProfile() {
            build.addCase(
                getUserProfileThunk.pending, (state) => {
                    state.isFetching = true;
                });
            build.addCase(
                getUserProfileThunk.fulfilled, (state, action) => {
                    state.userInfo = action.payload.data;
                    state.userInfo.posts = action.payload.posts ? action.payload.posts : [];
                    state.userInfo.status = action.payload.status;
                    state.userInfo.followed = action.payload.followed;
                    if (typeof state.userInfo.contacts === 'object') {
                        const keysArray = Object.keys(state.userInfo.contacts);
                        const valuesArray = keysArray.map((key) => {
                            return state.userInfo.contacts[key];
                        });
                        state.userInfo.contacts = valuesArray;
                    };
                    state.isFetching = false;
                });
            build.addCase(
                getUserProfileThunk.rejected, (state) => {
                    console.log('Fetching is rejected!');
                    state.isFetching = false;
                });
        })();

        (function setFollow() {
            build.addCase(
                setFollowThunkProfile.pending, (state, action) => {
                    state.isRequestFollow.push(Number(action.meta.arg.id));
                });
            build.addCase(
                setFollowThunkProfile.fulfilled, (state, action) => {
                    if (action.payload.response.resultCode === 0) {
                        (Number(state.userInfo.userId) === Number(action.payload.id))
                            && (state.userInfo.followed = !state.userInfo.followed);
                    }
                    state.isRequestFollow = state.isRequestFollow
                        .filter((id) => id !== Number(action.payload.id));
                });
            build.addCase(
                setFollowThunkProfile.rejected, (state, action) => {
                    console.log('Follow is rejected');
                    state.isRequestFollow = state.isRequestFollow
                        .filter((id) => id !== Number(action.meta.arg.id));
                })
        })();

        (function updateStatus() {
            build.addCase(updateStatusThunk.pending, (state, action) => {

            })
            build.addCase(updateStatusThunk.fulfilled, (state, action) => {
                if (Number(action.payload.response.resultCode) === 0) {
                    state.userInfo.status = action.payload.statusText;
                }
            })
            build.addCase(updateStatusThunk.rejected, (state, action) => {
                console.log('Status update is rejected');
            })
        })();
    }
});

export const { updateNewTextPost, addPost, deletePost } = profileSlice.actions;

export default profileSlice.reducer;