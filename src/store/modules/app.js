

export default {
    state: {
        test: 'Coucou c\'est moi le store !'
    },
    getters: {
        getTest: (state) => () => {
            return state.test
        }
    },
    mutations: {
        setTest (state, statut) {
            state.formOpen = statut
        }
    },
    actions: {
        SET_TEST (context, statut) {
            context.commit('setTest', statut)
        }
    }
}