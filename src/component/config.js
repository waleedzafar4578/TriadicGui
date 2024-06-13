const serverAddress="https://triadicsqldb.onrender.com";

const config = {
    login_api: serverAddress+"/ln",
    create_account_api: serverAddress+"/ca",
    help_api:serverAddress+"/help",
    result_api:serverAddress+"/result",
    health_check_api:serverAddress+"/health_check",
    process_query_api:serverAddress+"/pq",
    token_check_api:serverAddress+"/checkt",
};

export default config;