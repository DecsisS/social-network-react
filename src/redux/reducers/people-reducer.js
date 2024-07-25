import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { usersAPI } from '../../api/api.js';

export const getUsersThunk = createAsyncThunk(
    'people/getUsersThunk',
    async ({selectedPage, pageSize}, ) => {
        return await usersAPI.getUsers(selectedPage, pageSize);
    },
);

export const setFollowThunkPeople = createAsyncThunk(
    'people/setFollowThunkPeople',
    async ({ id, followed }) => {
        const response = !followed 
                ? await usersAPI.setFollow(id)
                : await usersAPI.setUnfollow(id)
        return { response, id };
    }
);

const initialState = {
    people: [],
    pageSize: 10,
    totalCount: 0,
    pagesArray: [],
    selectedPage: 1,
    isFetching: false,
    isRequestFollow: [],
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setSelectedPage(state, action) {
            if (action.payload < state.pagesArray[0] 
                || action.payload > Number(state.pagesArray.slice(-1))) {
                return;
            }
            state.selectedPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        (function getUsers() {
            builder.addCase(
                getUsersThunk.pending, (state) => {
                    state.isFetching = true;
                });
            builder.addCase(
                getUsersThunk.fulfilled, (state, action) => {
                    if (action.payload.totalCount !== state.totalCount) {
                        const pages = Math.ceil(action.payload.totalCount / state.pageSize);
                        const newPagesArray = [];
                        for (let i = 1; i <= pages; i++) {
                            newPagesArray.push(i);
                        }
                        state.pagesArray = newPagesArray;
                        state.totalCount = action.payload.totalCount;
                    }

                    state.people = action.payload.items;
                    state.isFetching = false;
                });
            builder.addCase(
                getUsersThunk.rejected, (state) => {
                    console.log('Fetching is rejected');
                    state.isFetching = false;
                });
        })();

        (function setFollow() {
            builder.addCase(setFollowThunkPeople.pending, (state, action) => {
                state.isRequestFollow.push(Number(action.meta.arg.id));
            });
            builder.addCase(setFollowThunkPeople.fulfilled, (state, action) => {
                if (action.payload.response.resultCode === 0) {
                    state.people.forEach((user) => {
                        if (Number(action.payload.id) === Number(user.id)) {
                            user.followed = !user.followed;
                        }
                    })
                }
                state.isRequestFollow = state.isRequestFollow
                    .filter((id) => id !== Number(action.payload.id))
            });
            builder.addCase(setFollowThunkPeople.rejected, (state, action) => {
                console.log('Follow is rejected!');
                state.isRequestFollow = state.isRequestFollow
                    .filter((id) => id !== Number(action.payload.id));
            });
        })();
    },
});

export const { setSelectedPage } = peopleSlice.actions;

export default peopleSlice.reducer;