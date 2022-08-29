export const SELECT_PROJECT = "SELECT_PROJECT"
export const TOGGLE_GROUP   = "TOGGLE_GROUP"

export const selectProject = (groupId,projectId)=>{
    return {
        type:"SELECT_PROJECT",
        payload:{
            groupId,
            projectId
        }
    }
}

export function toggleGroup(groupId){
    return {
        type:"TOGGLE_GROUP",
        payload:{
            groupId,
        }
    }
}