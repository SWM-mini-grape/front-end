export const SET_USER='USER/SET';

export const setUser=(user)=>({type:SET_USER, user});

const initalState={
    id:''
};

const user=(state=initalState, action)=>{
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                ...action.user
            }
        default:
            return state;
    }
}

export default user;