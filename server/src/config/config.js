module.exports = {
    port:process.env.PORT || 8081,
   
    db: {
        database: process.env.DB_NAME || "tabtracker",
        username: process.env.DB_USER || "tabtrackers",
        password:process.env.DB_PASS || "tabtracker", 
        options:{
            dialect:process.env.DIALECT ||"sqlite", 
            host:process.env.HOST ||"localhost", 
            storage:"./tabtracker.sqlite"
        }
    }
}