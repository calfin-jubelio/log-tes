import {client} from '../config/es-database'

const addmappingToIndex = async function(indexName:string, mapping:object){
    return await client.indices.putMapping({
        index: indexName,
        type: "_doc",
        include_type_name: true,
        body: mapping
    });
}

// test function to explain how to invoke.
export const  test = async () =>{
    const mapping = {
        properties: {
            uuid:{
                type: "text"
            },
            username:{
                type: "text"
            },
            service: {
                type: "text"
            },
            status: {
                type: "text"
            },
            request: {
                type: "nested"
            },
            response:{
                type: "nested"
            },
            activity:{
                type: "text"
            },
            log_date: {
                type: "date",
                format: "epoch_millis"
            }
        }
    }
    try {
        const resp = await addmappingToIndex('log_v2', mapping);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}

export default test