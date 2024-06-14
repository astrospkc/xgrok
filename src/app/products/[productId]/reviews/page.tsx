import {Metadata} from "next"

type Props ={
    params:{
        productId:string;
    };

};

export const generateMetadata  = async ({
    params,
}:Props):Promise<Metadata> =>{
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`product ${params.productId}`);

        },100);
    });
    return {
        title :`Product ${title}`,
    };
};