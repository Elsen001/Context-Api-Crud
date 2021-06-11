export default (state,action)=>{
    switch(action.type){
        case "ADD-INFO":
            return{
                ...state,
                infos:[action.payload,...state.infos]
            }
        case "DELETE-INFO":
            return{
                ...state,
                infos:state.infos.filter(info=>info.id!==action.payload)
            }   
        case "EDIT-INFO":
            const editInfo = action.payload;
            const updatedInfo = state.infos.map(info=>{
                if(info.id===editInfo.id){
                    return editInfo
                }
                return info
            })
            return{
                ...state,
                infos:updatedInfo
            }
            

            default :return state;
    }
}