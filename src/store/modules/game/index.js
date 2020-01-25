import {MAKE_GUESS} from "./actions.type";

import {
    START, NEXT_ROUND,
    END, ADD_RESULT,
    IS_GUESSED,
    SET_IS_WAITING_FOR_GUESS_RESULTS
} from "./mutations.type";

import {GuessMusicAPI} from "../../../api/guess_music";

export const state = {
    round: 0,
    roundResults: [],
    isWaitingForGuessResults: false,
    isPlaying: false,
};

export const actions = {
    async [MAKE_GUESS]({commit}, guess_data) {
        let {type, data} = guess_data;
        if (type && data) {
            commit(SET_IS_WAITING_FOR_GUESS_RESULTS, true);
            let result;
            try {
                result = await GuessMusicAPI.makeGuess(type, data);
            } catch (e) {
                console.log({e});
            }
            if (result === undefined) {
                commit(ADD_RESULT, {notFound: true});
            } else {
                commit(ADD_RESULT, result.data);
            }

            commit(SET_IS_WAITING_FOR_GUESS_RESULTS, false);
        }
    }
};

export const mutations = {
    [START](state) {
        state.isPlaying = true;
        state.round = 1;
    },

    [NEXT_ROUND](state) {
        state.round++
    },

    [END](state) {
        state.round = 0;
        state.isPlaying = false;
    },

    [IS_GUESSED](state, isGuessed) {
        state.roundResults[state.roundResults.length - 1].isGuessed = isGuessed;
    },

    [ADD_RESULT](state, payload) {
        state.roundResults.push(payload);
    },

    [SET_IS_WAITING_FOR_GUESS_RESULTS](state, isWaiting) {
        state.isWaitingForGuessResults = isWaiting;
    },
};

export const getters = {
    round(state) {
        return state.round;
    },

    roundResults(state) {
        return state.roundResults;
    },

    lastRoundResult(state) {
        if (state.roundResults.length !== 0)
            return state.roundResults[state.roundResults.length - 1];
        else
            return {}
    },

    isPlaying(state) {
        return state.isPlaying
    },

    isWaitingForGuessResults(state) {
        return state.isWaitingForGuessResults
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}