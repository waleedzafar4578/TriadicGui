//const serverAddress="https://triadicsqldb.onrender.com";
const serverAddress="http://127.0.0.1:4000";
const config = {
    login_api: serverAddress+"/ln",
    create_account_api: serverAddress+"/ca",
    help_api:serverAddress+"/help",
    result_api:serverAddress+"/result",
    health_check_api:serverAddress+"/health_check",
    process_query_api:serverAddress+"/pq",
    token_check_api:serverAddress+"/checkt",
    get_database_api:serverAddress+"/gdb",
};

export default config;