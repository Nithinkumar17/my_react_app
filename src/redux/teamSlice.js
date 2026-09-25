import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// GET Teams
export const fetchTeams = createAsyncThunk(
    "teams/fetchTeams",
    async () => {

        const response = await fetch(
            "http://localhost:3000/api/IPL"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch teams");
        }

        return await response.json();
    }
);


// DELETE Team from Firebase
export const deleteTeam = createAsyncThunk(
    "teams/deleteTeam",
    async (id) => {

        const response = await fetch(
            `http://localhost:3000/api/IPL/${id}`,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            throw new Error("Failed to delete team");
        }

        return id;
    }
);


const teamSlice = createSlice({

    name: "teams",

    initialState: {
        teamlist: [],
        loading: false,
        error: null,
    },

    reducers: {

        // Your other reducers
        addTeam: (state, action) => {
            state.teamlist.push(action.payload);
        },

    },

    extraReducers: (builder) => {

        builder

            // GET
            .addCase(
                fetchTeams.fulfilled,
                (state, action) => {

                    state.teamlist = action.payload;

                }
            )


            // DELETE
            .addCase(
                deleteTeam.fulfilled,
                (state, action) => {

                    state.teamlist =
                        state.teamlist.filter(
                            (team) =>
                                team.id !== action.payload
                        );

                }
            );

    },

});


export const {
    addTeam
} = teamSlice.actions;

export default teamSlice.reducer;