import {SELECT_PROJECT,TOGGLE_GROUP} from '../actions/projectAction'
import {GROUP,PROJECT} from '../store'
import ProjectsData from '../data/ProjectsData'
import Immutable from 'immutable'

let defaultState = {projectGroup:[],stateUpdateType:GROUP}
ProjectsData.map( (projectGroup,i)=>{

    defaultState.projectGroup.push( {} )
    defaultState.projectGroup[i].isOpen = i===0?true:false
    defaultState.projectGroup[i].data = []
    // console.log(projectGroup)
    projectGroup.data.map((project,j)=>{
        defaultState.projectGroup[i].data.push(false)
    })
    defaultState.lastVideo = {
        groupId:-1,
        projectId:-1,
    }
})
// console.log(defaultState)

export default function projectReducer(state=defaultState,action){
    switch (action.type){
        case SELECT_PROJECT: 
            return Immutable.fromJS(state)
                        .setIn(['projectGroup', state.lastVideo.groupId, 'data', state.lastVideo.projectId], false)
                        .setIn(['projectGroup', action.payload.groupId, 'data', action.payload.projectId], true)
                        .setIn(['lastVideo', 'groupId'], action.payload.groupId)
                        .setIn(['lastVideo', 'projectId'], action.payload.projectId)
                        .setIn(['stateUpdateType'], PROJECT)
                            .toJS()
            return newState
        case TOGGLE_GROUP:
            //state.lastVideo.groupId
            let toggleGroupState = Immutable.fromJS(state)
                        .updateIn(['projectGroup', action.payload.groupId, 'isOpen'], val=>!val)
                        .setIn(['stateUpdateType'], GROUP)

            if( state.lastVideo.groupId === action.payload.groupId ){
                // if close group the same as the lastVideo group, stop it. Don't care about the groupId is true or false 
                // because if groupId=false (close) the video should not play.
                return toggleGroupState.setIn(['projectGroup', state.lastVideo.groupId, 'data', state.lastVideo.projectId], false)
                                .toJS()
            }else{
                return toggleGroupState.toJS()
            }
    }
    return state
}