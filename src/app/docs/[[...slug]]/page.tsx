import React from 'react'

const slugPage = ({params}:{
    params:{
        slug:string[];
    };
}) => {
    if(params.slug?.length==2){
        return (<h1>the view feature {params.slug[0]} and concept {params.slug[1]}</h1>)
    }
    else if(params.slug?.length ==1){
        return (<h1> the view feature is {params.slug[0]}</h1>)
    }
    
    return (<h1> this is the slug page</h1>)
}


export default slugPage