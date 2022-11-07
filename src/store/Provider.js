import { useReducer } from "react";
import Context from "./Context";
import Reducer,{initState} from "./Reducer";




const Provider = ({children})=>{
    const [appState, dispatch] = useReducer(Reducer, initState);
    return <Context.Provider value={[appState, dispatch]}>
                {children}
            </Context.Provider>;
}

export default Provider;