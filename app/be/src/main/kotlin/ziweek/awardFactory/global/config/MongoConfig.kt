package ziweek.awardFactory.global.config

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.client.MongoClient
import com.mongodb.client.MongoClients
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration


@Configuration
class MongoConfig(
    @Value("\${spring.data.mongodb.database}")
    val database: String,

    @Value("\${spring.data.mongodb.uri}")
    val uri: String
): AbstractMongoClientConfiguration() {
    override fun getDatabaseName(): String {
        return database
    }

    override fun mongoClient(): MongoClient {
        val connectionString = ConnectionString(uri)

        val mongoClientSettings = MongoClientSettings
            .builder()
            .applyConnectionString(connectionString)
            .build()

        return MongoClients.create(mongoClientSettings)
    }

}